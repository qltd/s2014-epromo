/** This is a placeholder for the actual API */

exports.index = function (req, res) {
  res.json([{"title":"Dragons Grow Up","releaseDate":"2014-06-03 00:00:00","countdownNumber":"10","fontAwesomeClass":"fa-compress","fontAwesomeColor":"teal"}]);
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
    {},
    {},
    {"title":"Dragons Grow Up","description":"\u003Cp\u003EAt SIGGRAPH 2014, DreamWorks Animation presents a behind-the-scenes discussion of the feature animated film \u0026quot;How To Train Your Dragon 2\u0026quot; (June 2014). Writer\/director Dean DeBlois charts the nuanced filmmaking necessary to fully realize this next adventure in the secret and emotional world of dragons. Featuring DeBlois, Gil Zimmerman (Head of Layout), Simon Otto (Head of Character Animation) and Dave Walvoord (VFX Supervisor), the panel discusses the creative contributions that went into advancing the complexity and believability of the storytelling and cinematography, as well as the leap forward the animators were able to make using Apollo, DreamWorks Animation\u0026rsquo;s ground-breaking next-generation animation system.\u003C\/p\u003E\u003Cp\u003EThen, catch a special viewing of \u0026quot;How to Train Your Dragon 2\u0026quot; at SIGGRAPH 2014, Wednesday night, 13 August, 8-10 pm.\u003C\/p\u003E","content":"\u003Cp\u003E\u003Cimg alt=\u0022How to Train Your Dragon 2\u0022 src=\u0022http:\/\/s2014.siggraph.org\/sites\/default\/files\/10_dragon.jpg\u0022 style=\u0022width: 800px; height: 1185px;\u0022 \/\u003E\u003C\/p\u003E","releaseDate":"2014-06-03 00:00:00","countdownNumber":"10","fontAwesomeClass":"fa-compress","fontAwesomeColor":"teal"}
  ];
  res.json(showObj[req.params.countdown - 1]);
};
