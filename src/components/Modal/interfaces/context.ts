import {RelaxModalConfig} from ".";

export type RelaxModalContext = {
  closeModal: () => void;
  config: RelaxModalConfig;
  element: JSX.Element | undefined;
  openModal: (element: JSX.Element, config?: Partial<RelaxModalConfig>) => void;
};
