import { useState } from 'react';
import './App.css';

import jokerFront from './joker_front.png';
import jokerBack from './joker_back.jpg';

function App() {
  // 클릭하면 상태 변경. true : 뒤집힘, false : 뒤집히지 않음(기본값)
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="App">
      <p className="desc">Click on the card to flip!</p>
      {/* hover 효과를 주기위해 container div 사용 */}
      <div className="container">
        <div
          className={`card ${flipped ? 'flipped' : ''}`}
          onClick={() => setFlipped((flipped) => !flipped)}
        >
          <div className="back">
            <img src={jokerBack} alt="뒷면" />
          </div>
          <div className="front">
            <img src={jokerFront} alt="앞면" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
