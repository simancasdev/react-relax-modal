import React from "react";
import {useRelaxModal} from "../../";
import {Fragment, useEffect} from "react";

function Another(): JSX.Element {
  const {openModal} = useRelaxModal();
  useEffect(() => {
    openModal(<div />);
  }, []);
  return <Fragment />;
}

interface MultipleProps {}

export const Multiple: React.FC<MultipleProps> = () => {
  const {openModal} = useRelaxModal();
  return (
    <div>
      <button onClick={() => openModal(<Another />)}></button>
    </div>
  );
};
