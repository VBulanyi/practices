import { slidebar } from '../parm';

const round = document.querySelector('.slidebar__round');
const roundCheck = document.querySelector('.slidebar__round-check');

export function subscribe(e) {
  const color = slidebar.style.backgroundColor;
  const flexDirection = slidebar.style.flexDirection;
  if (color === 'rgb(195, 203, 206)' && flexDirection === 'row') {
    (slidebar.style.backgroundColor = 'rgb(70, 212, 68)'),
      (slidebar.style.flexDirection = 'row-reverse'),
      (roundCheck.src = './images/checkGreen.png');
  } else
    (slidebar.style.flexDirection = 'row'),
      (slidebar.style.backgroundColor = 'rgb(195, 203, 206)'),
      (roundCheck.src = './images/check.png');
}

export { round };
