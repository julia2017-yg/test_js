function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  const re = text.split("");
  return re;
  
}

var myArray = makeid();
// Get dropdown element from DOM
var dropdown = document.getElementById("selectNumber");

// Loop through the array
for (var i = 0; i < myArray.length; ++i) {
    // Append the element to the end of Array list
    dropdown[dropdown.length] = new Option(myArray[i], myArray[i]);
}


var list = fetch("list.json")
  .then(response => response.json())
  .then(json => {    
    var listNames = document.getElementById("listNames");
    dropdown.addEventListener('change', (elemen) => {;
      var matches = false;
      listNames.innerHTML = '';
      json.map(function (element) {               
        if (elemen.target.value.toLowerCase() == element.name.charAt(0).toLowerCase()) {          
          listNames.innerHTML += element.name + '<br />';          
          matches = true;
        } 
      });
      
      if (matches === false) {
        listNames.innerHTML = 'совпадений нет';
      }       
    });     
  });

  



