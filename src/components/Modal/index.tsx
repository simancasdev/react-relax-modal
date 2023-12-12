import {Fragment} from "react";
import {X} from "react-feather";
import {useKeydown} from "./hooks";
import {motion} from "framer-motion";
import {CSSAlignment} from "./helper";
import {useRelaxContext} from "./context";
import {CloseButton, Modal} from "./styled";

interface RelaxModalProps {}

export const RelaxModal: React.FC<RelaxModalProps> = () => {
  useKeydown();
  const {element, config, closeModal} = useRelaxContext();
  const {alignment, backgroundColor, closeButton, animation} = config;
  const {initial, animate} = animation;
  const {justifyContent, alignItems} = CSSAlignment[alignment];
  const {icon, show, defaultIconColor, style: closeButtonStyle} = closeButton;

  return (
    <Fragment>
      <Modal
        children={
          <motion.div animate={animate} initial={initial}>
            {element}
          </motion.div>
        }
        style={{
          alignItems,
          justifyContent,
          backgroundColor,
        }}
      />

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
