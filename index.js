const {getUsers}= require('./users')
const app = require('express')();
const port = 8080;

app.get('/', (req, res) => {
  res.json(getUsers());
});

app.listen(port, (err) => {
	  if (err) {
		console.log(err);
		process.exit(1);
	  }
  console.log(`Ready on port ${port}`);
});