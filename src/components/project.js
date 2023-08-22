import React from "react";
import styled from "styled-components";

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--text, #fff);
  font-size: 12px;
  font-weight: 200;
  font-style: thin;
  width: 200px;
  margin: 0;
  font-family: "Roboto", sans-serif;
  width: 100%;
  max-width: none;
`;

const Divider = styled.hr`
  border: 0;
  box-sizing: border-box;
  display: block;
  padding: 0;
  margin: 0;
  vertical-align: baseline;
  border-top: 1px solid #fff;
`;

export default function Project(props) {
  return (
    <Contents>
      <div> {props.name} </div>
      <div> {props.date} </div>
      <Divider />
      <div>
        <div></div>
        <div> {props.description} </div>
        <div>
          {props.tags.map((tag) => (
            <div> {tag} </div>
          ))}
        </div>
        <div>
          {props.links.map((link) => (
            <ul>
              <li> {link.name} </li>
            </ul>
          ))}
        </div>
      </div>
    </Contents>
  );
}
