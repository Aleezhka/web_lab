import styled from 'styled-components';

export const NavWrapper = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 20px;
  }

  li {
    font-size: 1.2rem;
  }

  .active {
    color: red;
  }

  a {
    text-decoration: none;
    color: #fff;
  }

  a:hover {
    color: #555;
  }
`;
