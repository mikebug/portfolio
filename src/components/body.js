import React from "react";
import styled from "styled-components";
import Project from "./project";
const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

Project.defaultProps = [
  {
    name: "Project Name",
    date: "12/12/2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
    tags: ["tag1", "tag2", "tag3"],
    links: [
      {
        name: "link1",
        url: "https://google.com",
      },
      {
        name: "link2",
        url: "https://google.com",
      },
    ],
  },
  {
    name: "Project Name",
    date: "12/12/2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
    tags: ["tag1", "tag2", "tag3"],
    links: [
      {
        name: "link1",
        url: "https://google.com",
      },
      {
        name: "link2",
        url: "https://google.com",
      },
    ],
  },
  {
    name: "Project Name",
    date: "12/12/2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
    tags: ["tag1", "tag2", "tag3"],
    links: [
      {
        name: "link1",
        url: "https://google.com",
      },
      {
        name: "link2",
        url: "https://google.com",
      },
    ],
  },
];

export default function Body() {
  return (
    <Contents className="container">
      {Project.defaultProps.map((project) => (
        <Project {...project} />
      ))}
    </Contents>
  );
}
