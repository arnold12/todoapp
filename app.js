const express = require('express');
const connectDB = require('./DB/Connection');

const app = express();

connectDB();
app.use(express.json({extended:false}));
app.use('/api/userModel', require('./Api/User'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log('server started on port :', PORT);
});