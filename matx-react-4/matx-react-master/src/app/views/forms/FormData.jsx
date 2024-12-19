import React, { useState } from "react";
import { Box, Stepper, Step, StepLabel, Button, Typography, styled } from "@mui/material";
import BomDeviationForm from "./Component-main/Layout";
import FirstPageRoundedIcon from "@mui/icons-material/FirstPageRounded";
import LastPageRoundedIcon from "@mui/icons-material/LastPageRounded";
import { SimpleCard } from "app/components";
import { color } from "echarts";
const steps = ["Plant & Part Details", "Issue Details", "Action Details"];
const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" }
  }
}));

const BasicDemo = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());

  const isStepOptional = (step) => {
    return step === -1; // No optional steps for now
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Container>
      <SimpleCard title="BOM Initiation Form">
        <Box sx={{ width: "100%" }}>
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};
              if (isStepOptional(index)) {
                labelProps.optional = <Typography variant="caption">Optional</Typography>;
              }
              if (isStepSkipped(index)) {
                stepProps.completed = false;
              }
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              {/* <Typography sx={{ mt: 2, mb: 1 }}>
                        All steps completed - you&apos;re finished
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={handleReset}>Reset</Button>
                    </Box> */}
            </React.Fragment>
          ) : (
            <React.Fragment>
              <BomDeviationForm step={activeStep} />

              <Box sx={{ display: "flex", flexDirection: "row", pt: 5, justifyContent: "center" }}>
                {activeStep !== 0 && (
                  <Button
                    variant="contained"
                    // color="success"
                    onClick={handleBack}
                    sx={{
                      mr: 5,
                      outline: "1px solid #000",
                      display: "flex",
                      alignItems: "center",
                      background: "#273c86"
                    }}
                  >
                    <FirstPageRoundedIcon sx={{ mr: 1 }} /> {/* Back Arrow Icon */}
                    Back
                  </Button>
                )}
                {/* {isStepOptional(activeStep) && (
                            <Button
                                variant="contained"
                                // color="success"
                                onClick={handleSkip}
                                sx={{ 
                                    mr: 32, 
                                    
                                }}
                            >
                                Skip
                            </Button>
                        )} */}
                {activeStep !== steps.length - 1 && (
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={handleNext}
                    sx={{ display: "flex", alignItems: "center", ml: 165 }}
                  >
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                    <LastPageRoundedIcon sx={{ ml: 1 }} /> {/* Next Arrow Icon */}
                  </Button>
                )}
              </Box>
            </React.Fragment>
          )}
        </Box>
      </SimpleCard>
    </Container>
  );
};

export default BasicDemo;
