const blogRoutes = (app, database) => {

    app.get("/blog", async (req, res) => {
        try {
            const collection = database.collection("Blogs");
            const result = await collection.find().toArray();
            res.send(JSON.stringify(result));
        } catch (error) {
            console.error("Error fetching data:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    });

    app.get("/blog/:category/:id", async (req, res) => {
    try {
      const collection = database.collection("Blogs");
      const query = { id: req.params.id, category: req.params.category };
      const result = await collection.findOne(query);
      res.send(JSON.stringify(result));
    } catch (error) {
      console.error("Error fetching data:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
};
export default blogRoutes;