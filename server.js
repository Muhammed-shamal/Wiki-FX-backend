const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;
app.use(cors());
app.use(express.json())


const adminRoute = require('./routes/adminRoutes');
app.use("/admin", adminRoute);

const userRoute = require('./routes/userRoutes');
app.use("/", userRoute);

app.listen(port,()=>console.log('server started'));
