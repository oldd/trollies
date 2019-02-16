// "http://www.example.com/t.html?a=1&b=3&c=m2-m3-m4-m5"; -> window.location.href
var url_string = window.location.href
var url = new URL(url_string);
// console.log(url)
var c = url.searchParams.get("c");
console.log('c: ', c)

if (c) {
  var box = document.createElement('a-box');
  box.setAttribute('position', '0 1.25 -7')
  console.dir(box)

  var scene = document.querySelector('a-scene');
  console.dir(scene)
  scene.appendChild(box);
}