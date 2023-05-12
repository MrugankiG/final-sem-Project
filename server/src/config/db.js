const mongoose = require("mongoose");
const connect = async () => {
  mongoose.set("strictQuery", false);
  console.log("process = ",process.env.DB_URL)
  return mongoose.connect('mongodb://localhost/my_database', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));
};
module.exports = connect;
