const express = require("express");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

// root route
app.get('/', (req, res) => {
	res.send("Hello world");
});

// dorayaki routes
const dorayakiRoutes = require("./src/routes/dorayaki.routes");
app.use("/dorayaki", dorayakiRoutes);

// toko routes
const tokoRoutes = require("./src/routes/toko.routes");
app.use("/toko", tokoRoutes);

// stok routes
const stokTokoRoutes = require("./src/routes/stok_toko.routes");
app.use("/stok_toko", stokTokoRoutes);

app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});