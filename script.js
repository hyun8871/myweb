var now = new Date();
  var dead = new Date('2010-10-06');
  if(dead>now) {
      var element = document.getElementById("pic");
      element.innerHTML = '<img src="https://raw.githubusercontent.com/hyun8871/myweb/main/aliveyoon.jpg" width="200" height="200"/>'
      element = document.getElementById("txt");
      element.innerHTML = '<h2 style="color: red">윤성빈은 살아있다</h2><p>{flg:ysb05_is_alive}</p>'
  }
