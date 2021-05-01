import './Background.css';
import img1 from './images/1.JPG';
import img2 from './images/2.JPG';
import img3 from './images/3.JPG';
import img4 from './images/4.JPG';
import img5 from './images/5.JPG';

function Background({ element }) {
  const IMGS = [img1, img2, img3, img4, img5];
  this.target = document.createElement('div');
  this.target.className = 'background';
  element.appendChild(this.target);

  this.render = () => {
    let random = Math.floor(Math.random() * 5);
    this.target.style.backgroundImage = `url(${IMGS[random]})`;
  };

  this.render();
}

export default Background;
