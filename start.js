var x =90
var y= 89.23
var s= "Foo bar"
var t = true
var arr = [1, 2, 3, 4, 5]
var j = {
    name: "Foo",
    last_name: "Bar",
    email: "foo@bar.com"
}
console.log(x, y, s, t, arr, j)

var animal ="Kitty"
if(animal==="Kitty"){
    console.log("So cute!!")
}else{
    console.log("Still nice!")
}

var animal2 = (animal === "Kitty") ? "So cute" : "Still nice"
console.log (animal2)

var i = 0
while (i < 10){
    console.log(i)
    i++
}

for(var i = 0; i < 10; i++){
    console.log(i);
}

var array = [1, 2, 3, 4, 5]
for(var i = 0; i < Array.length; i++){
    console.log(array[i]);
}

for(var i of array){
    console.log(1)
}

var j = {
    name: "Foo",
    last_name: "Bar",
    email: "foo@bar.com"
}
for (var key in j){
    console.log(key, j[key])
}