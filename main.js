nomeArray = [];

function enviar(){
    var mostrarnome = [];
    for(var j=1;j<=4;j++){
        var nomealuno = document.getElementById("Nome"+j).value;
        nomeArray.push(nomealuno);
    }
    
    console.log(nomeArray);
     var comprimentomatriz=nomeArray.length;
     for(var k=0;k<=comprimentomatriz;k++){
    mostrarnome.push("<h4>Nome:"+nomeArray[k] + "</h4>")
     }
    var removevirgula = mostrarnome.join("  ");
     document.getElementById("nomessemvirgulas").innerHTML = removevirgula;
    document.getElementById("nomescomvirgulas").innerHTML = mostrarnome;
    document.getElementById("btEnviar").style.display = "none";
    document.getElementById("btOrganizar").style.display = "inline-block";
}


function organizar(){
    nomeArray.sort();
    console.log(nomeArray);
    var mostrarmatrizclassificada = [];
    var comprimentonomematriz = nomeArray.length;
    for(var k=0;k<=comprimentonomematriz;k++){
        mostrarmatrizclassificada.push("<h4>Nome:"+nomeArray[k] + "</h4>")
         }

var removevirgula = mostrarnome.join("  ");
     document.getElementById("nomessemvirgulas").innerHTML = removevirgula;
        }