var agora = new Date()
var mes = agora.getMonth()
var mes = 10
switch(mes) {
    case 0:
    case 1:
    case 2:
        console.log('Verão');
    break;
    case 3:
    case 4:
    case 5:
        console.log('Outono');
    break;
    case 6:
    case 7:
    case 8:
        console.log('Inverno');
    break;
    case 9:
    case 10:
    case 11:
        console.log('Primavera');
    break;
    default:
        console.log('[ERRO] MES INVALIDO [ERRO]');
    break
}