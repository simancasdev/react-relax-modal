import {CSSProperties} from "react";
import {RelaxModalProvider, useRelaxModal} from "react-relax-modal";

const modalStyle: CSSProperties = {
  width: 200,
  height: 200,
  display: "flex",
  borderRadius: "5px",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "white",
};

const MyModal = () => {
  return (
    <div style={modalStyle}>
      <span>Hello World!</span>
    </div>
  );
};

const Screen = () => {
  const {openModal} = useRelaxModal();
  return <button onClick={() => openModal(<MyModal />)}>Open My Modal</button>;
};

function App() {
  return (
    <RelaxModalProvider>
      <Screen />
    </RelaxModalProvider>
  );
}

export default App;
