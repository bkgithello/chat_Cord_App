const expres = require('express');
const path = require('path');

const app = expres();

// set static folder
app.use(expres.static(path.join(__dirname, 'public')));
const PORT = 3000 || process.env.PORT;

app.listen(3000, ()=>{
    console.log(`Server running on port ${PORT}`);
})