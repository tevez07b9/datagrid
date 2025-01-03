import './App.css'
import DataGrid from './components/DataGrid'
import { testData } from './staticData'

function App() {

  return (
    <>
      <DataGrid data={testData} />
    </>
  )
}

export default App
