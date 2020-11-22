var Links = {
  SetColor : function(color){
    var alist = document.querySelectorAll('a');
    var i = 0;
    while(i < alist.length){
      alist[i].style.color = color;
      i = i+1;
     }
  }
}

var body = {
  SetColor : function (color){
    document.querySelector('body').style.color=color;
  },
  SetBackgroundColor : function (color){
     document.querySelector('body').style.backgroundColor=color;
  }
}

function blackwhiteswitch(mine){
var target = document.querySelector('body')
if(mine.value === 'BLACK'){
body.SetBackgroundColor('black');
body.SetColor('white');
mine.value = 'WHITE';

  Links.SetColor('powderblue');

 } else {
  body.SetBackgroundColor('white');
  body.SetColor('black');
  mine.value = 'BLACK';

  Links.SetColor('blue');

  }
}
