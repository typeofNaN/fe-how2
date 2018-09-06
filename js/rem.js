window.onload = function() {
  getRem(640,100)
};

window.onresize = function() {
  getRem(640,100)
};

function getRem(pwidth,prem) {
  var html = document.getElementsByTagName("html")[0];
  var oWidth = document.body.clientWidth || document.documentElement.clientWidth;
  if(oWidth < 767) {
    html.style.fontSize = oWidth/pwidth*prem + "px";
  }
  else {
    html.style.fontSize = 12 + 'px';
  }
}