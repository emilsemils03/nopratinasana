const CASES = require("./_cases");

module.exports = (req, res) => {
  const id = Math.floor(Math.random() * CASES.length);
  res.setHeader("Cache-Control", "no-store");
  res.status(200).json({ id, title: CASES[id].title, story: CASES[id].story });
};
