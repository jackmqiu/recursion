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

};
