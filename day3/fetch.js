fetch('http://api.icndb.com/jokes/random').then(res=>res.json()).then(res=>console.log(res));