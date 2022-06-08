export default {
  // logIn(state) {
  //   state.loggedIn = true;
  // },
  // logOut(state) {
  //   state.loggedIn = false;
  // },

  // Using 1 mutation to do multiple things:
  setAuth(state, payload) {
    state.loggedIn = payload.isAuthed;
  },
};
