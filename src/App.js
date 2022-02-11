// link video https://www.youtube.com/watch?v=Ai8oVt9y4us

import Start from "./component/start/Start";
import Board from "./component/board/Board";
import Modal from "./component/modal/Modal";
function App() {
  return (
    <div className="App">
      <div className="container">
        <Start />
        <Board />
      </div>
      {/* <Modal /> */}
    </div>
  );
}

export default App;
