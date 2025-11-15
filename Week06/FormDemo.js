import { useState } from "react";

function FormDemo() {
  const [text, setText] = useState("");

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Enter something" 
      />
      <p>You typed: {text}</p>
    </form>
  );
}

export default FormDemo;
