// var menu = ["Productos", "Ventas", "Contacto"];
// document.write(menu[0]);

// var dofa = [ ["Fuerza", "Oportunidad"], ["Debilidades","Amenzas"]];
// document.write(dofa[1][1]);

function explosion()
{
	alert("¡¡MUERE BITCH¡¡");
	document.write("<h1>Elegiste un área minada:(</h1>");
}

function ganaste()
{
	document.write("<h1> GANASTE BITCH</h1>");
}

//1 es igual a BOMBA 0 es igual a no hay bomba
var campo =	[[1, 0, 0],
			 [0, 1, 1],
			 [0, 1, 0]];

var textos = ["Cesped", "Bomba"];
var x, y;

alert("ESTAS EN UN CAMPO MINADO\n" +
	  "ELIJE UNA POSICIÓN ENTRE 0 y 2 para 'x' y para 'y'");

x = prompt("¿Posición en X? (entre 0 y 2)");
y = prompt("¿Posición en y? (entre 0 y 2)");


if (x <= 2 && y <=2)
{
	var posicion = campo[x][y];
	document.write("Elegiste " + textos[posicion] + "<br />");
	if (posicion == 1)
	{
		explosion();
	}
	else{
		ganaste();
	}
}
else
{
	document.write("¡TE SALISTE DEL CAMPO  BITCH!");
	explosion();
}