// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  //number condition
  if(typeof obj === 'number'){
    return '' + obj;
  }
  if(obj === null){
    return 'null';
  }
  if(typeof obj === 'boolean'){
    if(obj){
      return 'true'
    }else{
      return 'false'
    }
  }
  if(typeof obj === 'string'){
    return '"' + obj + '"';
  }
  if(Array.isArray(obj)){
    var array = [];
    for (var i = 0; i < obj.length; i++){//need recursion here

      array.push(stringifyJSON(obj[i]));
    }
    var stringOut = array.join(',');
    return '['+stringOut+']';
  }
  if(typeof obj === 'object'){
    var array = [];
    for (var key in obj){
      if(obj[key] === undefined || typeof obj[key] === 'function'){
        continue;
      }
      array.push(stringifyJSON(key)+':' + stringifyJSON(obj[key]));

    }
    var objContent = array.join(',');
    return '{' + objContent + '}';
  }

};
