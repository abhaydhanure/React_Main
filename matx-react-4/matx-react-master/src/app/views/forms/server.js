const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json()); // for parsing application/json

// Handle POST request to save form data
app.post('/saveFormData', (req, res) => {
  const formValues = req.body; // Assuming formValues is sent as JSON in the request body

  // Convert formValues to string format (for simplicity)
  const formDataString = JSON.stringify(formValues, null, 2); // Use null, 2 for pretty formatting

  // File path where back_end.txt is located
  const filePath = './backend.txt';

  // Write formValues to the file
  fs.writeFile(filePath, formDataString, (err) => {
    if (err) {
      console.error('Error writing file:', err);
      res.status(500).send('Error saving form data');
      return;
    }

    console.log('Form data saved successfully');
    res.send('Form data saved successfully');
  });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
