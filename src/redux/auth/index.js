const name = state => state.auth.user.name;
const email = state => state.auth.user.email;
const isLoggedIn = state => state.auth.isLoggedIn;
const isRefreshing = state => state.auth.isRefreshing;

const authSelectors = {
  name,
  email,
  isLoggedIn,
  isRefreshing,
};

export default authSelectors;
