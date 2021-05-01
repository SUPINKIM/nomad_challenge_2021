//이미 저장된 username이 있는지 확인 후 해당 user의 todolist를 받기

const USERS = 'Users';
const CURRENT = 'CurrentUser';
const LOCATION = 'Location';

const getUserInformation = {
  getCurrentUser: () => {
    const currentUser = localStorage.getItem(CURRENT);
    return currentUser;
  },
  getUserList: () => {
    const users = JSON.parse(localStorage.getItem(USERS));
    return users;
  },
  getUserTodolist: (user) => {
    const userTodos = JSON.parse(localStorage.getItem(user));
    return userTodos;
  },
};
const setUserInformation = {
  setCurrentUser: (name) => {
    localStorage.setItem(CURRENT, name);
  },
  setUserList: (arr) => {
    localStorage.setItem(USERS, JSON.stringify(arr));
  },
  setUserTodolist: (user, arr) => {
    localStorage.setItem(user, JSON.stringify(arr));
  },
};

const removeUserInformation = {
  removeCurrentUser: () => {
    localStorage.removeItem(CURRENT);
  },
};

const locationInformation = {
  getLocation: () => {
    const location = JSON.parse(localStorage.getItem(LOCATION));
    return location;
  },
  setLocation: (location) => {
    localStorage.setItem(LOCATION, JSON.stringify(location));
  },
};

export {
  getUserInformation,
  setUserInformation,
  removeUserInformation,
  locationInformation,
};
