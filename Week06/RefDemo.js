import { useRef } from "react";

function RefDemo() {
  const inputRef = useRef();

  return (
    <div>
      <input ref={inputRef} placeholder="Focus me" />
      <button onClick={() => inputRef.current.focus()}>Focus</button>
    </div>
  );
}

export default RefDemo;
