import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Grid,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Divider
} from "@mui/material";
import { styled } from "@mui/material/styles";
import AssistantDirectionIcon from "@mui/icons-material/AssistantDirection";
import DepartureBoardIcon from "@mui/icons-material/DepartureBoard";
import BugReportIcon from "@mui/icons-material/BugReport";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import "./style.css";
import axios from "axios";
// import './Layout.css';

const ResizableTextarea = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-root": {
    resize: "both",
    overflow: "auto"
  },
  "& .MuiOutlinedInput-input": {
    padding: "0px"
  }
}));

const BomDeviationForm = ({ step }) => {
  const [formValues, setFormValues] = useState({
    plant: "",
    agency: "",
    bomPartNo: "",
    bomPartDescription: "",
    cs: "",
    vcNumber: "",
    vcDescription: "",
    alternativePart: "",
    dmlRefno: "",
    lhRhpartno: "",
    issueDetails: "",
    attachment: null,
    responsibleAgency: "",
    actionType: "",
    bomCorrectiontype: "",
    remark: "",
    typeofICA: "",
    typeofPCA: "",
    bOMMintid: "",
    ICACompleted: "",
    PCACompleted: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormValues({ ...formValues, attachment: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formValues);
    try {
      const response = axios.post("/saveFormData", formValues);
      console.log(response.data); // Log response from server
    } catch (error) {
      console.error("Error saving form data:", error);
    }
    // You can perform additional actions here, such as submitting the data to a server
  };
  const renderFormStep = () => {
    switch (step) {
      case 0:
        return (
          <Box
            sx={{
              border: "1px solid #ccc",
              borderRadius: "4px",
              padding: "16px",
              backgroundColor: "#f9f9f9"
            }}
          >
            <Typography
              variant="h6"
              sx={{
                backgroundImage: "linear-gradient(-225deg, #473B7B 0%, #3584A7 91%)",
                boxShadow: "0 5px 10px 0 rgba(0, 0, 0, .2)",
                color: "white",
                padding: "8px",
                borderRadius: "4px",
                fontSize: "16px"
              }}
            >
              <AssistantDirectionIcon sx={{ marginRight: "8px", color: "white" }} /> PLANT DETAILS:
            </Typography>
            <Grid container spacing={2} sx={{ marginTop: "16px" }}>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel id="plant-select-label">Plant</InputLabel>

                  <Select
                    labelId="plant-select-label"
                    id="plant-select"
                    value={formValues.plant}
                    name="plant"
                    label="Plant"
                    onChange={handleInputChange}
                    required
                  >
                    <MenuItem value="DHARWAD">DHARWAD</MenuItem>
                    <MenuItem value="JAMSHEDPUR">JAMSHEDPUR</MenuItem>
                    <MenuItem value="LUCKNOW">LUCKNOW</MenuItem>
                    <MenuItem value="PUNE">PUNE</MenuItem>
                    <MenuItem value="UTTARAKHAND">UTTARAKHAND</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel id="agency-select-label">Requesting Agency</InputLabel>
                  <Select
                    labelId="agency-select-label"
                    id="agency-select"
                    value={formValues.agency}
                    name="agency"
                    label="Requesting Agency"
                    onChange={handleInputChange}
                    required
                  >
                    <MenuItem value="SCM">SCM</MenuItem>
                    <MenuItem value="ECM">ECM</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>

            <Divider sx={{ margin: "16px 0" }} />
            <Typography
              variant="h6"
              sx={{
                backgroundImage: "linear-gradient(-225deg, #473B7B 0%, #3584A7 91%)",
                color: "white",
                boxShadow: "0 5px 10px 0 rgba(0, 0, 0, .2)",
                padding: "8px",
                borderRadius: "4px",
                fontSize: "16px"
              }}
            >
              <DepartureBoardIcon sx={{ marginRight: "8px", color: "white" }} />
              PART DETAILS:
            </Typography>
            <Grid container spacing={2} sx={{ marginTop: "16px" }}>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  label="BOM PART NO"
                  value={formValues.bomPartNo}
                  onChange={handleInputChange}
                  name="bomPartNo"
                />
              </Grid>
              <Grid item xs={4}>
                <ResizableTextarea
                  label="BOM PART DESCRIPTION"
                  // value={formValues.bomPartDescription}
                  multiline
                  rows={1}
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  inputProps={{
                    style: {
                      minHeight: "50px", // Minimum height
                      maxHeight: "auto" // Optional maximum height
                    }
                  }}
                  style={{ width: "100%" }}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  label="CS"
                  value={formValues.cs}
                  onChange={handleInputChange}
                  name="cs"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  label="VC NUMBERS"
                  value={formValues.vcNumber}
                  onChange={handleInputChange}
                  name="vcNumber"
                />
              </Grid>

              <Grid item xs={4}>
                <ResizableTextarea
                  label="VC DESCRIPTION"
                  // value={formValues.vcDescription}
                  multiline
                  rows={1}
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  inputProps={{
                    style: {
                      minHeight: "50px", // Minimum height
                      maxHeight: "auto" // Optional maximum height
                    }
                  }}
                  style={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={4}>
                <TextField
                  fullWidth
                  label="ALTERNATIVE PART(if any)"
                  value={formValues.alternativePart}
                  onChange={handleInputChange}
                  name="alternativePart"
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="DML REFERENCE NO. ( if any) "
                  value={formValues.dmlRefno}
                  onChange={handleInputChange}
                  name="dmlRefno"
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="LH/RH PART NO."
                  value={formValues.lhRhpartno}
                  onChange={handleInputChange}
                  name="lhRhpartno"
                />
              </Grid>
            </Grid>
          </Box>
        );

      case 1:
        return (
          <Box
            sx={{
              border: "1px solid #ccc",
              borderRadius: "4px",
              padding: "16px",
              backgroundColor: "#f9f9f9"
            }}
          >
            <Typography
              variant="h6"
              sx={{
                backgroundImage: "linear-gradient(-225deg, #473B7B 0%, #3584A7 91%)",
                color: "white",
                boxShadow: "0 5px 10px 0 rgba(0, 0, 0, .2)",
                padding: "8px",
                borderRadius: "4px",
                fontSize: "16px"
              }}
            >
              <BugReportIcon sx={{ marginRight: "8px", color: "white" }} />
              ISSUE DETAILS:
            </Typography>
            <Grid container spacing={2} sx={{ marginTop: "16px" }}>
              <Grid item xs={12}>
                <ResizableTextarea
                  label="ISSUE DETAILS"
                  // value={formValues.issueDetails}
                  multiline
                  rows={1}
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  inputProps={{
                    style: {
                      minHeight: "48px", // Minimum height
                      maxHeight: "auto" // Optional maximum height
                    }
                  }}
                  style={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={12}>
                <FormControl fullWidth>
                  <input
                    accept="*"
                    style={{ display: "none" }}
                    id="attachment-input"
                    type="file"
                    onChange={handleFileChange}
                  />
                  <label htmlFor="attachment-input">
                    <Button variant="outlined" component="span">
                      Choose File
                    </Button>
                    <span style={{ marginLeft: "10px" }}>
                      {formValues.attachment ? formValues.attachment.name : "No file chosen"}
                    </span>
                  </label>
                </FormControl>
              </Grid>

              <Grid item xs={4}>
                <FormControl fullWidth>
                  <InputLabel id="responsibleAgency-select-label">RESPONSIBLE AGENCY</InputLabel>
                  <Select
                    labelId="responsibleAgency-select-label"
                    id="responsibleAgency-select"
                    value={formValues.responsibleAgency}
                    name="responsibleAgency"
                    label="RESPONSIBLE AGENCY"
                    onChange={handleInputChange}
                  >
                    <MenuItem value="APL">APL</MenuItem>
                    <MenuItem value="ECM">ECM</MenuItem>
                    <MenuItem value="AQ">AQ</MenuItem>
                    <MenuItem value="SCM">SCM</MenuItem>
                    <MenuItem value="PL-BUS">PL-BUS</MenuItem>
                    <MenuItem value="PL-ILCV">PL-ILCV</MenuItem>
                    <MenuItem value="PL-SCV">PL-SCV</MenuItem>
                    <MenuItem value="PL-MHCV">PL-MHCV</MenuItem>
                    <MenuItem value="PL-DEFENCE">PL-Defence</MenuItem>
                    <MenuItem value="ERC">ERC</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <FormControl fullWidth>
                  <InputLabel id="actionType-select-label">ACTION TYPE</InputLabel>
                  <Select
                    labelId="actionType-select-label"
                    id="actionType-select"
                    value={formValues.actionType}
                    name="actionType"
                    label="ACTION TYPE"
                    onChange={handleInputChange}
                  >
                    <MenuItem value="BOM part procurement">BOM part procurement</MenuItem>
                    <MenuItem value="Required clarification">Required clarification</MenuItem>
                    <MenuItem value="CS Change">CS Change</MenuItem>
                    <MenuItem value="Design release issues">Design release issues</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={4}>
                <FormControl fullWidth>
                  <InputLabel id="bomCorrectiontype-select-label">BOM CORRECTION TYPE </InputLabel>
                  <Select
                    labelId="bomCorrectiontype-select-label"
                    id="bomCorrectiontype-select"
                    value={formValues.bomCorrectiontype}
                    name="bomCorrectiontype"
                    label="BOM CORRECTION TYPE"
                    onChange={handleInputChange}
                  >
                    <MenuItem value="Replacement">Replacement</MenuItem>
                    <MenuItem value="Deletion">Deletion</MenuItem>
                    <MenuItem value="Addition">Addition</MenuItem>
                    <MenuItem value="Validity Change">Validity Change</MenuItem>
                    <MenuItem value="NA">NA</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>

            <Grid container spacing={2} sx={{ marginTop: "16px" }}>
              <Grid item xs={12}>
                <ResizableTextarea
                  label="Remark"
                  // value={formValues.remark}
                  multiline
                  rows={1}
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  inputProps={{
                    style: {
                      minHeight: "48px", // Minimum height
                      maxHeight: "auto" // Optional maximum height
                    }
                  }}
                  style={{ width: "100%" }}
                />
              </Grid>
            </Grid>
          </Box>
        );
      case 2:
        return (
          <Box
            sx={{
              border: "1px solid #ccc",
              borderRadius: "4px",
              padding: "16px",
              backgroundColor: "#f9f9f9"
            }}
          >
            <Typography
              variant="h6"
              sx={{
                backgroundImage: "linear-gradient(-225deg, #473B7B 0%, #3584A7 91%)",
                color: "white",
                boxShadow: "0 5px 10px 0 rgba(0, 0, 0, .2)",
                padding: "8px",
                borderRadius: "4px",
                fontSize: "16px"
              }}
            >
              <PendingActionsIcon sx={{ marginRight: "8px", color: "white" }} />
              Action Plan (ERC BOM CORRECTION DETAILS):
            </Typography>
            <br />
            <p>
              Note:To add ERC in Tracker, raising of BOM correction request in 1858-BOM Deviation
              workflow is mandatory.
            </p>
            <Grid container spacing={2} sx={{ marginTop: "16px" }}>
              <Grid item xs={4}>
                <FormControl fullWidth>
                  <InputLabel id="typeofICA-select-label">Type of ICA</InputLabel>
                  <Select
                    labelId="typeofICA-select-label"
                    id="typeofICA-select"
                    value={formValues.typeofICA}
                    name="typeofICA"
                    label="Type of ICA"
                    onChange={handleInputChange}
                  >
                    <MenuItem value="NOT REQUIRED">Not Required</MenuItem>
                    <MenuItem value="SM DML CORRECTION">SM DML Correction</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={4}>
                <FormControl fullWidth>
                  <InputLabel id="typeofPCA-select-label">Type of PCA</InputLabel>
                  <Select
                    labelId="typeofPCA-select-label"
                    id="typeofPCA-select"
                    value={formValues.typeofPCA}
                    name="typeofPCA"
                    label="Type of PCA"
                    onChange={handleInputChange}
                  >
                    <MenuItem value="DML release by ERC(Mention BOM Mint ID)">
                      DML release by ERC(Mention BOM Mint ID)
                    </MenuItem>
                    <MenuItem value="Not Required">Not Required</MenuItem>
                    <MenuItem value="PO release by Purchase">PO release by Purchase</MenuItem>
                    <MenuItem value="CS correction by APL">CS correction by APL</MenuItem>
                    <MenuItem value="Restructuring by APL">Restructuring by APL</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={4}>
                <FormControl fullWidth>
                  <InputLabel id="bOMMintid-select-label">BOM Correction Mint Id</InputLabel>
                  <Select
                    labelId="bOMMintid-select-label"
                    id="bOMMintid-select"
                    value={formValues.bOMMintid}
                    name="bOMMintid"
                    label="BOM Correction Mint Id"
                    onChange={handleInputChange}
                  >
                    <MenuItem value="Select One">Select One</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>

            <Divider sx={{ margin: "16px 0" }} />
            <Typography
              variant="h6"
              sx={{
                backgroundImage: "linear-gradient(-225deg, #473B7B 0%, #3584A7 91%)",
                color: "white",
                boxShadow: "0 5px 10px 0 rgba(0, 0, 0, .2)",
                padding: "8px",
                borderRadius: "4px",
                fontSize: "16px"
              }}
            >
              <BookmarkAddedIcon sx={{ marginRight: "8px", color: "white" }} />
              Action Implementation Status:
            </Typography>
            <br />
            <p>
              Note:If ICA PCA implementation requires longer time ,user may submit the request with
              Implementation status as NO. System will allow user to update the same at Next
              state(Closure).
            </p>
            <Grid container spacing={2} sx={{ marginTop: "16px" }}>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel id="ICACompleted-select-label">Is ICA Completed?</InputLabel>
                  <Select
                    labelId="ICACompleted-select-label"
                    id="ICACompleted-select"
                    value={formValues.ICACompleted}
                    name="ICACompleted"
                    label="Is ICA Completed?"
                    onChange={handleInputChange}
                  >
                    <MenuItem value="Yes">Yes</MenuItem>
                    <MenuItem value="No">No</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel id="PCACompleted-select-label">Is PCA Completed</InputLabel>
                  <Select
                    labelId="PCACompleted-select-label"
                    id="PCACompleted-select"
                    value={formValues.PCACompleted}
                    name="PCACompleted"
                    label="Is PCA Completed"
                    onChange={handleInputChange}
                  >
                    <MenuItem value="Yes">Yes</MenuItem>
                    <MenuItem value="No">No</MenuItem>
                    <MenuItem value="Na">NA</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>

            <Box
              margin="normal"
              sx={{ marginTop: "16px", display: "flex", justifyContent: "center", gap: "16px" }}
            >
              <Button
                variant="outlined"
                color="success"
                type="submit"
                sx={{
                  marginBottom: "16px",
                  marginTop: "15px",
                  "&:hover": {
                    background:
                      "linear-gradient(179.1deg, rgb(43, 170, 96) 2.3%, rgb(129, 204, 104) 98.3%)",
                    color: "#fff" // Text color when hovered
                  }
                }}
              >
                Submit
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                sx={{ marginBottom: "16px", marginTop: "15px", ml: 3 }}
                onClick={() =>
                  setFormValues({
                    plant: "",
                    agency: "",
                    bomPartNo: "",
                    bomPartDescription: "",
                    cs: "",
                    attachment: null
                  })
                }
              >
                Clear
              </Button>
            </Box>
          </Box>
        );
      default:
        return null;
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item lg={12} md={12} sm={12} xs={12} sx={{ mt: 2 }}>
          {renderFormStep()}
        </Grid>
      </Grid>
    </form>
  );
};

export default BomDeviationForm;
