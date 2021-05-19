window.addEventListener('load', () => {
  const arrowLeft = document.getElementById('arrowLeft');
  const arrowRight = document.getElementById('arrowRight');
  const imageBox = document.getElementById('overflowWrapper');
  const howmany = 4;
  const images = [];
  const src = [];

  for (let i = 0; i < howmany; i++) {
    src[i] = `img/beer (${i + 1}).jpg`;
  }

  for (let i = 0; i < src.length; i++) {
    images[i] = document.createElement('img');
    images[i].src = src[i];
    images[i].alt = i + 1 + '. Bild';

    imageBox.appendChild(images[i]);
    images[i].style.display = 'none';
  }

  images[0].style.display = 'block';
  images[0].classList.add('imgAnimation');

  document.getElementById('iconWrapper').style.height = document.images[0].clientHeight + 'px';

  arrowLeft.addEventListener('click', goLeft);
  arrowRight.addEventListener('click', goRight);

  function goRight() {
    let rack = images[images.length - 1].src;
    images[0].style.opacity = 0;

    setTimeout(() => {
      for (let i = images.length - 1; i > 0; i--) {
        images[i].src = images[i - 1].src;
      }

      images[0].classList.remove('imgAnimation');
      images[0].src = rack;
      images[0].style.opacity = 1;

      setTimeout(() => {
        images[0].classList.add('imgAnimation');
      }, 100);
    }, 0);

    goRightInterval = setInterval(() => {
    }, 9500);
  }

  function goLeft() {
    clearInterval(goRightInterval);
    let rack = images[0].src;
    images[0].style.opacity = 0;

    setTimeout(() => {
      for (let i = 0; i < images.length - 1; i++) {
        images[i].src = images[i + 1].src;
      }

      images[images.length - 1].src = rack;
      images[0].style.opacity = 1;
    }, 250);

    goRightInterval = setInterval(() => {
      goRight();
    }, 9500);
  }
});