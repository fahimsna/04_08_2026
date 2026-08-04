const enquiryModel = require("../../models/enquiryModel");

let enquiryInsert = (req, res) => {
  // Implementation for inserting enquiry
  let { name, email, phone, message } = req.body;
  let enquiry = new enquiryModel({
    name,
    email,
    phone,
    message,
  });
  enquiry
    .save()
    .then((result) => {
      res.status(201).json({
        message: "Enquiry created successfully",
        enquiry: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
};

module.exports = { enquiryInsert };
