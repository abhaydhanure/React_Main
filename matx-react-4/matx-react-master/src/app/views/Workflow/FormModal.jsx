import React from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button
} from "@mui/material";

const FormModal = ({ open, handleClose, formData, handleChange }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 600,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4
        }}
      >
        <Typography id="modal-title" variant="h6" component="h2">
          Unique ID Details
        </Typography>
        <form noValidate autoComplete="off">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Unique ID"
                variant="outlined"
                fullWidth
                name="uniqueId"
                value={formData.uniqueId}
                onChange={handleChange}
                disabled
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Plant Code"
                variant="outlined"
                fullWidth
                name="plantCode"
                value={formData.plantCode}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Issue ID"
                variant="outlined"
                fullWidth
                name="issueId"
                value={formData.issueId}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Requester Name"
                variant="outlined"
                fullWidth
                name="requesterName"
                value={formData.requesterName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Requester Dept"
                variant="outlined"
                fullWidth
                name="requesterDept"
                value={formData.requesterDept}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth variant="outlined">
                <InputLabel>Status</InputLabel>
                <Select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  label="Status"
                >
                  <MenuItem value="Red">Red</MenuItem>
                  <MenuItem value="Yellow">Yellow</MenuItem>
                  <MenuItem value="Green">Green</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Raising Date"
                variant="outlined"
                fullWidth
                type="date"
                name="raisingDate"
                value={formData.raisingDate}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="ERC Assignment"
                variant="outlined"
                fullWidth
                name="ercAssignment"
                value={formData.ercAssignment}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Pending At"
                variant="outlined"
                fullWidth
                name="pendingAt"
                value={formData.pendingAt}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Pending On"
                variant="outlined"
                fullWidth
                type="date"
                name="pendingOn"
                value={formData.pendingOn}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Work Eng"
                variant="outlined"
                fullWidth
                name="workEng"
                value={formData.workEng}
                onChange={handleChange}
              />
            </Grid>
            {/* New fields */}
            <Grid item xs={12} sm={6}>
              <TextField
                label="Field 1"
                variant="outlined"
                fullWidth
                name="field1"
                value={formData.field1}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Field 2"
                variant="outlined"
                fullWidth
                name="field2"
                value={formData.field2}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Field 3"
                variant="outlined"
                fullWidth
                name="field3"
                value={formData.field3}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Field 4"
                variant="outlined"
                fullWidth
                name="field4"
                value={formData.field4}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Field 5"
                variant="outlined"
                fullWidth
                name="field5"
                value={formData.field5}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Box sx={{ mt: 2 }}>
            <Button variant="contained" color="primary" onClick={handleClose}>
              Close
            </Button>
          </Box>
        </form>
      </Box>
    </Modal>
  );
};

export default FormModal;
