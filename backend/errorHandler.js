const errorHandler = (err, req, res, next) => {
    console.error("Internal Server Error:", err);
    res.status(500).json({ error: 'Internal Server Error' }); // Send JSON response with 500 status code
};

module.exports = errorHandler;
