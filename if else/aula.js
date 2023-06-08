console.log('laurinha');

// se a hora estiver entre 6:00 até 12:00 : bom dia
//se a hora estiver entre 12:00 até 18:00 : boa tarde
//senao : boa noite

let hora=14
//condiçao da hora
//modificando a hora , modifica o resultado


if (hora>6 && hora<12){
    //codigo a ser executado
    console.log('bom dia!');
}
else if(hora>12 && hora< 18){
    //codigo a ser executado
    console.log('boa tarde!');
}
else {
    //codigo a ser executado
    console.log('boa noite!');

}