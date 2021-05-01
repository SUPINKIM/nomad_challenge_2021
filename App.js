import Background from './Components/Background/Background';
import Clock from './Components/Clock/Clock';
import Greeting from './Components/Greeting/Greeting';
import Location from './Components/Location/Location';
import Todolist from './Components/Todolist/Todolist';

import {
  getUserInformation,
  locationInformation,
  removeUserInformation,
  setUserInformation,
} from './LocalAPI';

function App(element) {
  this.state = {
    username: [],
    todos: { pending: [], finished: [] },
    isCurrentUser: null,
    isCurrentLocation: null,
  };

  const clock = new Clock({ element: element });
  const background = new Background({ element: element });
  const location = new Location({
    element: element,
    initialState: {
      isCurrentLocation: locationInformation.getLocation(),
    },
    onHandleGeoSuccess: (e) => {
      const {
        coords: { latitude },
      } = e;
      const {
        coords: { longitude },
      } = e;

      locationInformation.setLocation({ latitude, longitude });
      this.setState({
        ...this.state,
        isCurrentLocation: { latitude, longitude },
      });
    },
    onHandleGeoError: (e) => {
      console.log(e);
    },
  });

  const greeting = new Greeting({
    element: element,
    initialState: {
      username: this.state.username,
      todos: this.state.todos,
      isCurrentUser: this.state.isCurrentUser,
    },
    onHandleSubmit: (value) => {
      if (!this.state.username.includes(value) && value) {
        this.setState({
          todos: this.state.todos,
          username: [...this.state.username, value],
          isCurrentUser: value,
        });
        setUserInformation.setUserList(this.state.username);
        setUserInformation.setCurrentUser(this.state.isCurrentUser);
      } else if (this.state.username.includes(value)) {
        alert('존재하는 계정입니다. 다른 계정을 사용해주세요.');
      } else if (!value) {
        alert('계정은 최소 한 글자 이상이어야 합니다.');
      }
    },
    onHandleClick: (event) => {
      const value = event.target.innerText;
      if (value && event.target.tagName === 'LI') {
        this.setState({
          ...this.state,
          isCurrentUser: value,
        });
        setUserInformation.setCurrentUser(this.state.isCurrentUser);
      }
    },
    onClickLogout: () => {
      this.setState({
        ...this.state,
        isCurrentUser: false,
      });
      removeUserInformation.removeCurrentUser();
    },
  });

  const todolist = new Todolist({
    element: element,
    initialState: {
      ...this.state,
    },
  });

  this.setState = (nextState) => {
    this.state = nextState;
    let todos = getUserInformation.getUserTodolist(this.state.isCurrentUser);
    !todos ? (todos = { pending: [], finished: [] }) : todos;
    greeting.setState({
      ...this.state,
      todos: todos,
    });
    location.setState({
      isCurrentLocation: this.state.isCurrentLocation,
    });
    todolist.setState({
      ...this.state,
      todos: todos,
    });
  };

  const init = () => {
    let userlist = getUserInformation.getUserList();
    let currentUser = getUserInformation.getCurrentUser();
    let currentLocation = locationInformation.getLocation();
    let todos = getUserInformation.getUserTodolist(currentUser);
    !userlist ? (userlist = []) : userlist;
    !todos ? (todos = this.state.todos) : todos;
    try {
      this.setState({
        ...this.state,
        username: userlist,
        isCurrentUser: currentUser,
        todos: todos,
        isCurrentLocation: currentLocation,
      });
    } catch (e) {
      alert('user 정보를 가져오는데 실패했습니다. 잠시 후 다시 시도해주세요.');
    }
  };

  init();
}

export default App;
