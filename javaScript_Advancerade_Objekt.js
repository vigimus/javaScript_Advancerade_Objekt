// reference type
//Båda resultaten kommer ge false
//Arrayer har samma principer som objekt
[] === [];
[1] === [1];

//Kommer ge oss undefined
var objekt1 = {value: 10};
//Åter igen undefined
var objekt2 = objekt1;
//Åter igen undefined
var objekt3 = {value: 10};

//Kommer ge oss true
objekt1 === objekt2

//Ger oss false
objekt1 === objekt3

//Här kommer objekt1:s värde att ändras till 15
objekt1.value = 15;

//Kommer också ge oss 15
objekt2.value 

//Kommer fortsatt ge oss 10
objekt3.value 

// context vs scope
//Det här är exempel på en scope a:et lever inuti funktionen
function b() {
  let a = 4;
}

//Exempel på context
//Ger oss window objektet
console.log(this);

//Kommer ge oss true
console.log(this === window)

this.alert("hello");

//Så x.y x är context det som är till vänster om punkten
function a() {
 console.log(this);
}

window.a()

const objekt4 = {
  a: function () {
    console.log(this);
  }
}

objekt4.a()

// instantiation
//Det här är något du vill kunna göra en kopia av
class Player {
constructor(name, type) {
  this.name = name;
  this.type = type;
}
introduce() {
  console.log(`Hej jag är en ${this.name}, jag är en ${this.type}`);
}

}

/*Den här koden kommer köras igen och igen*/
//När mam använder extends så ska man också använda super

class Tiger extends Player {
  constructor(name, type) {
    super(name, type)
  }
play() {
  console.log(`Weeeeeeeeeee jag är ${this.type}`);
}

} 
const Tiger1 = new Tiger("Yoyo", "Healer");
const Tiger2 = new Tiger("Alex", "Raw");















