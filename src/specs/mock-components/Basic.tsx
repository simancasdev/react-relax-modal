import React from "react";
import {useRelaxModal} from "../../";

interface BasicProps {}

export const Basic: React.FC<BasicProps> = () => {
  const {openModal} = useRelaxModal();
  return (
    <div>
      <button onClick={() => openModal(<div />)}></button>
    </div>
  );
};
