import "./App.css";
import FirstImport from "./components/FirstImport";
import SecondImport from "./components/SecondImport";
import ThirdImport from "./components/ThirdImport";

function App() {
  return (
    <div className="App">
      <header className="App-header">Employee Survey - PixelFree</header>
      <FirstImport />
      <SecondImport />
      <div style={{ width: "50vw" }}>
        <ThirdImport />
      </div>
    </div>
  );
}

export default App;
