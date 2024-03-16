import {CSSProperties} from "react";
import {Alignment} from "../types";

export const CSSAlignment: {[A in Alignment]: CSSProperties} = {
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  top: {
    justifyContent: "center",
    alignItems: "flex-start",
  },
  left: {
    justifyContent: "flex-start",
    alignItems: "center",
  },
  right: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
  bottom: {
    justifyContent: "center",
    alignItems: "flex-end",
  },
  topLeft: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  topRight: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
  bottomLeft: {
    justifyContent: "flex-start",
    alignItems: "flex-end",
  },
  bottomRight: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
};
