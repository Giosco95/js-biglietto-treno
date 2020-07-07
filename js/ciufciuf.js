var eta = prompt('Quanti anni hai ?') ;
var km = prompt('Qunti Km fai?') ;
var prezzo = 0.21 * km ;

document.getElementById('totale').innerHTML = prezzo + '' + 'euro';

if (eta < 18) {
  document.getElementById('totale').innerHTML = prezzo * 0.8 + '' + 'euro';

} else if (eta > 64) {
  document.getElementById('totale').innerHTML = prezzo * 0.6 + '' + 'euro';
}
