import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Paper,
  Card,
  CardContent,
  Typography,
  TablePagination,
  Button
} from "@mui/material";
import FormModal from "./FormModal"; // Import the new FormModal component
import "./Workflow.css";

// Sample data
const initialData = [
  {
    wf_id: "001",
    uniqueId: "ABC123",
    plantCode: "PL101",
    issueId: "ISSUE01",
    requesterName: "Abhay",
    requesterDept: "ODC",
    s: "Red",
    raisingDate: "2024-07-01",
    ercAssignment: "ERC01",
    pendingAt: "Dept A",
    pendingOn: "2024-08-01",
    workEng: "Engineer 1",
    ercAssignment: "Value 1",
    field2: "Value 2",
    field3: "Value 3",
    field4: "Value 4",
    field5: "Value 9"
  },
  {
    wf_id: "002",
    uniqueId: "ABC523",
    plantCode: "PL01",
    issueId: "ISSUE01",
    requesterName: "Abhay ",
    requesterDept: "ODC",
    s: "Yellow",
    raisingDate: "2024-07-01",
    ercAssignment: "ERC01",
    pendingAt: "Dept A",
    pendingOn: "2024-08-01",
    workEng: "Engineer 1",
    ercAssignment: "Value 1",
    field2: "Value 2",
    field3: "Value 3",
    field4: "Value 4",
    field5: "Value 5"
  },
  {
    wf_id: "003",
    uniqueId: "ABH123",
    plantCode: "PL12",
    issueId: "ISSUE01",
    requesterName: "Manoj",
    requesterDept: "ODC",
    s: "Green",
    raisingDate: "2024-07-01",
    ercAssignment: "ERC01",
    pendingAt: "Dept A",
    pendingOn: "2024-08-01",
    workEng: "Engineer 1",
    ercAssignment: "Value 1",
    field2: "Value 2",
    field3: "Value 3",
    field4: "Value 4",
    field5: "Value 5"
  },
  {
    wf_id: "004",
    uniqueId: "ABC113",
    plantCode: "PL20",
    issueId: "ISSUE01",
    requesterName: "Vyanktesh",
    requesterDept: "ODC",
    s: "Red",
    raisingDate: "2024-07-01",
    ercAssignment: "ERC01",
    pendingAt: "Dept A",
    pendingOn: "2024-08-01",
    workEng: "Engineer 1",
    ercAssignment: "Value 1",
    field2: "Value 2",
    field3: "Value 3",
    field4: "Value 4",
    field5: "Value 5"
  },
  {
    wf_id: "005",
    uniqueId: "ABC173",
    plantCode: "PL05",
    issueId: "ISSUE01",
    requesterName: "Ganesh",
    requesterDept: "ODC",
    s: "Yellow",
    raisingDate: "2024-07-01",
    ercAssignment: "ERC01",
    pendingAt: "Dept A",
    pendingOn: "2024-08-01",
    workEng: "Engineer 1",
    ercAssignment: "Value 1",
    field2: "Value 2",
    field3: "Value 3",
    field4: "Value 4",
    field5: "Value 5"
  },
  {
    wf_id: "006",
    uniqueId: "ABC823",
    plantCode: "PL06",
    issueId: "ISSUE01",
    requesterName: "Abhay ",
    requesterDept: "ODC",
    s: "Green",
    raisingDate: "2024-07-01",
    ercAssignment: "ERC01",
    pendingAt: "Dept A",
    pendingOn: "2024-08-01",
    workEng: "Engineer 1",
    ercAssignment: "Value 1",
    field2: "Value 2",
    field3: "Value 3",
    field4: "Value 4",
    field5: "Value 5"
  },
  {
    wf_id: "007",
    uniqueId: "ABW123",
    plantCode: "PL09",
    issueId: "ISSUE01",
    requesterName: "Ambadas",
    requesterDept: "ODC",
    s: "Red",
    raisingDate: "2024-07-01",
    ercAssignment: "ERC01",
    pendingAt: "Dept A",
    pendingOn: "2024-08-01",
    workEng: "Engineer 1",
    ercAssignment: "Value 1",
    field2: "Value 2",
    field3: "Value 3",
    field4: "Value 4",
    field5: "Value 5"
  },
  {
    wf_id: "008",
    uniqueId: "ABC823",
    plantCode: "PL06",
    issueId: "ISSUE01",
    requesterName: "Abhay ",
    requesterDept: "ODC",
    s: "Green",
    raisingDate: "2024-07-01",
    ercAssignment: "ERC01",
    pendingAt: "Dept A",
    pendingOn: "2024-08-01",
    workEng: "Engineer 1",
    ercAssignment: "Value 1",
    field2: "Value 2",
    field3: "Value 3",
    field4: "Value 4",
    field5: "Value 5"
  },
  {
    wf_id: "009",
    uniqueId: "ABC823",
    plantCode: "PL06",
    issueId: "ISSUE01",
    requesterName: "Abhay ",
    requesterDept: "ODC",
    s: "Red",
    raisingDate: "2024-07-01",
    ercAssignment: "ERC01",
    pendingAt: "Dept A",
    pendingOn: "2024-08-01",
    workEng: "Engineer 1",
    ercAssignment: "Value 1",
    field2: "Value 2",
    field3: "Value 3",
    field4: "Value 4",
    field5: "Value 5"
  }
  // Other rows...
];

const getStatusStyle = (status) => {
  switch (status) {
    case "Red":
      return { backgroundColor: "#e55353", color: "antiquewhite" };
    case "Yellow":
      return { backgroundColor: "#ecb50c", color: "#856404" };
    case "Green":
      return { backgroundColor: "#3ec9a6", color: "darkolivegreen" };
    default:
      return {};
  }
};

const WorkflowData = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(9);
  const [searchTerms, setSearchTerms] = useState({
    wf_id: "",
    uniqueId: "",
    plantCode: "",
    issueId: "",
    requesterName: "",
    requesterDept: "",
    s: ""
  });
  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState({
    uniqueId: "",
    plantCode: "",
    issueId: "",
    requesterName: "",
    requesterDept: "",
    status: "",
    raisingDate: "",
    ercAssignment: "",
    pendingAt: "",
    pendingOn: "",
    workEng: "",
    ercAssignment: "",
    field2: "",
    field3: "",
    field4: "",
    field5: "",
    field6: ""
  });

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearchChange = (event, field) => {
    setSearchTerms({ ...searchTerms, [field]: event.target.value });
  };

  const filteredData = initialData.filter(
    (row) =>
      (searchTerms.wf_id === "" ||
        row.wf_id.toLowerCase().includes(searchTerms.wf_id.toLowerCase())) &&
      (searchTerms.uniqueId === "" ||
        row.uniqueId.toLowerCase().includes(searchTerms.uniqueId.toLowerCase())) &&
      (searchTerms.plantCode === "" ||
        row.plantCode.toLowerCase().includes(searchTerms.plantCode.toLowerCase())) &&
      (searchTerms.issueId === "" ||
        row.issueId.toLowerCase().includes(searchTerms.issueId.toLowerCase())) &&
      (searchTerms.requesterName === "" ||
        row.requesterName.toLowerCase().includes(searchTerms.requesterName.toLowerCase())) &&
      (searchTerms.requesterDept === "" ||
        row.requesterDept.toLowerCase().includes(searchTerms.requesterDept.toLowerCase())) &&
      (searchTerms.s === "" || row.s.toLowerCase().includes(searchTerms.s.toLowerCase()))
  );

  const paginatedData = filteredData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  const handleUniqueIdClick = (uniqueId) => {
    const selectedData = initialData.find((row) => row.uniqueId === uniqueId);
    setFormData(selectedData || {});
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleStatusClick = (status) => {
    alert(`Status ${status} clicked`);
  };

  return (
    <>
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            All Issues
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow style={{ background: "midnightblue" }}>
                  <TableCell className="customTableCell firstCell" align="center">
                    Wf_id
                  </TableCell>
                  <TableCell className="tableCell" align="center">
                    UNIQUE ID
                  </TableCell>
                  <TableCell className="tableCell" align="center">
                    PLANT CODE
                  </TableCell>
                  <TableCell className="tableCell" align="center">
                    ISSUE ID
                  </TableCell>
                  <TableCell className="tableCell" align="center">
                    NAME
                  </TableCell>
                  <TableCell className="tableCell" align="center">
                    DEPT
                  </TableCell>
                  <TableCell className="tableCell" align="center">
                    STATUS
                  </TableCell>
                  {/* New headers */}
                  <TableCell className="tableCell" align="center">
                    ASSIGNMENT
                  </TableCell>
                  <TableCell className="tableCell" align="center">
                    FIELD 2
                  </TableCell>
                  <TableCell className="tableCell" align="center">
                    FIELD 3
                  </TableCell>
                  <TableCell className="tableCell" align="center">
                    FIELD 4
                  </TableCell>
                  <TableCell className="tableCell" align="center">
                    FIELD 5
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ height: "4px", minHeight: "20px" }}>
                    <TextField
                      label="Search wf_id"
                      variant="outlined"
                      size="small"
                      fullWidth
                      value={searchTerms.wf_id}
                      onChange={(e) => handleSearchChange(e, "wf_id")}
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      label="Search UNIQUE ID"
                      variant="outlined"
                      size="small"
                      fullWidth
                      value={searchTerms.uniqueId}
                      onChange={(e) => handleSearchChange(e, "uniqueId")}
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      label="Search PLANT CODE"
                      variant="outlined"
                      size="small"
                      fullWidth
                      value={searchTerms.plantCode}
                      onChange={(e) => handleSearchChange(e, "plantCode")}
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      label="Search ISSUE ID"
                      variant="outlined"
                      size="small"
                      fullWidth
                      value={searchTerms.issueId}
                      onChange={(e) => handleSearchChange(e, "issueId")}
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      label="Search REQUESTER NAME"
                      variant="outlined"
                      size="small"
                      fullWidth
                      value={searchTerms.requesterName}
                      onChange={(e) => handleSearchChange(e, "requesterName")}
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      label="Search REQUESTER DEPT"
                      variant="outlined"
                      size="small"
                      fullWidth
                      value={searchTerms.requesterDept}
                      onChange={(e) => handleSearchChange(e, "requesterDept")}
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      label="Search S"
                      variant="outlined"
                      size="small"
                      fullWidth
                      value={searchTerms.s}
                      onChange={(e) => handleSearchChange(e, "s")}
                    />
                  </TableCell>
                  {/* New search fields */}
                  <TableCell>
                    <TextField
                      label="Search ERCASSIGNMENT"
                      variant="outlined"
                      size="small"
                      fullWidth
                      value={searchTerms.ercAssignment}
                      onChange={(e) => handleSearchChange(e, "ercAssignment")}
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      label="Search FIELD 2"
                      variant="outlined"
                      size="small"
                      fullWidth
                      value={searchTerms.field2}
                      onChange={(e) => handleSearchChange(e, "field2")}
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      label="Search FIELD 3"
                      variant="outlined"
                      size="small"
                      fullWidth
                      value={searchTerms.field3}
                      onChange={(e) => handleSearchChange(e, "field3")}
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      label="Search FIELD 4"
                      variant="outlined"
                      size="small"
                      fullWidth
                      value={searchTerms.field4}
                      onChange={(e) => handleSearchChange(e, "field4")}
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      label="Search FIELD 5"
                      variant="outlined"
                      size="small"
                      fullWidth
                      value={searchTerms.field5}
                      onChange={(e) => handleSearchChange(e, "field5")}
                    />
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {paginatedData.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={18} align="center">
                      No rows to display
                    </TableCell>
                  </TableRow>
                ) : (
                  paginatedData.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell
                        className="customTableCell firstCell"
                        align="center"
                        style={{ padding: "16px" }}
                      >
                        {row.wf_id}
                      </TableCell>
                      <TableCell className="tableCell" align="center" style={{ padding: "16px" }}>
                        <Button onClick={() => handleUniqueIdClick(row.uniqueId)}>
                          {row.uniqueId}
                        </Button>
                      </TableCell>
                      <TableCell className="tableCell" align="center" style={{ padding: "16px" }}>
                        {row.plantCode}
                      </TableCell>
                      <TableCell className="tableCell" align="center" style={{ padding: "16px" }}>
                        {row.issueId}
                      </TableCell>
                      <TableCell className="tableCell" align="center" style={{ padding: "16px" }}>
                        {row.requesterName}
                      </TableCell>
                      <TableCell className="tableCell" align="center" style={{ padding: "16px" }}>
                        {row.requesterDept}
                      </TableCell>
                      <TableCell className="tableCell" align="center" style={{ padding: "16px" }}>
                        <Button
                          variant="contained"
                          color="primary"
                          style={{
                            ...getStatusStyle(row.s),
                            width: "90%",
                            padding: "2px 16px",
                            borderRadius: "20px"
                          }}
                          onClick={() => handleStatusClick(row.s)}
                        >
                          {row.s}
                        </Button>
                      </TableCell>
                      {/* New data columns */}
                      <TableCell className="tableCell" align="center" style={{ padding: "16px" }}>
                        {row.ercAssignment}
                      </TableCell>
                      <TableCell className="tableCell" align="center" style={{ padding: "16px" }}>
                        {row.field2}
                      </TableCell>
                      <TableCell className="tableCell" align="center" style={{ padding: "16px" }}>
                        {row.field3}
                      </TableCell>
                      <TableCell className="tableCell" align="center" style={{ padding: "16px" }}>
                        {row.field4}
                      </TableCell>
                      <TableCell className="tableCell" align="center" style={{ padding: "16px" }}>
                        {row.field5}
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[9, 18, 27]}
            component="div"
            count={filteredData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </CardContent>
      </Card>
      <FormModal
        open={openModal}
        handleClose={handleCloseModal}
        formData={formData}
        handleChange={handleChange}
      />
    </>
  );
};

export default WorkflowData;
