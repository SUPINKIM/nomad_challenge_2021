import './Clock.css';

function Clock({ element }) {
  this.target = document.createElement('div');
  element.appendChild(this.target);
  this.days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  this.target.className = 'clock';

  this.render = () => {
    this.time = new Date();
    this.target.innerHTML = `${
      this.time.getHours() < 10
        ? '0' + this.time.getHours()
        : this.time.getHours()
    }:${
      this.time.getMinutes() < 10
        ? '0' + this.time.getMinutes()
        : this.time.getMinutes()
    }:${
      this.time.getSeconds() < 10
        ? '0' + this.time.getSeconds()
        : this.time.getSeconds()
    }<div class='day'>${this.time.getFullYear()} ${
      this.time.getMonth() + 1 < 10
        ? '0' + (this.time.getMonth() + 1)
        : this.time.getMonth() + 1
    } ${
      this.time.getDate() < 10 ? '0' + this.time.getDate() : this.time.getDate()
    } ${this.days[this.time.getDay()]}</div>`;
  };

  this.render();
  setInterval(() => this.render(), 1000);
}

export default Clock;
