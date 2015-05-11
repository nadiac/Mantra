/* Abstracts the image of a writer that's writing a new dialog */
function DialogWriter(){

  var dialog = new TheaterJS();
    dialog.describe("Mod",1,"#mod");
  
  /* register the characters of your dialog */
  
  var state = false; 
  var storage = new Array();
  
  dialog.on("say:end, erase:end", function(){
    state = false;
    if(storage.length>0){
      var elem = storage.shift();
      writer(elem);
    }
  });
  
  dialog.on("say:start", function(){
    state = true;
  });
  
  this.write = function (phrase) {
    storage.push(phrase);
    //console.log(storage.length);
    if(storage.length == 1){
      var elem = storage.shift();
      writer(elem);
    }
  }
  
  function writer(phrase){
    dialog.write({name : "actor", args : ["Mod"]})
          .write({name : "say", args : [phrase]})
          .write({name : "call", args : [function(){
            var mem = document.getElementById("memory");
            dialog.on("say:end", function(){
              document.body.scrollTop = document.body.scrollHeight;
            });
          }]
    });
  };  
  
  return this;
}

