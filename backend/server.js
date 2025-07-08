const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());

/**
 * GET /api/images?page=1&limit=20
 * Returns paginated list of image objects { id, url }
 */
app.get('/api/images', (req, res) => {
  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 20;

  const start = (page - 1) * limit;
  const images = Array.from({ length: limit }, (_, idx) => {
    const id = start + idx;
    const height = 200 + Math.floor(Math.random() * 800); // 200-1000 random
    return {
      id,
      url: `https://picsum.photos/seed/${id}/600/${height}`,
    };
  });

  res.json({ page, limit, images });
});

app.listen(PORT, () => {
  console.log(`🌿 Image server running on http://localhost:${PORT}`);
}); 