# DataGrid 

## Introduction
The **DataGrid** is a reusable React component designed to display tabular data with enhanced functionalities. It supports features like row selection, indeterminate checkbox states, and a "Download Selected" button with specific conditions. The table automatically rerenders when data is updated, making it flexible for dynamic use cases.

## Project Stack
This project is built using the following technologies:

- **React 18**: A JavaScript library for building user interfaces.
- **TypeScript**: For type safety and better developer experience.
- **CSS Modules**: For scoped and reusable styles.

## Features
- Displays tabular data.
- Select rows individually or using a "Select All" checkbox.
- Supports an indeterminate state for the "Select All" checkbox.
- Shows a status indicator with color coding (e.g., green for "Available").
- Enables a "Download Selected" button only when all selected rows are downloadable.
- Alert functionality to display selected rows in JSON format.

## How to Run Locally
Follow these steps to set up and run the project locally:

### Prerequisites
Ensure you have the following installed:
- **Node.js** (v16 or later)
- **npm** or **yarn**

### Steps
1. **Clone the Repository**
   ```bash
   git clone https://github.com/tevez07b9/datagrid.git
   cd datagrid-component
   ```

2. **Install Dependencies**
   Using npm:
   ```bash
   npm install
   ```
   Or using yarn:
   ```bash
   yarn install
   ```

3. **Start the Development Server**
   Using npm:
   ```bash
   npm start
   ```
   Or using yarn:
   ```bash
   yarn start
   ```

4. **View in Browser**
   Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

### File Structure
- `src/components/DataGrid.tsx`: Main reusable DataGrid component.
- `src/components/Checkbox.tsx`: Custom checkbox component with indeterminate state.
- `src/components/StatusIndicator.tsx`: Component for displaying status indicators.
- `src/components/Button.tsx`: Reusable button component.

### Customization
You can pass different datasets as props to the `DataGrid` component. For example:

```tsx
<DataGrid data={yourData} />
```

### Example Dataset
```json
[
  { "name": "file1.exe", "device": "Device1", "path": "C:\\path1", "status": "available" },
  { "name": "file2.exe", "device": "Device2", "path": "C:\\path2", "status": "scheduled" }
]
```

## License
This project is open-source and available under the MIT License.