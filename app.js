const express = require('express');
const connectDB = require('./DB/Connection');
const logger = require('./utility/helper/common-functions');

const app = express();

connectDB();
app.use(express.json({extended:false}));
app.use((req, res, next)=>{
  const { method, url, body } = req;
  const loginfo = {
    timestamp: Date.now(),
    method,
    url,
    body
  };
  logger.info('Request : ', loginfo);
  next();
});
app.use('/api/userModel', require('./Api/User'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('server started on port :', PORT);
});