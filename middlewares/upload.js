// const path = require('path');
const multer = require('multer');

// const UPLOADS_FOLDER = path.join(__dirname, '..', 'src', 'uploads');

const storage = multer.diskStorage({ 
  destination: (_req, _file, callback) => {
    callback(null, 'src/uploads');
  },
  filename: (req, _file, callback) => {
    const { id } = req.params;
    callback(null, `${id}.jpeg`);
  },
});

const upload = multer({ storage });

module.exports = upload;
