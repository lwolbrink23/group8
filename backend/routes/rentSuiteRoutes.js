const rentSuiteRoutes = (app, database) => {
  app.post("/rent-a-suite", async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;

      // Check if the suite rental request already exists
      const existingRequest = await database
        .collection("Suite_Rental_Requests")
        .findOne({ email });
      if (existingRequest) {
        return res
          .status(400)
          .json({
            error: `Suite rental request already submitted for ${email}`,
          });
      }

      // Create suite rental document
      const newRequest = {
        name,
        email,
        subject,
        message,
      };

      // Insert new request
      await database.collection("Suite_Rental_Requests").insertOne(newRequest);

      res.status(201).json({
        request: newRequest,
        message: "Suite rental request submitted successfully",
      });
    } catch (error) {
      console.error("Error submitting suite rental request:", error);
      res
        .status(500)
        .json({ error: "Internal Server Error", details: error.message });
    }
  });
};

export default rentSuiteRoutes;
