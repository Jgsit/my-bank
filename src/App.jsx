import "./App.css";
import Header from "./assets/components/Header";
import Accounts from "./assets/components/Accounts";
import data from "./assets/data.json";

function App() {
  return (
    <>
      <Header userName="Hugo" />
      <main>
        <Accounts accounts={data} />
      </main>
    </>
  );
}

export default App;
