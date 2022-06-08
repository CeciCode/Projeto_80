var lista= "";
var convidado= document.getElementById("convidados").value;
lista.push(convidado);
lista.sort();
function search() {
    var s= document.getElementById("pesquisa").value;
    var resul= 0;
    var i;
    for (i= 0; i< lista.length; i++) {
        if (s== lista [i]) {
            resul= resul+ 1;
        }
    } 
    document.getElementById("resultado").innerHTML= "Nome encontrado " "+ resul +" " vez(es)"};