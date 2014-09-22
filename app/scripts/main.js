window.onload = function() {
  if (gup("os") === gup("bs")) {
    var cr = document.getElementById("voltage_row");
    for (var i = cr.childNodes.length - 1; i >= 0; i--) {
      cr.removeChild(cr.childNodes[i]);
      console.log("Removing");
    }
    var nE = document.createElement("td");
    cr.appendChild(nE);
    nE.setAttribute("colspan", 5);
    nE.innerHTML = gup("os");

  } else {
    sup("os", "os");
    sup("bs", "bs");
  }
  if (gup("oa") === "" && gup("ba") === "") {
    cr = document.getElementById("current_row");
    for (var i = cr.childNodes.length - 1; i >= 0; i--) {
      cr.removeChild(cr.childNodes[i]);
      console.log("Removing");
    }
    var nE = document.createElement("td");
    cr.appendChild(nE)
    nE.setAttribute("colspan", 5);
    nE.innerHTML = "Alle stroomsterktes";



  } else {
    sup("oa", "oa");
    sup("ba", "ba");
  }
  if (gup("c") === "D") {
    set_value_at("gelijkspanning", "current_name");
    set_value_at("&#9107", "current_symbol");
    set_value_at("DC", "current_acronym");
  } else {
    set_value_at("wisselspanning", "current_name");
    set_value_at("&#9190", "current_symbol");
    set_value_at("AC", "current_acronym");
  }
  if (gup("l") === "y") {
    set_value_at("Laptop adapter", "adapter_type");
  } else {
    set_value_at("Adapter", "adapter_type");
  }
};
