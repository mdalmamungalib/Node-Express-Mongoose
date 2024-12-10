const express = require("express");
const router = express.Router();

// Assuming `postCollection` is properly connected to a MongoDB collection

router.post("/create-post", async (req, res) => {
  try {
    // Validate input if necessary
    const postData = req.body;
    console.log(postData);

    // Respond with success
    res.json({
      message: "Post Created Successfully",
    });
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
