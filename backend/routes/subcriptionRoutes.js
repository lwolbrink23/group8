const subscriptionRoutes = (app, database) => {
app.post("/subscribe", async (req, res) => {
  try {
    const { email, type } = req.body;

    // Check if the email is already subscribed for the given type
    const existingSubscription = await database
      .collection("Subscriptions")
      .findOne({ email, type });

    if (existingSubscription) {
      return res
        .status(400)
        .json({ error: `User with this email already subscribed to ${type}` });
    }

    // Create a new subscription document
    const newSubscription = {
      email,
      type,
    };

    // Insert the new subscription into the 'Subscriptions' collection
    await database.collection("Subscriptions").insertOne(newSubscription);

    res
      .status(201)
      .json({
        subscription: newSubscription,
        message: `Successfully subscribed to ${type}`,
      });
  } catch (error) {
    console.error("Error subscribing:", error);
    res
      .status(500)
      .json({ error: "Internal Server Error", details: error.message });
  }
});
};
export default subscriptionRoutes;