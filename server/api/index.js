/** This is a placeholder for the actual API */

exports.index = function (req, res) {
  res.json([{"title":"Test","releaseDate":"2014-05-05 00:00:00","countdownNumber":"10","fontAwesomeClass":"fa-eye"}]);
};

exports.show = function (req, res) {
  res.json({"title":"Test","description":"\u003Cp\u003ETest Description.\u003C\/p\u003E","content":"\u003Cp\u003ETest Content.\u003C\/p\u003E","releaseDate":"2014-05-05 00:00:00","countdownNumber":"10","fontAwesomeClass":"fa-eye"});
};
