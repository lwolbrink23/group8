const shopRoutes = (app, client, database) => {
  // /shop route to get shop items
  app.get("/shop", async (req, res) => {
    try {
      const collection = database.collection("accounts");
      const result = await collection.findOne({ account_id: 198100 });
      res.send(JSON.stringify(result));
    } catch (error) {
      console.error("Error fetching data:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

};
export default shopRoutes;
