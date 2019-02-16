// "http://www.example.com/t.html?a=1&b=3&c=m2-m3-m4-m5"; -> window.location.href
var url_string = window.location.href
var url = new URL(url_string);

var c = url.searchParams.get("c");
if (c) {
  var box = document.createElement('a-box');
  box.setAttribute('position', '0 1.25 -7')
  console.dir(box)

  var scene = document.querySelector('a-scene');
  console.dir(scene)
  scene.appendChild(box);
}


var camera = document.getElementById('first-person');

var cameramation = document.createElement('a-animation');
// cameramation.setAttribute('id', 'cameramation');



var left = url.searchParams.get('left');
if (left) {

  cameramation.addEventListener('junctioning', function(e) {
    console.log('cameramation junctioning');
    var x = camera.object3D.position.x;
    var y = camera.object3D.position.y;
    var z = camera.object3D.position.z;
    // AFRAME.utils.entity.setComponentProperty(cameramation, 'from', x+' '+y+' '+z);
    // AFRAME.utils.entity.setComponentProperty(cameramation, 'to', '-8.5 2 -34');
    // cameramation.setAttribute('easeIn', '');
    cameramation.setAttribute('from', x+' '+y+' '+z);
    cameramation.setAttribute('to', '-8.5 2 -34')
  })

  var juction = document.getElementById('junction');
  junction.addEventListener('collide', function (e) {
    if (e.detail.body.el.id === 'first-person') {
      // console.log('dd')
      cameramation.dispatchEvent(new Event('junctioning'));
    }
  });

};


var move = url.searchParams.get('move');
var speed = url.searchParams.get('speed') * 1000;
if (move) {
  var x = camera.object3D.position.x;
  var y = camera.object3D.position.y;
  var z = camera.object3D.position.z;
  cameramation.setAttribute('dur', speed);
  cameramation.setAttribute('attribute', 'position');
  cameramation.setAttribute('from', x+' '+y+' '+z);
  cameramation.setAttribute('to', '0 2 -36');
  // cameramation.setAttribute('event-set__junctioning', 'to: -8.5 2 -34');
  // cameramation.setAttribute('easeIn', 'easeInExpo');

  camera.appendChild(cameramation);
};





