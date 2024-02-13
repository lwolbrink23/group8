const exampleRoutes = (app, client, database) => {
  // example route
  app.get("/accounts", async (req, res) => {
    try {
      const collection = database.collection("accounts");
      const result = await collection.findOne({ account_id: 198100 });
      res.send(JSON.stringify(result));
    } catch (error) {
      console.error("Error fetching data:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  app.get("/customers", async (req, res) => {
    try {
      const collection = database.collection("customers");
      const result = await collection.findOne({ username: "fmiller" });
      res.send(JSON.stringify(result));
    } catch (error) {
      console.error("Error fetching data:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
};
export default exampleRoutes;
