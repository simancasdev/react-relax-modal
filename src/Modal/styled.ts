import {CSSProperties} from "react";
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
  height: 55px;
  display: flex;
  border: unset;
  cursor: pointer;
  position: fixed;
  z-index: 999999;
  border-radius: 100%;
  align-items: center;
  background-color: unset;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const Backdrop = styled.div`
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: transparent;
`;

export const motionStyle: CSSProperties = {
  zIndex: 5,
};
