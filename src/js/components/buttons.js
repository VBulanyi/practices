import { video } from '../parm';
import { videoList } from '../consts';

function alignButtons(elem) {
  const index = [].indexOf.call(elem.parentNode.children, elem);
  if (index === 1) {
    video.style.alignItems = 'center';
  } else if (index === 2) {
    video.style.alignItems = 'flex-end';
  } else (video.style.alignItems = 'flex-start'), true;
}

export default function buttonListeners(callBack) {
  document.addEventListener('click', e => {
    if (e.target.classList.contains('video__btn')) {
      const isActiveElement = document.querySelector('.video__btn_active');
      isActiveElement.classList.remove('video__btn_active');
      e.target.classList.add('video__btn_active');
      alignButtons(e.target);
      callBack.clearContainer();
      callBack.renderCards(videoList);
    }
  });
}
