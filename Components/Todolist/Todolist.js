import { getUserInformation, setUserInformation } from '../../LocalAPI';
import './Todolist.css';

function Todolist({ element, initialState }) {
  this.state = initialState;

  const todoView = new TodolistView({
    element: element,
    initialState: {
      ...this.state,
    },
    onHandleSubmit: (e, input) => {
      e.preventDefault();
      if (input.value) {
        let { pending, finished } = this.state.todos;
        !pending ? (pending = []) : pending;
        !finished ? (finished = []) : finished;
        pending.push(input.value);
        this.setState({
          ...this.state,
          todos: { pending: pending, finished: finished },
        });

        setUserInformation.setUserTodolist(
          this.state.isCurrentUser,
          this.state.todos
        );
        input.value = '';
      }
    },
    onHandlePendingClick: (e) => {
      const todobox = document.querySelector('.pending').querySelector('ul');
      const delNode = e.target.parentNode;
      todobox.removeChild(delNode);
      let { pending: newTodo, finished: newFinish } = this.state.todos;
      newTodo.splice(delNode.id, 1);
      if (e.target.className === 'finish-btn') {
        newFinish.push(delNode.innerText.slice(0, -3).trim());
      }
      setUserInformation.setUserTodolist(
        this.state.isCurrentUser,
        this.state.todos
      );
      this.setState({
        ...this.state,
        todos: { pending: newTodo, finished: newFinish },
      });
    },
    onHandleFinishedClick: (e) => {
      const todobox = document.querySelector('.finished').querySelector('ul');
      const delNode = e.target.parentNode;
      todobox.removeChild(delNode);
      let { pending: newPending, finished: newFinish } = this.state.todos;
      newFinish.splice(delNode.id, 1);
      if (e.target.className === 'pending-btn') {
        newPending.push(delNode.innerText.slice(0, -4).trim());
      }
      setUserInformation.setUserTodolist(
        this.state.isCurrentUser,
        this.state.todos
      );
      this.setState({
        ...this.state,
        todos: { pending: newPending, finished: newFinish },
      });
    },
  });

  this.setState = (nextState) => {
    this.state = nextState;

    todoView.setState({
      ...this.state,
    });
  };
}

function TodolistView({
  element,
  initialState,
  onHandleSubmit,
  onHandlePendingClick,
  onHandleFinishedClick,
}) {
  this.state = initialState;
  this.handleSubmit = onHandleSubmit;
  this.handlePendingClick = onHandlePendingClick;
  this.handleFinishedClick = onHandleFinishedClick;

  this.todobox = document.createElement('div');
  this.todobox.classList.add('todolist');

  this.form = document.createElement('form');
  this.form.innerHTML =
    '<input type="text" placeholder="📚 할 일을 입력하세요." /><button type="submit">추가하기</button>';
  const input = this.form.querySelector('input');
  this.form.addEventListener(
    'submit',
    (e) => this.handleSubmit(e, input),
    false
  );

  this.pending = document.createElement('div');
  this.pending.classList.add('pending');

  this.finished = document.createElement('div');
  this.finished.classList.add('finished');

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    if (this.state.isCurrentUser) {
      this.todobox.appendChild(this.form);
      this.todobox.appendChild(this.pending);
      this.todobox.appendChild(this.finished);

      element.appendChild(this.todobox);
    } else {
      if (element.querySelector('.todolist')) {
        element.removeChild(this.todobox);
      }
    }

    const { pending, finished } = this.state.todos;
    if (pending.length) {
      this.pending.innerHTML = `<h4>🏃 해야 하는 일</h4><ul>${pending
        .map(
          (x, idx) =>
            `<li id=${idx}>${x} <button class="delete-btn">❌</button> <button class="finish-btn">✅</button></li>`
        )
        .join('')}</ul>`;
      this.pending
        .querySelectorAll('button')
        .forEach((btn) =>
          btn.addEventListener('click', this.handlePendingClick, false)
        );
    } else {
      this.pending.innerText = '';
    }
    if (finished.length) {
      this.finished.innerHTML = `<h4>🏆 완료한 일</h4><ul>${finished
        .map(
          (x, idx) =>
            `<li id=${idx}>${x} <button class="delete-btn">❌</button> <button class="pending-btn">🔙</button></li>`
        )
        .join('')}</ul>`;
      this.finished
        .querySelectorAll('button')
        .forEach((btn) =>
          btn.addEventListener('click', this.handleFinishedClick, false)
        );
    } else {
      this.finished.innerText = '';
    }
  };

  this.render();
}

export default Todolist;
