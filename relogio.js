var dc;

function startTime() {
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
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function avisos(){
  var x;
  x=prompt("Digite um aviso");
  document.write("* "+x);
}

function bd(){
	dc = document.getElementById('d').value; // Função para pegar valor das caixas de textos!
	alert(dc);
	//document.write(bd);
	}
	//https://www.w3schools.com/graphics/canvas_clock.asp
	
