import React from 'react';
function CountEx() {
  const [count, setCount] = React.useState(0);

  const countRemBtn = (i) => {
    if (i < 1) {
      setCount(0);
      alert('Меньше нуля нельзя!');
    } else {
      setCount(i - 1);
    }
  };
  return (
    <div className="countStyle">
      Счетчик <span>CountEx.jsx</span>
      <div className="big">{count}</div>
      <div className="btn">
        <button
          onClick={() => {
            countRemBtn(count);
            // count ? setCount(count - 1) : setCount(0);
          }}>
          -
        </button>
        <button
          onClick={() => {
            setCount(count + 1);
          }}>
          +
        </button>
      </div>
    </div>
  );
}
export default CountEx;
