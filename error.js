export function errorHandler(err, req, res, next) {
  console.error(err);
  if (err.status) return res.status(err.status).json({ message: err.message });
  if (err.name === 'ZodError') return res.status(400).json({ message: 'Invalid input', details: err.issues });
  if (err.code === 'ER_DUP_ENTRY') return res.status(409).json({ message: 'Duplicate entry' });
  res.status(500).json({ message: 'Internal Server Error' });
}
