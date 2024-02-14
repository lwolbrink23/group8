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
};
export default blogRoutes;