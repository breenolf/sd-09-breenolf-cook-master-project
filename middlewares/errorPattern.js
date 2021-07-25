module.exports = (err, _req, res, _next) => {
  if (err.isJoi) {
    console.log(err);
    return res.status(400).json({ message: err.message });
  }

  if (err.isBoom) {
    const { payload } = err.output;
    return res.status(payload.statusCode).json({ message: payload.message });
  }

  res.status(500).json({ message: err.message });
};
