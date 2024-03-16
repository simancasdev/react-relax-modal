import {RelaxModalConfig} from "./config";

export type Modal = {
  element: JSX.Element;
  config: Partial<RelaxModalConfig>;
};
