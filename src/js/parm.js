const slidebar = document.querySelector('.slidebar');
const video = document.querySelector('.video');

function setState() {
  (slidebar.style.backgroundColor = 'rgb(195, 203, 206)'), true;
  (slidebar.style.flexDirection = 'row'), true;
  (video.style.alignItems = 'flex-start'), true;
}

export { setState, slidebar, video };
