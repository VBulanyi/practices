import Card from './card';

export default class CardRender {
  constructor(container) {
    this.container = container;
  }

  renderCards(arr) {
    let html = '';
    for (let i = 0; i < arr.length; i += 1) {
      if (!arr[i].isLocked) {
        const card = new Card(arr[i].image, arr[i].text, arr[i].time);
        html += card.renderUnlocked();
      } else {
        const card = new Card(arr[i].image, arr[i].text, arr[i].time);
        html += card.renderLocked();
      }
    }
    return this.container.insertAdjacentHTML('beforeend', html);
  }

  clearContainer() {
    while (this.container.firstChild) {
      this.container.removeChild(this.container.firstChild);
    }
  }
}
