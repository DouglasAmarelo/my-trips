import styled from 'styled-components';

export const Content = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  max-width: var(--container);
  min-height: 100vh;
`;

export const PageData = styled.ul`
  list-style: none;
  margin: var(--small) auto;
  padding: var(--small);

  li {
    div {
      align-items: center;
      border-radius: 200px;
      border: 1px solid #ddd;
      display: flex;
      height: 40px;
      justify-content: center;
      overflow: hidden;
      width: 40px;
    }

    img {
      display: block;
    }
  }
`;

export const Heading = styled.h1`
  font-size: var(--large);
  margin-bottom: var(--large);
`;

export const Body = styled.div`
  padding: var(--small);

  h1,
  h2,
  h3,
  h4 {
    margin-top: var(--large);
    margin-bottom: var(--small);
  }

  h1 {
    font-size: var(--large);
  }
  h2,
  h3 {
    font-size: var(--medium);
  }
  h4 {
    font-size: var(--small);
  }

  p {
    font-size: var(--small);
    line-height: var(--medium);
    margin-bottom: var(--small);
  }
`;
