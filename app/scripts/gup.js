/* globals document:false, window:false */
var gup = function(name) {
  "use strict";
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regexS = "[\\?&]" + name + "=([^&#]*)";
  var regex = new RegExp(regexS);
  var results = regex.exec(window.location.href);
  if (results === null)
    return "";
  else
    return results[1];
};

var sup = function(name, elem_id) {
  "use strict";
  var element = document.getElementById(elem_id);
  element.innerHTML = gup(name);
};

var set_value_at = function(value, elem_id) {
  "use strict";
  var element = document.getElementById(elem_id);
  element.innerHTML = value;
};
