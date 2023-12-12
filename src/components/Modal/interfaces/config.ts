import {Alignment, CloseButton} from ".";

export type RelaxModalConfig = {
  alignment: Alignment;
  backgroundColor: string;
  autoCloseMS: number | undefined;
  closeButton: Partial<CloseButton>;
};
