export default class Card {
  constructor(image, text, time, isLocked) {
    this.image = image;
    this.text = text;
    this.time = time;
    this.isLocked = isLocked;
  }
  renderUnlocked() {
    return `<div class="video__card">
                <img src="${this.image}" alt="" class="video__card-img">
                <p class="video__card-text">${this.text}</p>
                <div class="video__card-time">
                    <span>${this.time}</span>
                </div>
            </div>`;
  }
  renderLocked() {
    return `<div class="video__card video__card_cover">
                <img src="${this.image}" alt="" class="video__card-img">
                <p class="video__card-text">${this.text}</p>
                <div class="video__card-time">
                    <img src="./images/lock.png" alt="" class="video__card-img">
                    <span class="video__card-text_inactive">${this.time}</span>
                </div>
            </div>`;
  }
}
