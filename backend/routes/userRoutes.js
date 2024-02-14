

const userRoutes = (app, client, database) => {
    // Signup route
    app.post("/signup", async (req, res) => {
        try {
            const { name, phoneNumber, email, password } = req.body;

            // Check if user already exists with the given email
            const existingUser = await database.collection("User_Accounts").findOne({ email });
            if (existingUser) {
                return res.status(400).json({ error: "User with this email already exists" });
            }

            // Create a new user document
            const newUser = {
                name,
                phoneNumber,
                email,
                password,
            };

            // Insert the new user into the 'User_Accounts' collection
            await database.collection("User_Accounts").insertOne(newUser);

            res.status(201).json({ user: newUser, message: "User created successfully" });
        } catch (error) {
            console.error("Error creating user:", error);
            res.status(500).json({ error: "Internal Server Error", details: error.message });
        }
    });
};

export default userRoutes;