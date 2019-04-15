var jogoDaVelha = new Array(3) ;
for ( i = 0; i < 3; i++) {
	jogoDaVelha[i] = new Array(3);
}

for ( i = 0; i < 3; i++) {
	for ( j = 0; j <3; j++) {
		jogoDaVelha[i][j] = 0;
	}
}

var turno = false;
//utilizando 1 e 5 como maneira matemática de validação 	
function darValor( btn ){

	if( btn.disable != true ) {

		row = parseInt( btn.dataset.row );
		col = parseInt( btn.dataset.column );

		if (turno == false) {
			btn.innerHTML  = 'x' ;
			turno = true;
			jogoDaVelha[row][col] = 1 ;
		}else{
			btn.innerHTML = 'o' ;
			turno = false;
			jogoDaVelha[row][col] = 5 ;
		}
		btn.disable = true;
		verificacao(row, col);

	} else {
		alert('Fonou!');
	}

}

function verificacao(row, col){
	verificaLinha(row);
	verificaColuna(col);
	verificaDiagonal();
	velha();
}

function verificaLinha(row){
	cont = 0;
	for (j = 0; j < 3; j++) {
		cont = cont + jogoDaVelha[row][j];
	}
	if (cont == 3 || cont == 15){
		ganhou();
	}
}
function verificaColuna(col){
	cont = 0;
	for (i = 0; i < 3; i++) {
		cont = cont + jogoDaVelha[i][col];
	}
	if (cont == 3 || cont == 15){
		ganhou();
	}
}
function verificaDiagonal(){
	cont159 = 0;
	cont357 = 0;
	cont159 = cont159 + jogoDaVelha[0][0] + jogoDaVelha[1][1] + jogoDaVelha[2][2];
	cont357 = cont357 + jogoDaVelha[0][2] + jogoDaVelha[1][1] + jogoDaVelha[2][0];
	if (cont159 == 3 || cont159 == 15 || cont357 == 3 || cont357 == 15) {
		ganhou();
	}
}

function ganhou(){
	if (turno != false) {
		alert("Parabéns X, você ganhou!");
	} else {
		alert("Parabéns O, você ganhou!");
	}

	location.reload();

}

function velha(){

	cont = 0;
	for (i = 0; i < 3; i++) {
		for (j = 0; j <3; j++) {
			if (jogoDaVelha[i][j] != 0) {
				cont++;
			}
		}
	}
	console.log(cont);
	if (cont == 9){
		alert("Deu Velha! ;-;");
		location.reload();
	}

}