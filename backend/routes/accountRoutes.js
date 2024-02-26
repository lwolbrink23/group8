import { ObjectId } from "mongodb";

const accountRoutes = (app, database) => {
  // Get Users from database
  app.get("/users/", async (req, res) => {
    try {

      const collection = database.collection("User_Accounts");
      const result = await collection.findOne({ id: req.params.id });
      res.send(JSON.stringify(result));
      console.log("result._id: ", result._id) //console.logs all user ids to database console
    } catch (error) {
      console.error("Error fetching user appointments:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  });


  // Get Appts from the database route
  app.get("/appointments/:id", async (req, res) => {
    try {
      const userId = req.params.id;
      if (!userId) {
        return res.status(400).json({ error: "User ID is required" });
      }

      const collection = database.collection("User_Accounts");
      const result = await collection.find({ _id: new ObjectId(userId) }).toArray();
      // res.send(JSON.stringify(result));
      if (result.length > 0) {
        const appointments = result.map(item => item.appointments);
        res.status(200).json(appointments);
      } else {
        res.status(404).json({ error: "User not found" });
      }
    } catch (error) {
      console.error("Error fetching user appointments:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  });
};
export default accountRoutes;


