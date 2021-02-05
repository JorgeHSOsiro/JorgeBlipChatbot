const fetch = require("node-fetch");

function compare(a, b) {
  if (a.created < b.created) {
    return -1;
  }
  if (a.created > b.created) {
    return 1;
  }
  return 0;
}

const fetchPromise = (url) => {
  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const repos = data
        .filter((item) => item.language === "C#")
        .map((reps, index) => {
          return { [index]: {
            profile: reps.owner.avatar_url,
            repository: reps.name,
            lang: reps.language,
            desc: reps.description,
            created: reps.created_at,
          }};
        })
        .sort(compare);
      return repos;
    });
};

module.exports = { fetchPromise };
