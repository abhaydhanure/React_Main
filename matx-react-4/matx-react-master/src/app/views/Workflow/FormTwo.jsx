// FormTwo.js
import React from "react";
import { TextField, Button, Grid } from "@mui/material";

const FormTwo = ({ data, handleClose }) => {
  const handleSubmit = () => {
    // Handle form submission
    handleClose();
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField label="Field A" variant="outlined" fullWidth defaultValue={data.fieldA} />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Field B" variant="outlined" fullWidth defaultValue={data.fieldB} />
        </Grid>
      </Grid>
      <Button variant="contained" color="primary" onClick={handleSubmit} style={{ marginTop: 16 }}>
        Submit
      </Button>
    </div>
  );
};

export default FormTwo;
