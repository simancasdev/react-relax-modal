import styled from "styled-components";

export const Modal = styled.div`
  top: 0;
  left: 0;
  width: 100vw;
  display: flex;
  height: 100vh;
  position: fixed;
  align-items: center;
  justify-content: center;
`;

export const CloseButton = styled.button`
  top: 15px;
  right: 15px;
  width: 55px;
  z-index: 999;
  height: 55px;
  display: flex;
  border: unset;
  cursor: pointer;
  position: fixed;
  border-radius: 100%;
  align-items: center;
  background-color: unset;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.3);
`;
