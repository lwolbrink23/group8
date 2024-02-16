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
 app.get("/blog/blogpost/:category/:id", async (req, res) => {
    try {
      const collection = database.collection("Blogs");
      const query = { id: req.params.id, category: req.params.category };
      const result = await collection.findOne(query);

      if (!result) {
        console.error("Blog post not found");
        res.status(404).json({ error: "Blog post not found" });
        return;
      }

      console.log("Blog post found:", result);
      res.send(JSON.stringify(result));
    } catch (error) {
      console.error("Error fetching blog post data:", error);
      res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
  });
};
export default blogRoutes;