var json = [{
    "person" : "John", 
    "message"   : "hi, how are you?",
    "mail": "john@gmail.com"
},
{
    "person" : "George", 
    "message"   : "yes, I'm fine.",
    "mail": "george@gmail.com"
}];

//for loop
for(var i = 0; i < json.length; i++) {
    var obj = json[i];

    console.log(obj.person);
    console.log(obj.message);
    console.log(obj.mail);

}
//for Each
json.forEach(function(obj) { console.log(obj.message); });

//for In
for (var key in json) {
if (json.hasOwnProperty(key)) {
  console.log(json[key].person);
  //console.log(json[key].message);

}
}
//for Of
let text = "";
for (let x of json[key].person) {
 text += x; 
}
 console.log(text);