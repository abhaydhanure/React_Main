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
  Divider,
  TextareaAutosize,
  FormHelperText,
  Alert
} from "@mui/material";
import { styled } from "@mui/material/styles";
import AssistantDirectionIcon from "@mui/icons-material/AssistantDirection";
import "./Ticket.css";
import { SimpleCard } from "app/components";
// import AssistantDirectionIcon from '@mui/icons-material/AssistantDirection';

const ResizableTextarea = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-root": {
    resize: "both", // Allow resizing in both directions
    overflow: "auto" // Ensure content is scrollable if it exceeds the size
  },
  "& .MuiOutlinedInput-input": {
    padding: "0px" // Adjust padding as needed
  }
}));

const TicketForm = () => {
  const [formValues, setFormValues] = useState({
    location: "",
    agency: "",
    department: "",
    machineNo: "",
    contactNo: "",
    impact: "",
    vcNumber: "",
    vcDescription: "",
    alternativePart: "",
    dmlRefno: "",
    lhRhpartno: "",
    issueDetails: "",
    responsibleAgency: "",
    actionType: "",
    bomCorrectiontype: "",
    remark: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // const handleSubmit = (e) => {
  //     e.preventDefault();
  //     console.log(formValues);
  // };

  const handleFileChange = (e) => {
    setFormValues({ ...formValues, attachment: e.target.files[0] });
  };

  const [errors, setErrors] = useState({
    location: "",
    agency: "",
    department: "",
    machineNo: "",
    contactNo: "",
    impact: "",
    vcNumber: "",
    vcDescription: "",
    alternativePart: "",
    dmlRefno: "",
    lhRhpartno: "",
    issueDetails: "",
    responsibleAgency: "",
    actionType: "",
    bomCorrectiontype: "",
    remark: ""
  });
  const [alert, setAlert] = useState(false);

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      location: "",
      agency: "",
      department: "",
      machineNo: "",
      contactNo: "",
      impact: "",
      vcNumber: "",
      vcDescription: "",
      alternativePart: "",
      dmlRefno: "",
      lhRhpartno: "",
      issueDetails: "",
      responsibleAgency: "",
      actionType: "",
      bomCorrectiontype: "",
      remark: ""
    };

    if (formValues.plant === "") {
      newErrors.plant = "Plant is required";
      valid = false;
    }
    // Add more validation rules for other fields...

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form is valid, submitting...", formValues);
      // Add your form submission logic here
      setAlert(false); // Clear the alert if form is valid
    } else {
      console.log("Form validation failed");
      setAlert(true); // Show the alert if form is invalid
    }
  };

  // STYLED COMPONENTS
  const ContentBox = styled("div")(({ theme }) => ({
    margin: "30px",
    [theme.breakpoints.down("sm")]: { margin: "16px" }
  }));
  return (
    <ContentBox>
      <SimpleCard title="BOM Raising Form">
        {alert && (
          <Alert severity="error" onClose={() => setAlert(false)} sx={{ marginBottom: "16px" }}>
            Please fill out all required fields.
          </Alert>
        )}
        <Grid container>
          <Grid item lg={12} md={12} sm={12} xs={12} sx={{ mt: 2 }}>
            <form onSubmit={handleSubmit}>
              <Box
                sx={{
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  padding: "16px",
                  backgroundColor: "#f9f9f9",
                  width: "100%"
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    background: "linear-gradient(-135deg, #899fd4, #9978d7)",
                    boxShadow: "0 5px 10px 0 rgba(0, 0, 0, .2)",
                    color: "white",
                    padding: "8px",
                    borderRadius: "4px",
                    fontSize: "16px"
                  }}
                >
                  <AssistantDirectionIcon sx={{ marginRight: "8px", color: "white" }} />{" "}
                  {/* Add the LocationOnIcon component */}
                  Raise Ticket
                </Typography>
                <Grid container spacing={2} sx={{ marginTop: "16px" }}>
                  <Grid item xs={4}>
                    <FormControl fullWidth error={!!errors.plant}>
                      <InputLabel id="location-select-label">Location</InputLabel>
                      <Select
                        labelId="location-select-label"
                        id="location-select"
                        value={formValues.location}
                        name="location"
                        label="Location"
                        onChange={handleInputChange}
                      >
                        <MenuItem value="DHARWAD">DHARWAD</MenuItem>
                        <MenuItem value="JAMSHEDPUR">JAMSHEDPUR</MenuItem>
                        <MenuItem value="LUCKNOW">LUCKNOW</MenuItem>
                        <MenuItem value="PUNE">PUNE</MenuItem>
                        <MenuItem value="UTTARAKHAND">UTTARAKHAND</MenuItem>
                        {errors.plant && <FormHelperText>{errors.plant}</FormHelperText>}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={4}>
                    <FormControl fullWidth>
                      <InputLabel id="agency-select-label">Agency</InputLabel>
                      <Select
                        labelId="agency-select-label"
                        id="agency-select"
                        value={formValues.agency}
                        name="agency"
                        label="Agency"
                        onChange={handleInputChange}
                      >
                        <MenuItem value="ERC">ERC</MenuItem>
                        <MenuItem value="NonErc">Non-ERC</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={4}>
                    <FormControl fullWidth>
                      <InputLabel id="department-select-label">Department</InputLabel>
                      <Select
                        labelId="department-select-label"
                        id="department-select"
                        value={formValues.department}
                        name="department"
                        label="Department"
                        onChange={handleInputChange}
                      >
                        <MenuItem value="SCM">BOM</MenuItem>
                        <MenuItem value="ECM">DMU</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
                <Divider sx={{ margin: "16px 0" }} />

                <Grid container spacing={2} sx={{ marginTop: "16px" }}>
                  <Grid item xs={4}>
                    <TextField
                      fullWidth
                      label="Machine No"
                      value={formValues.machineNo}
                      onChange={handleInputChange}
                      name="machineNo"
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      fullWidth
                      label="Contact NO"
                      value={formValues.contactNo}
                      onChange={handleInputChange}
                      name="contactNo"
                    />
                  </Grid>

                  <Grid item xs={4}>
                    <FormControl fullWidth>
                      <InputLabel id="impact-select-label">Impact</InputLabel>
                      <Select
                        labelId="impact-select-label"
                        id="impact-select"
                        value={formValues.impact}
                        name="impact"
                        label="impact"
                        onChange={handleInputChange}
                      >
                        <MenuItem value="High">High</MenuItem>
                        <MenuItem value="Low">Low</MenuItem>
                        <MenuItem value="Medium">Medium</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
                <Divider sx={{ margin: "16px 0" }} />

                <Grid container spacing={2} sx={{ marginTop: "16px" }}>
                  <Grid item xs={4}>
                    <FormControl fullWidth>
                      <InputLabel id="catagory-select-label">Catagory</InputLabel>
                      <Select
                        labelId="catagory-select-label"
                        id="catagory-select"
                        value={formValues.catagory}
                        name="catagory"
                        label="catagory"
                        onChange={handleInputChange}
                      >
                        <MenuItem value="pFirst Application">pFirst Application</MenuItem>
                        <MenuItem value="Bom Deviation">Bom Deviation</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={4}>
                    <FormControl fullWidth>
                      <InputLabel id="subcat1-select-label">Sub Catagory1</InputLabel>
                      <Select
                        labelId="subcat1-select-label"
                        id="subcat1-select"
                        value={formValues.subcat1}
                        name="subcat1"
                        label="Sub catagory1"
                        onChange={handleInputChange}
                      >
                        <MenuItem value="DPDSTMS">DPDS_TMS</MenuItem>
                        <MenuItem value="CVBU">CVBU</MenuItem>
                        <MenuItem value="PVBU">PVBU</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={4}>
                    <FormControl fullWidth>
                      <InputLabel id="subcat2-select-label">Sub Catagory2</InputLabel>
                      <Select
                        labelId="subcat2-select-label"
                        id="subcat2-select"
                        value={formValues.subcat2}
                        name="subcat2"
                        label="Sub Catagory2"
                        onChange={handleInputChange}
                      >
                        <MenuItem value="AccessIssue">Access Issue</MenuItem>
                        <MenuItem value="PerformanceSlow">Performance Slow</MenuItem>
                        <MenuItem value="Other">Other</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>

                <Divider sx={{ margin: "16px 0" }} />

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

                <Grid container spacing={2} sx={{ marginTop: "12px" }}>
                  <Grid item xs={6}>
                    <ResizableTextarea
                      label="Subject"
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
                  <Grid item xs={6}>
                    <ResizableTextarea
                      label="Description"
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
                </Grid>
              </Box>
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
                    "&:hover": {
                      background:
                        "linear-gradient(179.1deg, rgb(43, 170, 96) 2.3%, rgb(129, 204, 104) 98.3%)",
                      color: "#fff" // Text color when hovered
                    }
                  }}
                >
                  Raise
                </Button>
              </Box>
            </form>
          </Grid>
        </Grid>
      </SimpleCard>
    </ContentBox>
  );
};

export default TicketForm;
