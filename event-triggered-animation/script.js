var move2 = document.querySelector('#move2');
var ballanim = document.querySelector('#ballanim');
var acy = document.querySelector('a-cylinder');
var mybox = document.querySelector('#mybox');

move2.addEventListener('animationend', function(){
  console.log('end1');
  acy.emit('startcyl');
  // mybox.emit('startbox');
});
console.log(ballanim);
acy.addEventListener('startcyl', function(){
  console.log('end2');
  mybox.emit('startbox');
})


