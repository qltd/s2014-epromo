/** This is a placeholder for the actual API */

exports.index = function (req, res) {
  res.json([{"title":"Test","releaseDate":"2014-05-05 00:00:00","countdownNumber":"10","fontAwesomeClass":"fa-eye","fontAwesomeColor":"orange"},{"title":"Yo Test Test","releaseDate":"2014-05-12 00:00:00","countdownNumber":"9","fontAwesomeClass":"fa-bolt","fontAwesomeColor":"teal"},{"title":"Testing Testing","releaseDate":"2014-05-12 00:00:00","countdownNumber":"8","fontAwesomeClass":"fa-flag","fontAwesomeColor":"beige"}]);
};

exports.show = function (req, res) {
  var showObj = [
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {"title":"Testing Testing","description":"\u003Cp\u003EBrunch bespoke twee forage biodiesel, normcore locavore art party pickled XOXO gastropub. Kickstarter viral Bushwick organic mustache, ethical vegan mumblecore pour-over shabby chic single-origin coffee polaroid High Life. Art party deep v forage before they sold out quinoa drinking vinegar, ethnic cred trust fund kitsch tofu pickled High Life leggings. Williamsburg Pitchfork distillery, pop-up trust fund twee 90\u0026#39;s biodiesel hoodie pour-over tattooed. Blue Bottle readymade vegan skateboard. Hella brunch retro artisan, tote bag Godard wolf gentrify. Kogi letterpress mixtape, hella High Life asymmetrical fixie Williamsburg pop-up.\u003C\/p\u003E","content":"\u003Cp\u003EBrunch bespoke twee forage biodiesel, normcore locavore art party pickled XOXO gastropub. Kickstarter viral Bushwick organic mustache, ethical vegan mumblecore pour-over shabby chic single-origin coffee polaroid High Life. Art party deep v forage before they sold out quinoa drinking vinegar, ethnic cred trust fund kitsch tofu pickled High Life leggings. Williamsburg Pitchfork distillery, pop-up trust fund twee 90\u0026#39;s biodiesel hoodie pour-over tattooed. Blue Bottle readymade vegan skateboard. Hella brunch retro artisan, tote bag Godard wolf gentrify. Kogi letterpress mixtape, hella High Life asymmetrical fixie Williamsburg pop-up.\u003C\/p\u003E","releaseDate":"2014-05-12 00:00:00","countdownNumber":"8","fontAwesomeClass":"fa-flag","fontAwesomeColor":"beige"},
  {"title":"Yo Test Test","description":"\u003Cp\u003EBrunch bespoke twee forage biodiesel, normcore locavore art party pickled XOXO gastropub. Kickstarter viral Bushwick organic mustache, ethical vegan mumblecore pour-over shabby chic single-origin coffee polaroid High Life. Art party deep v forage before they sold out quinoa drinking vinegar, ethnic cred trust fund kitsch tofu pickled High Life leggings. Williamsburg Pitchfork distillery, pop-up trust fund twee 90\u0026#39;s biodiesel hoodie pour-over tattooed. Blue Bottle readymade vegan skateboard. Hella brunch retro artisan, tote bag Godard wolf gentrify. Kogi letterpress mixtape, hella High Life asymmetrical fixie Williamsburg pop-up.\u003C\/p\u003E","content":"\u003Cp\u003EBrunch bespoke twee forage biodiesel, normcore locavore art party pickled XOXO gastropub. Kickstarter viral Bushwick organic mustache, ethical vegan mumblecore pour-over shabby chic single-origin coffee polaroid High Life. Art party deep v forage before they sold out quinoa drinking vinegar, ethnic cred trust fund kitsch tofu pickled High Life leggings. Williamsburg Pitchfork distillery, pop-up trust fund twee 90\u0026#39;s biodiesel hoodie pour-over tattooed. Blue Bottle readymade vegan skateboard. Hella brunch retro artisan, tote bag Godard wolf gentrify. Kogi letterpress mixtape, hella High Life asymmetrical fixie Williamsburg pop-up.\u003C\/p\u003E","releaseDate":"2014-05-12 00:00:00","countdownNumber":"9","fontAwesomeClass":"fa-bolt","fontAwesomeColor":"teal"},
  {"title":"Test","description":"\u003Cp\u003ETest Description.\u003C\/p\u003E","content":"\u003Cp\u003ETest Content.\u003C\/p\u003E","releaseDate":"2014-05-05 00:00:00","countdownNumber":"10","fontAwesomeClass":"fa-eye","fontAwesomeColor":"orange"}
  ];
  res.json(showObj[req.params.countdown - 1]);
};
