import {Fragment} from "react";
import {X} from "react-feather";
import {CSSAlignment} from "./helper";
import {useRelaxContext} from "./context";
import {CloseButton, Modal} from "./styled";

interface RelaxModalProps {}

export const RelaxModal: React.FC<RelaxModalProps> = () => {
  const {element, config, closeModal} = useRelaxContext();
  const {alignment, backgroundColor, closeButton} = config;
  const {justifyContent, alignItems} = CSSAlignment[alignment];
  const {
    icon,
    show,
    onClosed,
    defaultIconColor,
    style: closeButtonStyle,
  } = closeButton;

  return element ? (
    <Fragment>
      <Modal
        children={element}
        style={{
          alignItems,
          justifyContent,
          backgroundColor,
        }}
      />

      {show && (
        <CloseButton
          style={closeButtonStyle}
          children={icon ?? <X strokeWidth={2.5} color={defaultIconColor} />}
          onClick={() => {
            closeModal();
            if (onClosed) onClosed();
          }}
        />
      )}
    </Fragment>
  ) : (
    <Fragment />
  );
};
