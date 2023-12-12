import {RelaxModalProvider, useRelaxModal} from "main";

interface GoodbyeProps {}

const Goodbye: React.FC<GoodbyeProps> = () => {
  return (
    <div
      style={{
        width: "180px",
        height: "180px",
        display: "flex",
        borderRadius: "12px",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "red",
      }}
    >
      <span>Bye!</span>
    </div>
  );
};

interface GreetingsProps {}

const Greetings: React.FC<GreetingsProps> = () => {
  const {openModal} = useRelaxModal();
  return (
    <div
      style={{
        width: "200px",
        height: "200px",
        display: "flex",
        borderRadius: "12px",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "#fff",
      }}
    >
      Hello world!
      <button
        onClick={() =>
          openModal(<Goodbye />, {
            animation: {
              initial: {
                transform: "translateX(5rem)",
                opacity: 0,
              },
              animate: {
                transform: "translateX(0rem)",
                opacity: 1,
              },
            },
          })
        }
      >
        Open another Modal
      </button>
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
