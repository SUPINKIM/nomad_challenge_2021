import './Greeting.css';

function Greeting({
  element,
  initialState,
  onHandleSubmit,
  onHandleClick,
  onClickLogout,
}) {
  this.state = initialState;
  this.parent = document.createElement('section');
  this.greet = document.createElement('h4');
  this.target = document.createElement('div');
  this.target2 = document.createElement('div');

  this.target.classList.add('greeting');
  this.target.classList.add('greeting-form');
  this.target2.className = 'greeting';

  this.parent.className = 'greeting-box';

  this.handleSubmit = onHandleSubmit;
  this.handleClick = onHandleClick;
  this.clickLogout = onClickLogout;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    const { username, todos, isCurrentUser } = this.state;
    this.greet.innerHTML =
      '만나서 반가워요! 아래 기존 계정이 있다면 선택해주세요.<br>새로운 계정을 만들고 싶다면 새로운 계정을 입력해주세요.';
    this.target.innerHTML = `<form class="js-name-form"><input type='text' /><button type='submit'>Log in</button></form>`;
    this.target.querySelector('form').addEventListener(
      'submit',
      (e) => {
        e.preventDefault();
        this.handleSubmit(this.target.querySelector('input').value);
      },
      false
    );

    if (username.length && !isCurrentUser) {
      this.target2.innerHTML = `<div class='greeting list'> ⏬ 커서를 올려 놓으면 계정 전체 목록을 보실 수 있습니다.✨</div><ul>${username
        .map((name) => `<li>${name}</li>`)
        .join('')}</ul>`;
    } else if (!username.length) {
      this.target2.innerHTML =
        "<div class='greeting list'> 🙅 아직 등록된 계정이 없습니다. 새로 등록해주세요.</div>";
    }

    if (this.target2.querySelector('ul')) {
      this.target2
        .querySelector('ul')
        .addEventListener('click', this.handleClick, false);
    }

    if (isCurrentUser) {
      this.greet.innerText = `안녕하세요. ${isCurrentUser}님! 오늘의 todo list를 작성해보세요.`;
      this.greet.innerHTML += '<button class="logout">⏪ Log out</button>';
      this.greet
        .querySelector('.logout')
        .addEventListener('click', this.clickLogout, false);
      if (this.parent.children.item(1) === this.target) {
        this.parent.removeChild(this.target);
        this.parent.removeChild(this.target2);
      }
    } else {
      this.parent.appendChild(this.greet);
      this.parent.appendChild(this.target);
      this.parent.appendChild(this.target2);
      element.appendChild(this.parent);
    }
  };

  this.render();
}

export default Greeting;
