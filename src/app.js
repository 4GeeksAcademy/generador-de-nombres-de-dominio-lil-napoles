import "bootstrap";
import "./style.css";

window.onload = function() {
  let pronombre = ["los", "la", "el"];
  let adjetivo = ["mejores", "bomba", "crema"];
  let nombre = ["bocadillos", "derelojeria", "canela"];
  let dominio = [".com", ".es", ".onion"];



  for (let p = 0; p < pronombre.length; p++) {
    for (let a = 0; a < adjetivo.length; a++) {
      for (let n = 0; n < nombre.length; n++) {
        for (let d = 0; d < dominio.length; d++) {

          console.log(pronombre[p]+ adjetivo[a]+ nombre[n]+ dominio[d]
          );

        }
      }
    }
  }
};