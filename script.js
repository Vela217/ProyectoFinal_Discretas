function conjuncion() {
  /* Para obtener el valor */
  var conj1 = document.getElementById("conjuncion1").value;
  var conj2 = document.getElementById("conjuncion2").value;
  if (conj1 == "1" && conj2 == "1") {
    document.getElementById("res").value = "1";
  } else if (
    (conj1 == "1" && conj2 == "0") ||
    (conj1 == "0" && conj2 == "1") ||
    (conj1 == "0" && conj2 == "0")
  ) {
    document.getElementById("res").value = "0";
  }
}
function disyuncion() {
  /* Para obtener el valor */
  var dis1 = document.getElementById("disyuncion1").value;
  var dis2 = document.getElementById("disyuncion2").value;
  if (dis1 == "0" && dis2 == "0") {
    document.getElementById("resdis").value = "0";
  } else if (
    (dis1 == "1" && dis2 == "1") ||
    (dis1 == "1" && dis2 == "0") ||
    (dis1 == "0" && dis2 == "1")
  ) {
    document.getElementById("resdis").value = "1";
  }
}
function condicional() {
  /* Para obtener el valor */
  var condi1 = document.getElementById("condicional1").value;
  var condi2 = document.getElementById("condicional2").value;
  if (condi1 == "1" && condi2 == "0") {
    document.getElementById("rescon").value = "0";
  } else if (
    (condi1 == "1" && condi2 == "1") ||
    (condi1 == "0" && condi2 == "1") ||
    (condi1 == "0" && condi2 == "0")
  ) {
    document.getElementById("rescon").value = "1";
  }
}
function bicondicional() {
  /* Para obtener el valor */
  var bico1 = document.getElementById("bicondicional1").value;
  var bico2 = document.getElementById("bicondicional2").value;
  if ((bico1 == "1" && bico2 == "1") || (bico1 == "0" && bico2 == "0")) {
    document.getElementById("resbi").value = "1";
  } else if (
    (bico1 == "1" && bico2 == "0") ||
    (bico1 == "0" && bico2 == "1")
  ) {
    document.getElementById("resbi").value = "0";
  }
}
function negacion() {
  /* Para obtener el valor */
  var neg = document.getElementById("negacion1").value;
  if (neg == "0") {
    document.getElementById("resneg").value = "1";
  } else if (neg == "1") {
    document.getElementById("resneg").value = "0";
  }
}