 const express = require('express');
 const app = express.Router();
 const adminRouter = require('./routes/adminRoutes');
 const userRouter = require('./routes/userRoutes');

 app.use(adminRouter);
 app.use(userRouter);