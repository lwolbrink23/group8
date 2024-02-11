const shopRoutes = (app, database) => {
  // /shop route to get shop items
  app.get("/shop", async (req, res) => {
    try {
      const collection = database.collection("Products");
      const result = await collection.find().toArray();
      res.send(JSON.stringify(result));
    } catch (error) {
      console.error("Error fetching data:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

};
export default shopRoutes;
