const name = state => state.auth.name;
const email = state => state.auth.email;
const isLoggedIn = state => state.auth.isLoggedIn;
const isRefreshing = state => state.auth.isRefreshing;
const error = state => state.auth.error;

const authSelectors = {
  name,
  email,
  isLoggedIn,
  isRefreshing,
  error
};

export default authSelectors;
