// Funktion, um eine Zahl im Währungsformat darzustellen
function formatCurrency(number) {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(number);
  }
  
  // Funktion, um ein Array von Schlüssel-Wert-Paaren in ein Objekt zu transformieren
  function transformArrayToObject(array) {
    return array.reduce((acc, [key, value]) => {
      acc[key] = value;
      return acc;
    }, {});
  }
  
  // Funktion, um den ersten Buchstaben eines Strings zu kapitalisieren
  function capitalizeFirstLetter(string) {
    if (!string) return ''; // Handling für leere Strings
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  // Funktion, um eine Zeichenkette in CamelCase umzuwandeln
  function convertToCamelCase(string) {
    return string
      .split(' ') // String in Wörter aufteilen
      .map((word, index) => {
        if (index === 0) {
          return word.toLowerCase(); // Das erste Wort bleibt klein
        }
        return capitalizeFirstLetter(word.toLowerCase()); // Die restlichen Wörter großschreiben
      })
      .join(''); // Wörter wieder zusammenfügen
  }
  
  // Exportieren der Funktionen für die Verwendung in der Testdatei
  module.exports = {
    formatCurrency,
    transformArrayToObject,
    capitalizeFirstLetter,
    convertToCamelCase,
  };
  