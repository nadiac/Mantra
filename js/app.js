var text = [
  '"Entra Tucidide con passo calmo, 80 anni, folti capelli ricci e barba bianca, vestito di una tunica porpora."',
  '"Daniel Defoe (62 anni, una parrucca unta e traballante sulla testa e un blocco di fogli scritti in mano) entra trafelato ed ansimante."',
  "<span class='author'>DEFOE</span>",
  "<span class='text'>Ho davvero una grande idea per il mio prossimo romanzo. Persone che soffrono, malattia, morte e disperazione. Il pubblico lo amerà!</span>",
  "<span class='author'>TUCIDIDE</span>",
  "<span class='text'>Buongiorno, amico Defoe. Che nuove mi porta?</span>",
  "<span class='author'>DEFOE</span>",
  "<span class='text'>Oh, caro Tucidide, le porto una di quelle notizie che non ha pari nel render lieto uno scrittore!</span>",
  "<span class='author'>TUCIDIDE</span>",
  "<span class='text'>Sento odor di buone idee, amico Defoe</span>",
  "<span class='author'>DEFOE</span>",
  "<span class='text'>Ottime idee! Scriverò di un tema nuovo, inedito!</span>",
  "<span class='author'>TUCIDIDE</span>",
  "<span class='text'>E di cosa si tratterà mai? Qualche nuova teoria filosofica forse?</span>",
  "<span class='author'>DEFOE</span>",
  "<span class='text'>No! Tenetevi forte caro Tucidide...parlerò della peste!</span>",
  "<span class='author'>TUCIDIDE</span>",
  "<span class='text'>Un tema nuovo questo? Io ne ho scritto già io nel V secolo avanti Cristo, e diciamo che già ai tempi non era questa grande novità...</span>",
  '"Vedono passare il medico della peste"',
  "<span class='author'>TUCIDIDE</span>",
  "<span class='text'>Oh che creatura è mai questa?</span>",
  "<span class='author'>DEFOE</span>",
  "<span class='text'>Ma è il medico... della peste!</span>",
  "<span class='author'>TUCIDIDE</span>",
  "<span class='text'>Ci sarà forse qualche caso di peste in giro? È per questo che volete scrivere di peste?</span>",
  "<span class='author'>DEFOE</span>",
  "<span class='text'>Avevo sentito di qualche caso a Marsiglia, ma non pensavo certo sarebbe arrivata qui! Oh la peste...si scaglieranno su di noi dardi infuocati, incendi bruceranno le nostre città, e i quattro cavalieri dell’Apocalisse giungeranno infine a porre sollievo a tutte le nostre sofferenze!</span>",
  "<span class='author'>TUCIDIDE</span>",
  "<span class='text'>Defoe, ma voi l’avete mai vista, davvero, la peste?</span>",
  "<span class='author'>DEFOE</span>",
  "<span class='text'>Ehm.. in realtà no..ero un bambino, ecco..</span>",
  "<span class='author'>TUCIDIDE</span>",
  "<span class='text'>Beh allora è proprio una bella occasione per voi, amico Defoe. Non si può scriver bene di qualcosa se non la si conosce. Potrà visitare i malati, potrà vedere i lazzaretti...</span>",
  "<span class='author'>DEFOE</span>",
  "<span class='text'>(incerto) Io non ne ho di certo bisogno, la mia immaginazione saprà creare di meglio.</span>",
  "<span class='author'>TUCIDIDE</span>",
  "<span class='text'>Ma come, uno scrittore che ha paura\
  di informarsi su ciò di cui vuole\
  scrivere?</span>",
  "<span class='author'>DEFOE</span>",
  "<span class='text'>No, ma che paura, è solo..</span>",
  "<span class='author'>TUCIDIDE</span>",
  "<span class='text'>(ridendo tra sé e sé)\
  La sacralità della scrittura prima\
  di tutto, per un grande scrittore\
  come lei, giusto? Si farebbe di\
  tutto per una prosa chiara ed\
  onesta. E poi di cosa può aver\
  paura lei, che è stato pure in\
  prigione.</span>",
  '"Defoe trasale"',
  "<span class='author'>DEFOE</span>",
  "<span class='text'>(impaurito) Ma che peste, ehm, scherzavo! Un\
  argomento di altri tempi, ci vuole\
  qualcosa di più moderno, per i\
  londinesi. Come ad esempio, ecco...</span>",
  "'Entra il medico della peste'",
  "<span class='author'>DEFOE</span>",
  "<span class='text'>Si allontani da qui, se ne vada o\
  contagerà anche noi! Oh no qui è\
  giunto, ogni speranza è persa.</span>",
  "<span class='author'>MEDICO DELLA PESTE</span>",
  "<span class='text'>Oh, non si preoccupi signor Defoe,\
  questa maschera imbevuta di\
  unguenti e la mia tunica sono fatti\
  apposta per evitare ogni contagio.</span>",
  "<span class='author'>TUCIDIDE</span>",
  "<span class='text'>Io non so come fa a credere che quello\
  stano costume possa aiutarla. Le\
  assicuro signor medico che non c’è\
  arte umana che possa inibire la\
  potenza della morbo. Non lo può la\
  medicina e non lo può nemmeno la\
  scrittura.</span>",
  "<span class='title'>COME NARRARE IL MORBO</span>"
];

var video = document.createElement("video");
var src = document.createElement("source");
src.src = "src/video.mp4";
video.appendChild(src);
video.autoplay = false;
video.autobuffer = true;

var tuc = document.createElement("img");
tuc.src = "src/tuc.jpg";

var defoe = document.createElement("img");
defoe.src = "src/dd.jpg";

var pdoc = document.createElement("img");
pdoc.src = "src/pdoc.jpg";

window.onload = function () {
  var dialog = new DialogWriter();  
  var sync = new Synchronizer();
  console.log(text.length);
  
  audio = document.getElementById("audio");
  sync.add({funct : function(){dialog.write(text[51]); }, timer : 0});
  sync.add({funct : function(){audio.play();}, timer : 1});
  sync.add({funct : function(){
    document.getElementById("down").appendChild(video);
    video.play();
    video.onended = function(){document.getElementById("down").removeChild(video)};
  }, timer : 4});
  
  sync.add({funct : function(){dialog.write(text[0])}, timer : 18});//0:24
  sync.add({funct : function(){
    document.getElementById("down").appendChild(tuc);
    setTimeout(function(){document.getElementById("down").removeChild(tuc);},8000);
  }, timer : 0});
  
  sync.add({funct : function(){dialog.write(text[1])}, timer : 14});//0:39
  sync.add({funct : function(){
    document.getElementById("down").appendChild(defoe);
    setTimeout(function(){document.getElementById("down").removeChild(defoe);},9000);
  }, timer : 0});
  
  sync.add({funct : function(){dialog.write(text[2])}, timer : 16});//1:02
  sync.add({funct : function(){dialog.write(text[3])}, timer : 0});//1:02
  sync.add({funct : function(){dialog.write(text[4])}, timer : 11});//1:13
  sync.add({funct : function(){dialog.write(text[5])}, timer : 0});//1:13
  sync.add({funct : function(){dialog.write(text[6])}, timer : 3});//1:16
  sync.add({funct : function(){dialog.write(text[7])}, timer : 0});//1:16
  sync.add({funct : function(){dialog.write(text[8])}, timer : 7});//1:23
  sync.add({funct : function(){dialog.write(text[9])}, timer : 0});//1:23
  sync.add({funct : function(){dialog.write(text[10])}, timer : 3});//1.26
  sync.add({funct : function(){dialog.write(text[11])}, timer : 0});//1.26
  sync.add({funct : function(){dialog.write(text[12])}, timer : 5});//1.31
  sync.add({funct : function(){dialog.write(text[13])}, timer : 0});//1.31
  sync.add({funct : function(){dialog.write(text[14])}, timer : 5});//1.36
  sync.add({funct : function(){dialog.write(text[15])}, timer : 0});//1.36
  sync.add({funct : function(){dialog.write(text[16])}, timer : 13});//1.49
  sync.add({funct : function(){dialog.write(text[17])}, timer : 0});//1.49
  sync.add({funct : function(){dialog.write(text[18])}, timer : 9});//1.58
  
  sync.add({funct : function(){
    document.getElementById("down").appendChild(pdoc);
    setTimeout(function(){document.getElementById("down").removeChild(pdoc);},5000);
  }, timer : 0});
  
  sync.add({funct : function(){dialog.write(text[19])}, timer : 2});//2.00
  sync.add({funct : function(){dialog.write(text[20])}, timer : 0});//2.00
  sync.add({funct : function(){dialog.write(text[21])}, timer : 5});//2.05
  sync.add({funct : function(){dialog.write(text[22])}, timer : 0});//2.05
  sync.add({funct : function(){dialog.write(text[23])}, timer : 4});//2.09
  sync.add({funct : function(){dialog.write(text[24])}, timer : 0});//2.09
  sync.add({funct : function(){dialog.write(text[25])}, timer : 6});//2.15
  sync.add({funct : function(){dialog.write(text[26])}, timer : 0});//2.15
  sync.add({funct : function(){dialog.write(text[27])}, timer : 18});//2.33
  sync.add({funct : function(){dialog.write(text[28])}, timer : 0});//2.33
  sync.add({funct : function(){dialog.write(text[29])}, timer : 6});//2.39
  sync.add({funct : function(){dialog.write(text[30])}, timer : 0});//2.39
  sync.add({funct : function(){dialog.write(text[31])}, timer : 8});//2.47
  sync.add({funct : function(){dialog.write(text[32])}, timer : 0});//2.47
  sync.add({funct : function(){dialog.write(text[33])}, timer : 13});//3.00
  sync.add({funct : function(){dialog.write(text[34])}, timer : 0});//3.00
  sync.add({funct : function(){dialog.write(text[35])}, timer : 6});//3.06
  sync.add({funct : function(){dialog.write(text[36])}, timer : 0});//3.06
  sync.add({funct : function(){dialog.write(text[37])}, timer : 5});//3.11
  sync.add({funct : function(){dialog.write(text[38])}, timer : 0});//3.11
  sync.add({funct : function(){dialog.write(text[49])}, timer : 4});//3.15
  sync.add({funct : function(){dialog.write(text[40])}, timer : 0});//3.15
  sync.add({funct : function(){dialog.write(text[41])}, timer : 13});//3.28
  sync.add({funct : function(){dialog.write(text[42])}, timer : 2});//3.30
  sync.add({funct : function(){dialog.write(text[43])}, timer : 0});//3.30
  sync.add({funct : function(){dialog.write(text[44])}, timer : 10});//3.40
  sync.add({funct : function(){dialog.write(text[45])}, timer : 2});//3.42
  sync.add({funct : function(){dialog.write(text[46])}, timer : 0});//3.42
  sync.add({funct : function(){dialog.write(text[47])}, timer : 8});//3.50
  sync.add({funct : function(){dialog.write(text[48])}, timer : 0});//3.50
  sync.add({funct : function(){dialog.write(text[49])}, timer : 10});//4.00
  sync.add({funct : function(){dialog.write(text[50])}, timer : 0});//4.00
  
  var start = document.getElementById("start");
  start.addEventListener("click",function(){
    document.body.style = "cursor : none";
    start.classList.add("fade");
     setTimeout(function(){
      sync.play();
      document.getElementById("down").removeChild(start);
     },1000);
  });

}

function Synchronizer(){
  
  var scenePool = new Array();
  
  this.add = function(scene){
    scenePool.push(scene);
  }
  
  function play(){
    if(scenePool.length > 0){
      var scene = scenePool.shift();
      setTimeout(function(){
        scene.funct();
        play();
      },scene.timer*1000);
    }else{
      return;
    }
  }
  
  this.play = play;
  
  return this;
}
