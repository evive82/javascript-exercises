const getTheTitles = function(array) {
  let titles = [];
  array.forEach(books => {
    titles.push(books.title);
  });
  return titles;
}

module.exports = getTheTitles;
