const newServer = require('./src/app.js');
const { conn } = require('./src/db.js');

conn.sync({ force: false }).then(() => {
   newServer.listen(process.env.PORT, () => {
      console.log(`%s listening at ${process.env.PORT}`);
   });
});

