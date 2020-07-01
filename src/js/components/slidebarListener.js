import { subscribe, round } from './slidebar';

export default function slidebarListener() {
  let touchstartX = 0;
  let touchendX = 0;

  function handleGesure() {
    if (touchendX < touchstartX - 100) subscribe();
    if (touchendX > touchstartX + 100) subscribe();
  }

  round.addEventListener('touchstart', e => {
    touchstartX = e.changedTouches[0].screenX;
  });

  round.addEventListener('touchend', e => {
    touchendX = e.changedTouches[0].screenX;
    handleGesure();
  });

  round.addEventListener('click', () => {
    subscribe();
  });
}
