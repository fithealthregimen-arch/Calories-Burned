// Simple API route to force server-side rendering
export default function handler(req, res) {
  res.status(200).json({ status: 'ok' });
}
