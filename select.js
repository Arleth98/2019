'use strict';
function usagislct(rawData) {
  var file = 0;
  for (; 999 > file; file++) {
    var cssresource;
    var data = rawData["feed"]["entry"][file];
    var value = data["title"]["$t"];
    if (file == rawData["feed"]["entry"]["length"]) {
      break;
    }
    var i = 0;
    for (; i < data["link"]["length"]; i++) {
      if ("alternate" == data["link"][i]["rel"]) {
        cssresource = data["link"][i]["href"];
        break;
      }
    }
    document["write"]('<option value="' + cssresource + '">' + value + "</option>");
  }
};