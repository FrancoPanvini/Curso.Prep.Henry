var compare = function (a, b) {
    if (a.name.length > b.name.length) {
      return 1; 
    //   En sort un número positivo intercambia
    }
    if (a.name.length < b.name.length) {
      return -1;
    //   En sort un número negativo NO intercambia
    }
    return 0;
}

var items =[
    { name: 'Magnetic', value: 13 },
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'Zeros', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 }
]

items.sort(compare);
