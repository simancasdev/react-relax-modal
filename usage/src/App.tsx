import React from "react";
import {RelaxModalProvider} from "react-relax-modal/dist/index.js";

interface UsageProps {}

const Usage: React.FC<UsageProps> = () => {
  return <div />;
};

function App() {
  return (
    <RelaxModalProvider>
      <Usage />
    </RelaxModalProvider>
  );
}

export default App;
