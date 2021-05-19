let active = 0;

window.addEventListener('load', () => {
  const arrowLeft = document.getElementById('arrowLeft');
  const arrowRight = document.getElementById('arrowRight');
  const imageBox = document.getElementById('overflowWrapper');
  const howmany = 28;
  const images = [];
  const src = [];

  for (let i = 0; i < howmany; i++) {
    src[i] = `img/tf${i + 1}.jpg`;
  }

  refresh();

  document.getElementById('iconWrapper').style.height = document.images[0].clientHeight + 'px';

  arrowLeft.addEventListener('click', goLeft);
  arrowRight.addEventListener('click', goRight);

  function goRight() {
    if (active === howmany-1) {
      active = 0;
    } else {
      active++;
    }
    refresh();
  }

  function goLeft() {
    if (active === 0){
      active = howmany-1
    } else {
      active--;
    }

    refresh();
  }

  function refresh() {
    document.getElementById('image').src = src[active];
  }
});