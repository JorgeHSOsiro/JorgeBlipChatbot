const { fetchPromise } = require('../service/api');

const URL = 'https://api.github.com/users/takenet/repos';

const showData = async (_req, res) => {
  try {
    const data = await fetchPromise(URL);
    return res.status(200).json(data);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: e.message });
  }
};

module.exports = {
  showData,
};
