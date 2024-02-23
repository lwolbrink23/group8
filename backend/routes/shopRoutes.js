import { ObjectId } from "mongodb";
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

  // get shop item individually
  app.get("/shop/:id", async (req, res) => {
    try {
      const collection = database.collection("Products");
      const result = await collection.findOne({ id: req.params.id });
      res.send(JSON.stringify(result));
    } catch (error) {
      console.error("Error fetching data:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  // insert a new order into database
  app.post("/checkout", async (req, res) => {
    try {
      const newOrder = req.body;
      const result = await database
        .collection("User_Orders")
        .insertOne(newOrder);
      res.status(201).json({ success: true, orderId: result.insertedId });
    } catch (error) {
      console.error("Error inserting order:", error);
      res.status(500).json({
        success: false,
        error: "Failed to insert order into the database",
      });
    }
  });

  // get an order's information
  app.get("/order_placed/:id", async (req, res) => {
    try {
      const collection = database.collection("User_Orders");
      const result = await collection.findOne({
        _id: new ObjectId(req.params.id),
      });
      res.send(JSON.stringify(result));
    } catch (error) {
      console.error("Error fetching data:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  // get the user's cart item
  app.get("/user/:id/cart", async (req, res) => {
    try {
      const collection = database.collection("User_Accounts");
      let result = await collection.findOne({
        _id: new ObjectId(req.params.id),
      });
      // console.log(result);
      result = result.shoppingCart;
      res.send(JSON.stringify(result));
    } catch (error) {
      console.error("Error fetching data:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  // get the user's giftcard cart
  app.get("/user/:id/giftcard", async (req, res) => {
    try {
      const collection = database.collection("User_Accounts");
      let result = await collection.findOne({
        _id: new ObjectId(req.params.id),
      });
      // console.log(result);
      result = result.giftcardCart;
      res.send(JSON.stringify(result));
    } catch (error) {
      console.error("Error fetching data:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  // post to update user's cart data
  app.post("/user/:id/cart", async (req, res) => {
    try {
      // Extract cart data from the request body
      const { cart } = req.body;
      // Update the user's cart data in the database
      const collection = database.collection("User_Accounts");
      const result = await collection.updateOne(
        { _id: new ObjectId(req.params.id) },
        { $set: { shoppingCart: cart } }
      );

      if (result.modifiedCount === 1) {
        res.status(200).json({ message: "Cart data updated successfully" });
      } else {
        res
          .status(404)
          .json({ error: "User not found or cart data not updated" });
      }
    } catch (error) {
      console.error("Error updating cart data:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  // post to update user's giftcard card data
  app.post("/user/:id/giftcard", async (req, res) => {
    try {
      // Extract cart data from the request body
      const { cart } = req.body;
      // Update the user's cart data in the database
      const collection = database.collection("User_Accounts");
      const result = await collection.updateOne(
        { _id: new ObjectId(req.params.id) },
        { $set: { giftcardCart: cart } }
      );

      if (result.modifiedCount === 1) {
        res.status(200).json({ message: "Cart data updated successfully" });
      } else {
        res
          .status(404)
          .json({ error: "User not found or cart data not updated" });
      }
    } catch (error) {
      console.error("Error updating cart data:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
};

export default shopRoutes;
