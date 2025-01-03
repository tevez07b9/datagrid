import { useMemo, useState } from "react";
import styles from "./DataGrid.module.css";
import Checkbox from "./Checkbox";
import StatusIndicator from "./StatusIndicator";
import Button from "./Button";

interface RowData {
  name: string;
  device: string;
  path: string;
  status: string;
}

interface DataGridProps {
  data: RowData[]
}

// Generated a hashed index, considering the row datas are unique
// Could have used index based id's, but could cause bugs if
// rows are added, removed, or reordered
const generateRowId = (row: RowData, index: number): string => {
  return `${index}-${JSON.stringify(row)}`;
}

const DataGrid: React.FC<DataGridProps> = ({ data }) => {
  const [selectedRows, setSelectedRows] = useState<string[]>([])

  // Memoized table data to avoid recalculating row IDs on each render
  const momoizedTableData = useMemo(
    () => data.map((row, index) => ({ id: generateRowId(row, index), ...row })),
    [data]
  )

  const handleRowSelection = (rowId: string, isSelected: boolean) => {
    setSelectedRows(prev => isSelected ? [...prev, rowId] : prev.filter(id => id !== rowId))
  }

  const handleSelectAll = (isSelected: boolean) => {
    setSelectedRows(isSelected ? momoizedTableData.map(row => row.id) : []);
  }

  const handleDownload = () => {
    const selectedData = selectedRows.map((rowId) => {
      const { id, ...rowData } = momoizedTableData.find(row => row.id === rowId)
      return rowData
    }).filter(Boolean);

    console.log({ selectedData })

    alert(`Selected Rows: \n${JSON.stringify(selectedData, null, 2)}`);
  }

  // flags
  const allSelected = selectedRows.length === momoizedTableData.length;
  const someSelected = selectedRows.length > 0 && !allSelected;
  const downloadable = selectedRows.every(rowId => {
    const row = momoizedTableData.find(row => row.id === rowId);
    return row?.status === 'available';
  })

  return (
    <div className={styles.container}>
      <h1>DataGrid</h1>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>
                <Checkbox
                  checked={allSelected}
                  indeterminate={someSelected}
                  onChange={(e) => handleSelectAll(e.target.checked)}
                />
              </th>
              <th>Name</th>
              <th>Device</th>
              <th>Path</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {momoizedTableData.map((row) => (
              <tr key={row.id}>
                <td>
                  <Checkbox
                    checked={selectedRows.includes(row.id)}
                    onChange={(e) => handleRowSelection(row.id, e.target.checked)}
                  />
                </td>
                <td>{row.name}</td>
                <td>{row.device}</td>
                <td>{row.path}</td>
                <td>
                  <StatusIndicator status={row.status} /> {row.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Button
        onClick={handleDownload}
        disabled={!downloadable || selectedRows.length === 0}
      >
        Download Selected
      </Button>
      <p>{selectedRows.length > 0 ? `${selectedRows.length} Selected` : 'None Selected'}</p>
    </div>
  )

}

export default DataGrid;