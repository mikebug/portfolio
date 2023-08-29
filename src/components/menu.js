import React from "react";
import styled from "styled-components";

const Header = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem 0;
  height: 400px;
  align-items: center;
`;
const Logo = styled.div`
  width: 200px;
  height: 200px;
  background: var(--text, #fff);
  border-radius: 50%;
  margin-right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const Name = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
`;
const Letters = styled.span`
  font-size: 12px;
  font-weight: 800;
  text-transform: uppercase;
  color: var(--text, #fff);
`;
const M = styled.p`
  text-align: center;
  animation-name: spin, depth;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-duration: 100s;
  font-size: 150px;
  font-family: Monomaniac One;
  @keyframes spin {
    from {
      transform: rotateY(0deg);
    }
    to {
      transform: rotateY(-360deg);
    }
  }
  @keyframes depth {
    0% {
      text-shadow: 0 0 black;
    }
    25% {
      text-shadow: 1px 0 black, 2px 0 black, 3px 0 black, 4px 0 black,
        5px 0 black;
    }
    50% {
      text-shadow: 0 0 black;
    }
    75% {
      text-shadow: -1px 0 black, -2px 0 black, -3px 0 black, -4px 0 black,
        -5px 0 black;
    }
    100% {
      text-shadow: 0 0 black;
    }
  }
`;
const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-start;
  gap: 1rem;
`;

const Contacts = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 12px;
  font-weight: 200;
  width: 200px;
  font-family: "Roboto", sans-serif;
  width: 100%;
  max-width: none;
  a {
    text-decoration: none;
    color: var(--text, #ffa75d);
  }
  color: var(--text, #ffa75d);
  :link {
    color: var(--text, #fff);
  }
  :hover {
    animation: color-change 6s infinite;
  }
  :active {
    color: var(--text, #fff);
  }
  :visited {
    color: var(--text, #hjh);
  }
  @keyframes color-change {
    0% {
      color: red;
    }

    28% {
      color: yellow;
    }
    42% {
      color: green;
    }
    57% {
      color: blue;
    }
    71% {
      color: indigo;
    }
    85% {
      color: violet;
    }
    100% {
      color: red;
    }
  }
`;

export default function Menu() {
  return (
    <Header
      className="container"
      style={{
        padding: "0 1rem",
      }}
    >
      <LogoContainer>
        <Logo>
          <M>M</M>
        </Logo>
        <Name>
          <Letters>Mike Buglione</Letters>
          <Letters>Software Engineer/Designer</Letters>
        </Name>
        <Contacts>
          <a
            href="https://LinkedIn.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://GitHub.com/mikebug"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://michaelbuglione.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Website
          </a>
        </Contacts>
      </LogoContainer>
    </Header>
  );
}
