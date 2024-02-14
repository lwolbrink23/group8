// Login route
// Add this function in your component or a separate service file
async function loginUser(email, password) {
    try {
        const response = await fetch("http://localhost:3003/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
            console.log("Login successful");
            // Redirect to another page or perform any action upon successful login
        } else {
            const errorData = await response.json();
            console.error("Login failed:", errorData.error);
            // Handle error, display message to the user, etc.
        }
    } catch (error) {
        console.error("Error during login:", error);
        // Handle network error or other unexpected errors
    }
}

// Call loginUser function when the login button is clicked
const handleLogin = () => {
    loginUser(emailValue, passwordValue);
};

app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user by email in the database
        const user = await database.collection("User_Accounts").findOne({ email });

        // If user not found or password does not match
        if (!user || user.password !== password) {
            return res.status(401).json({ error: "Invalid email or password" });
        }

        // If email and password match, login successful
        return res.status(200).json({ message: "Login successful" });
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});