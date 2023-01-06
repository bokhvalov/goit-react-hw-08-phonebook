import { Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';
import styled from 'styled-components';
import { Suspense } from 'react';
const { NavLink } = require('react-router-dom');

const StyledLink = styled(NavLink)`
  &.active {
    color: orange;
  }
`;

const SharedLayout = ({ username }) => {
  return (
    <>
      <header>
        <nav className={css.navigation}>
          <StyledLink className={css.navigation__item} to="/" end>
            Home
          </StyledLink>
          <StyledLink className={css.navigation__item} to="/contacts">
            Phonebook
          </StyledLink>
        </nav>
        {username ? (
          <p className={css.navigation__username}>Welcome, {username}</p>
        ) : (
          <StyledLink className={css.navigation__item} to="/Login">
            Login
          </StyledLink>
        )}
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
