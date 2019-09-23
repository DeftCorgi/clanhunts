const express = require('express');

const app = express();

// routes
require('./api/hunts')(app);

app.listen(process.env.PORT || 5000, () => console.log('API started'));
