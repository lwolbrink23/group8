const accountRoutes = (app, database) => {
  // Get Appts from database route
  app.get("/account/:id/appointments", async (req, res) => {
    try {
      const collection = database.collection("User_Accounts");

      // Convert the provided ID to ObjectId (assuming it's stored as ObjectId in the database)
      const userId = ObjectId(req.params.id);

      const user = await collection.findOne({ _id: userId });

      if (user) {
        const appointments = user.appointments || [];
        res.status(200).json(appointments);
      } else {
        res.status(404).json({ error: "User not found" });
      }
    } catch (error) {
      console.error("Error fetching user appointments:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
};
export default accountRoutes;
