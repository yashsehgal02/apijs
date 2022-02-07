const google = require('googlethis');
var express = require("express");
var app = express();

app.listen(3000, () => {
 console.log("Server running on port 3000");
});


app.get('/:text', async (req, res) => {
  const text = req.params.text;
  const options = {
    page: 0, 
    safe: false,
    additional_params: { 
      hl: 'en' 
    }
  }
  
const response = await google.search(text, options);
  res.send(response)
})
