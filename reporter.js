"use strict";

module.exports = {
  reporter: function (res) {
    var len = res.length;
    var str = "";

    res.forEach(function (r) {
      var file = r.file;
      var err = r.error;

      str += "<div style='padding: 10px 0;'><span style='color: grey;'>" + file + ": Line " + err.line + ", col " +
        err.character + ",<span> <span style='color: #000;'> " + err.reason + "</span></div>";
    });

    process.stdout.write("<!DOCTYPE html><html><body>");
    if (str) {      
      process.stdout.write(str + "<span style='color: red; font-weight: bold;'>" + len + " error" +
        ((len === 1) ? "" : "s") + "</span>");      
    }else{
      process.stdout.write("<span style='color: green;'>No errors or warning :-)</span>");
    }
    process.stdout.write("</body></html>");
  }
};