import './style.css';
import { setState } from './js/parm';
import CardRender from './js/components/card-render';
import { videoList } from './js/consts';
import buttonListeners from './js/components/buttons';
import slidebarListener from './js/components/slidebarListener';

const cardContainer = document.querySelector('.video__container');

const render = new CardRender(cardContainer);

render.renderCards(videoList);

setState();

buttonListeners(render);

slidebarListener();
