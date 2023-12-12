import {Target, TargetAndTransition} from "framer-motion";
import {Alignment, CloseButton} from ".";

export type RelaxModalConfig = {
  closeKey: "Escape";
  alignment: Alignment;
  backgroundColor: string;
  onClosed: () => void;
  autoCloseMS: number | undefined;
  closeButton: Partial<CloseButton>;
  animation: {
    initial: Target | undefined;
    animate: TargetAndTransition | undefined;
  };
};
