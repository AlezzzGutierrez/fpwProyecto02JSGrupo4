const calcularArea = () =>{  //funcion calculararea, que esta en pages

    let base = document.getElementById("base").value;
    let altura = document.getElementById("altura").value;
      //base por altura...
    let area = (base * altura) / 2;
      //no entiendo
    document.getElementById("resultado").innerHTML = "el area es" + area;

}