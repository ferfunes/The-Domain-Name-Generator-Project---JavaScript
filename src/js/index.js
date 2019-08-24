/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  document.querySelector("#dGenerator").innerHTML = generateDomain();

  function generateDomain() {
    var pronound = ["the", "our"];
    var adj = ["great", "big"];
    var noun = ["jogger", "racoon"];

    for (var i = 0; i < pronound.length; i++) {
      for (var y = 0; y < adj.length; y++) {
        for (var j = 0; j < noun.length; j++) {
          return "www." + pronound[i] + adj[y] + noun[j] + ".com ";
        }
      }
    }
  }
};
