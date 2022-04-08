const balls1 = document.getElementsByClassName('ball1');

document.onmousemove = (event) => {
  const x = (event.clientX * 100) / window.innerWidth + '%';
  const y = (event.clientY * 100) / window.innerHeight + '%';
for (let i = 0; i<2; i++) 
{ balls1[i].style.left = x;
  balls1[i].style.top = y;
  balls1[i].transform = 'translate(-' + x + ',-' + y + ')';}
};
const balls2 = document.getElementsByClassName('ball2');

document.onmousemove = (event) => {
  const x = (event.clientX * 100) / window.innerWidth + '%';
  const y = (event.clientY * 100) / window.innerHeight + '%';
for (let i = 0; i<2; i++) 
{ balls2[i].style.left = x;
  balls2[i].style.top = y;
  balls2[i].transform = 'translate(-' + x + ',-' + y + ')';}
};
