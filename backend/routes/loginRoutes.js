// Assuming you have the necessary imports and setup for your server

// Login route
const loginRoutes = (app, client, database) => {
app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user by email in the database
        const user = await database.collection("User_Accounts").findOne({ email });

        // If user not found or password does not match
        if (!user || user.password !== password) {
            //return res.status(401).json({ error: "Invalid email or password" });
            return console.log("User doesn't exist")
        }

        // If email and password match, login successful
        return res.status(200).json({ message: "Login successful" });
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});}
export default loginRoutes
