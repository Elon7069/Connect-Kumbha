import express from 'express';
const app = express();

// Simple route
app.get('/', (req, res) => {
    res.send('Welcome to your first backend!');
});

//get a list of 5 jokes


// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
