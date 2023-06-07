const mongoose = require('mongoose');
const app = require('./app');

const { DB_HOST, PORT } = process.env;

// Sets strictQuery mode for schemas.
// Set `strictQuery` to `true` to omit unknown fields in queries.
mongoose.set('strictQuery', true);

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Database connected on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
