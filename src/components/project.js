import React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const Contents = styled.div`
  display: flex;
  flex-direction: row;
  color: var(--text, #fff);
  font-size: 12px;
  font-weight: 200;
  font-style: thin;
  width: 200px;
  margin: 24px 0;
  font-family: "Roboto", sans-serif;
  width: 100%;
  max-width: none;
  &:hover {
    cursor: pointer;
    img {
      transition: transform 0.3s ease-in-out; /* Add a smooth transition */
      transform: scale(1.05); /* Apply scaling on hover */
    }
    .ProjectTitle {
      color: var(--text, #ffa75d);
    }
  }
`;

const Divider = styled.hr`
  width: 1px;
  background-color: var(--text, #fff);
  margin: 0 10px;
`;

const Content = styled.div`
  flex: 1;
  padding: 12px;
  hover: {
    color: var(--text, #ffa75d);
  }
`;

const FancyDivider = styled.div`
  width: 100%;
  border: 1px dashed #fff;
  border-color
  margin: 12px;
  animation: border-color-change 60s infinite;
  @keyframes border-color-change {
    0% {
      border-color: red;
    }

    28% {
      border-color: yellow;
    }
    42% {
      border-color: green;
    }
    57% {
      border-color: blue;
    }
    71% {
      border-color: indigo;
    }
    85% {
      border-color: violet;
    }
    100% {
      border-color: red;
    }
  }
`;

const Pills = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
  div {
    background-color: #fff;
    color: #000;
    padding: 4px 8px;
    border-radius: 4px;
    font-weight: 600;
  }
`;

const ProjectTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: var(--text, #fff);
  margin-bottom: 12px;
  hover: {
    color: var(--text, #ffa75d);
  }
`;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 600,
  bgcolor: "background.paper",
  p: 4,
  overflow: "auto",
  maxHeight: "80%",
};

export default function Project(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Contents onClick={() => handleOpen()}>
        <Content>
          <ProjectTitle className="ProjectTitle"> {props.name} </ProjectTitle>
          <FancyDivider></FancyDivider>
          <div
            style={{
              fontSize: "12px",
              fontWeight: "bold",
              color: "var(--text, #fff)",
              margin: "12px 0",
            }}
          >
            {" "}
            {props.date}{" "}
          </div>
          <div
            style={{
              fontSize: "12px",
              fontWeight: "bold",
              color: "var(--text, #fff)",
              margin: "12px 0",
            }}
          >
            {" "}
            {props.description}{" "}
          </div>
          <Pills>
            {props.tags.map((tag) => (
              <div> {tag} </div>
            ))}
          </Pills>
        </Content>
        <Divider />
        <Content>
          <div className="image-wrapper">
            <img
              alt="ProjectTitle"
              src={props.picture}
              style={{
                width: "100%",
                maxWidth: "100%",
                height: "auto",
                objectFit: "contain",
                border: "1px solid var(--text, #fff)",
              }}
            />
          </div>
        </Content>
      </Contents>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {props.name}
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2 }}
            style={{
              whiteSpace: "pre-line",
            }}
          >
            {props.modalDescription}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
