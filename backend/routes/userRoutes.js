const userRoutes = (app, client, database) => {
  // Login route
  app.post("/login", async (req, res) => {
    try {
      const { email, password } = req.body;

      // Check if user exists with the given email
      const existingUser = await database
        .collection("User_Accounts")
        .findOne({ email });

      if (existingUser) {
        // Check if the password matches
        if (existingUser.password === password) {
          res
            .status(200)
            .json({ user: existingUser, message: "Login successful" });
        } else {
          res.status(401).json({ error: "Invalid password" });
        }
      } else {
        res.status(404).json({ error: "User not found" });
      }
    } catch (error) {
      console.error("Error logging in:", error);
      res
        .status(500)
        .json({ error: "Internal Server Error", details: error.message });
    }
  });

  // Signup route
app.post("/signup", async (req, res) => {
  try {
    console.log("Received signup request:", req.body); // Log received signup request

    const { name, phoneNumber, email, password, shoppingCart } = req.body;

    // Check if user already exists with the given email
    const existingUser = await database
      .collection("User_Accounts")
      .findOne({ email });
    if (existingUser) {
      console.log("User with this email already exists:", email); // Log existing user
      return res
        .status(400)
        .json({ error: "User with this email already exists" });
    }

    console.log("Creating new user:", email); // Log new user creation

    // Create a new user document
    const newUser = {
      name,
      phoneNumber,
      email,
      password,
      shoppingCart,
    };

    // Insert the new user into the 'User_Accounts' collection
    await database.collection("User_Accounts").insertOne(newUser);

    console.log("User created successfully:", email); // Log successful user creation

    res
      .status(201)
      .json({ user: newUser, message: "User created successfully" });
  } catch (error) {
    console.error("Error creating user:", error);
    res
      .status(500)
      .json({ error: "Internal Server Error", details: error.message });
  }
});

  //for the bookings in appt_overview (in progress)
  app.post("/bookings", async (req, res) => {
    try {
      const { userId, selectedServices, totalCost, date, time, serviceName } =
        req.body;

      // Find the user by userId
      const user = await database
        .collection("User_Accounts")
        .findOne({ _id: userId });
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      // Create a new appointment object
      const newAppointment = {
        selectedServices,
        totalCost,
        date,
        time,
        serviceName,
      };

      // Add the new appointment to the user's appointments array
      await database
        .collection("User_Accounts")
        .updateOne(
          { _id: userId },
          { $push: { appointments: newAppointment } }
        );

      res.status(201).json({
        appointment: newAppointment,
        message: "Appointment booked successfully",
      });
    } catch (error) {
      console.error("Error booking appointment:", error);
      res
        .status(500)
        .json({ error: "Internal Server Error", details: error.message });
    }
  });
};

export default userRoutes;
