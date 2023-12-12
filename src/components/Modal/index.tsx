import {Fragment} from "react";
import {X} from "react-feather";
import {useKeydown} from "./hooks";
import {motion} from "framer-motion";
import {CSSAlignment} from "./helpers";
import {useRelaxContext} from "./context";
import {RelaxModalConfig} from "./interfaces";
import {CloseButton, Backdrop, Modal, motionStyle} from "./styled";

interface RelaxModalProps {
  element: JSX.Element;
  config: RelaxModalConfig;
}

export const RelaxModal: React.FC<RelaxModalProps> = ({element, config}) => {
  useKeydown();
  const {closeModal} = useRelaxContext();
  const {
    alignment,
    animation,
    onBackdrop,
    closeButton,
    closeOnBackdrop,
    backgroundColor,
  } = config;
  const {initial, animate} = animation;
  const {justifyContent, alignItems} = CSSAlignment[alignment];
  const {icon, show, defaultIconColor, style: closeButtonStyle} = closeButton;

  return (
    <Fragment>
      <Modal
        style={{
          alignItems,
          justifyContent,
          backgroundColor,
        }}
      >
        <Backdrop
          onClick={() => {
            if (closeOnBackdrop) closeModal();
            if (typeof onBackdrop === "function") onBackdrop();
          }}
        />
        <motion.div animate={animate} initial={initial} style={motionStyle}>
          {element}
        </motion.div>
      </Modal>

      {show && (
        <CloseButton
          style={closeButtonStyle}
          onClick={() => closeModal()}
          children={icon ?? <X strokeWidth={2.5} color={defaultIconColor} />}
        />
      )}
    </Fragment>
  );
};
