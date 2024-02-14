const loginRoutes = (app, database) => {

app.post('/login', async (req, res) => {
    const { username, password } = req.body;

// Check if user exists and authenticate
const user = await database.collection("User_Accounts").findOne({ email });

if (!user || user.password !== password) {
    return res.status(401).json({ error: 'Invalid email or password' });
}

// Authentication successful
return res.status(200).json({ message: 'Login successful' });

});
}
export default loginRoutes