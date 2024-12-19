import React, { useState } from "react";
import MaterialTable from "material-table";
import { TablePagination, Button, Toolbar, Card, CardContent } from "@mui/material";
import { makeStyles } from "@mui/styles";
import "./Issue.css";

const useStyles = makeStyles({
  statusButton: {
    borderRadius: "12px",
    color: "#d71111",
    padding: "2px 10px",
    minWidth: "90px",
    "&.done": {
      color: "#35b135",
      backgroundColor: "#B9EAB3"
    },
    "&.pending": {
      color: "#cd8520",
      backgroundColor: "#FEF9C3"
    },
    "&.reject": {
      backgroundColor: "#FFCCCC"
    }
  },

  header: {
    "& .MuiTableCell-head": {
      backgroundColor: "#4682B4",
      color: "white",
      padding: "4px 16px" // Adjust padding to reduce header row height
    },
    "& .MuiTableCell-head:first-child": {
      borderTopLeftRadius: "21px"
    },
    "& .MuiTableCell-head:last-child": {
      borderTopRightRadius: "21px"
    }
  }
});

const IssuesData = () => {
  const classes = useStyles();
  const [selectedRows, setSelectedRows] = useState([]);
  const [data, setData] = useState([
    {
      id: 1,
      name: "John Doe",
      age: 25,
      city: "New York",
      action: "",
      remark: "",
      status: "DONE",
      department: "IT",
      position: "Developer",
      dateJoined: "2022-01-15",
      lastReviewDate: "2023-01-15",
      salary: "$70,000"
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 32,
      city: "Los Angeles",
      action: "",
      remark: "",
      status: "PENDING",
      department: "HR",
      position: "Manager",
      dateJoined: "2021-03-22",
      lastReviewDate: "2023-03-22",
      salary: "$80,000"
    },
    {
      id: 1,
      name: "John Doe",
      age: 25,
      city: "New York",
      action: "",
      remark: "",
      status: "REJECT",
      department: "IT",
      position: "Developer",
      dateJoined: "2022-01-15",
      lastReviewDate: "2023-01-15",
      salary: "$70,000"
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 32,
      city: "Los Angeles",
      action: "",
      remark: "",
      status: "PENDING",
      department: "HR",
      position: "Manager",
      dateJoined: "2021-03-22",
      lastReviewDate: "2023-03-22",
      salary: "$80,000"
    },
    {
      id: 1,
      name: "John Doe",
      age: 25,
      city: "New York",
      action: "",
      remark: "",
      status: "DONE",
      department: "IT",
      position: "Developer",
      dateJoined: "2022-01-15",
      lastReviewDate: "2023-01-15",
      salary: "$70,000"
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 32,
      city: "Los Angeles",
      action: "",
      remark: "",
      status: "PENDING",
      department: "HR",
      position: "Manager",
      dateJoined: "2021-03-22",
      lastReviewDate: "2023-03-22",
      salary: "$80,000"
    },
    {
      id: 1,
      name: "John Doe",
      age: 25,
      city: "New York",
      action: "",
      remark: "",
      status: "REJECT",
      department: "IT",
      position: "Developer",
      dateJoined: "2022-01-15",
      lastReviewDate: "2023-01-15",
      salary: "$70,000"
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 32,
      city: "Los Angeles",
      action: "",
      remark: "",
      status: "DONE",
      department: "HR",
      position: "Manager",
      dateJoined: "2021-03-22",
      lastReviewDate: "2023-03-22",
      salary: "$80,000"
    },
    {
      id: 1,
      name: "John Doe",
      age: 25,
      city: "New York",
      action: "",
      remark: "",
      status: "REJECt",
      department: "IT",
      position: "Developer",
      dateJoined: "2022-01-15",
      lastReviewDate: "2023-01-15",
      salary: "$70,000"
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 32,
      city: "Los Angeles",
      action: "",
      remark: "",
      status: "DONE",
      department: "HR",
      position: "Manager",
      dateJoined: "2021-03-22",
      lastReviewDate: "2023-03-22",
      salary: "$80,000"
    }
    // Add more rows as needed
  ]);

  const columns = [
    { title: "ID", field: "id" },
    { title: "Name", field: "name" },
    { title: "Age", field: "age" },
    { title: "City", field: "city" },
    { title: "Department", field: "department" },
    { title: "Position", field: "position" },
    { title: "Date Joined", field: "dateJoined" },
    { title: "Review Date", field: "lastReviewDate" },
    { title: "Salary", field: "salary" },
    {
      title: "Status",
      field: "status",
      render: (rowData) => {
        const status = rowData.status.toLowerCase();
        const formattedStatus = status.charAt(0).toUpperCase() + status.slice(1);
        return (
          <Button variant="contained" className={`${classes.statusButton} ${status}`}>
            {formattedStatus}
          </Button>
        );
      }
    },
    {
      title: "Action",
      field: "action",
      render: (rowData) => (
        <select value={rowData.action} onChange={(e) => handleActionChange(e, rowData.id)}>
          <option value=""></option>
          <option value="approve">Approve</option>
          <option value="reject">Reject</option>
        </select>
      )
    },
    {
      title: "Remark",
      field: "remark",
      headerStyle: { backgroundColor: "#4682B4", color: "white", borderTopRightRadius: "22px" },
      render: (rowData) => (
        <input
          type="text"
          value={rowData.remark}
          onChange={(e) => handleRemarkChange(e, rowData.id)}
        />
      )
    }
  ];

  const handleRowSelect = (event, id) => {
    if (event.target.checked) {
      setSelectedRows([...selectedRows, id]);
    } else {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
    }
  };

  const handleSelectAll = () => {
    const allRowIds = data.map((row) => row.id);
    setSelectedRows(allRowIds);
  };

  const handleDeselectAll = () => {
    setSelectedRows([]);
  };

  const handleActionChange = (event, id) => {
    const updatedData = data.map((row) =>
      row.id === id ? { ...row, action: event.target.value } : row
    );
    setData(updatedData);
  };

  const handleRemarkChange = (event, id) => {
    const updatedData = data.map((row) =>
      row.id === id ? { ...row, remark: event.target.value } : row
    );
    setData(updatedData);
  };

  const handleSubmit = () => {
    console.log("Selected Rows:", selectedRows);
    console.log("Data:", data);
    setSelectedRows([]);
  };

  return (
    <Card>
      <CardContent>
        <Toolbar>
          <div style={{ flex: 1 }}>
            <h2>Pending Issues</h2>
          </div>
          <div style={{ marginLeft: "auto" }}>
            <Button
              color="primary"
              variant="contained"
              style={{ background: "navy" }}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </div>
        </Toolbar>
        <MaterialTable
          title=" "
          columns={columns}
          data={data}
          options={{
            exportButton: true,
            paging: true,
            pageSize: 8,
            pageSizeOptions: [5, 10, 20],
            showFirstLastPageButtons: false,
            paginationType: "stepped",
            exportAllData: true,
            exportFileName: "user_data_export",
            rowStyle: {
              backgroundColor: "#f5f5f5",
              height: "40px"
            },
            draggable: true,
            selection: true,
            columnsButton: true,
            exportCsv: true,
            headerStyle: {
              backgroundColor: "#4682B4",
              color: "white",
              fontSize: "0.875rem" // Adjust font size if needed
            }
          }}
          components={{
            Pagination: (props) => <TablePagination {...props} rowsPerPageOptions={[5, 10, 25]} />
          }}
          className="custom-header-row" // Apply the custom class here
        />
      </CardContent>
    </Card>
  );
};

export default IssuesData;
