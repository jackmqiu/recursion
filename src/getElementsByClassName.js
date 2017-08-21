// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  var elements = [];// your code here

  var searchNodes  = function(node){
    var classes = node.className.split(' ');//creates array of classes in this particular node that is navigated to in this
    //specific call of getElementsByClassName
    if(node.className === className){
      elements.push(node);//when classNames match, add node to output array
    }

    for(var i = 0; i < node.children.length; i++){
      searchNodes(node.children[i]);
    }
  };//function that you can have recur

  searchNodes(document.body);

  return elements;
};
