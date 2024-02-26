import { ObjectId } from "mongodb";

const accountRoutes = (app, database) => {
  // Get Appts from database route
  app.get("/appointments/", async (req, res) => {
    try {

      const collection = database.collection("User_Accounts");
      const result = await collection.findOne({ id: req.params.id });
      res.send(JSON.stringify(result));
      console.log("result: ", result)
    } catch (error) {
      console.error("Error fetching user appointments:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  });
};
export default accountRoutes;


