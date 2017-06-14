/* av - avisos*/
/* dc - disciplna*/
var dc,av=[],contador;
var hinicio;
var minicio;
var sinicio;
var c=0;
function inicio() {
	var today = new Date();
   hinicio = today.getHours();
   minicio = today.getMinutes();
   sinicio= today.getSeconds();
}
function horaInicial() {
	alert(hinicio+":"+minicio+":"+sinicio);
}
function startTime() {
	if(c==0) {
		inicio();
		horaInicial();
		checar15min();
	}
	c++;
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}

function checar15min() {
	var today = new Date();
    var s = today.getSeconds();
    
   if(sinicio+10==s)
	 alert("10 segundos se passaram");
   var t = setTimeout(checar15min, 500);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function avisos(){
  for(contador=0;contador<10;contador++){
   
  }
  av +="* "+prompt("Digite um aviso")+"<br>+";
  document.getElementById('avi').innerHTML = av;
}

function bd(){
	dc = document.getElementById('d').value; // Função para pegar valor das caixas de textos!
	alert(dc);
	//document.write(bd);
	}

	

2 - 



Projeto Rummenigge

1- https://www.w3schools.com/html/html5_webstorage.asp
