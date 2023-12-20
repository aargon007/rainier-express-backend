const express = require("express");
const connectDB = require("./db/database");
const cors = require("cors");

// Routers Path
const courseRouter = require("./routes/courseRoutes");

const app = express();

//middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Route End Point
app.use("/api/course", courseRouter);

// root link
app.get("/", (req, res) => {
	res.send("server is online!!")
});

// port
const PORT = process.env.PORT || 3000;

// listen to port
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});