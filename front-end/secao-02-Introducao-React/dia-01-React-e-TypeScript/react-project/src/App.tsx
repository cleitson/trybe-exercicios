import Greeting from "./components/greeting"
import LuckyNumbers from "./components/luckyNumbers";
import PastResults from "./components/PastResults";
import "./App.css"
import LottoNumbers from "./components/LottoNumbers";

function App() {
  return (
    <>
      <Greeting />
      <LuckyNumbers />
      <LottoNumbers numbers={[7, 21, 59, 12, 42, 30]} />
      <PastResults />
    </>    
  );
}

export default App
