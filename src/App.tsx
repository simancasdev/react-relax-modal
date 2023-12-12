import {RelaxModalProvider, useRelaxModal} from "main";

interface GreetingsProps {}

const Greetings: React.FC<GreetingsProps> = () => {
  return (
    <div
      style={{
        width: "200px",
        height: "200px",
        display: "flex",
        borderRadius: "12px",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
      }}
    >
      Hello world!
    </div>
  );
};

interface RandomPageProps {}

const RandomPage: React.FC<RandomPageProps> = () => {
  const {openModal} = useRelaxModal();
  return (
    <div>
      <button onClick={() => openModal(<Greetings />)}>Abrir Modal</button>
    </div>
  );
};

function App() {
  return (
    <RelaxModalProvider>
      <RandomPage />
    </RelaxModalProvider>
  );
}

export default App;
