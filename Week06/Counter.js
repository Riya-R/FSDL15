import { useState } from "react";

function Counter() {
  const [num, setNum] = useState(0);

  return (
    <div>
      <h3>Count: {num}</h3>
      <button onClick={() => setNum(num + 1)}>+</button>
    </div>
  );
}

export default Counter;
