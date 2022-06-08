export default {
  logIn(context) {
    context.commit('setAuth', { isAuthed: true });
  },
  logOut(context) {
    context.commit('setAuth', { isAuthed: false });
  },
};
