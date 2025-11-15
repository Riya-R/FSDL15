function ListDemo() {
  const fruits = ["Apple", "Banana", "Mango"];

  return (
    <ul>
      {fruits.map((f, i) => (
        <li key={i}>{f}</li>
      ))}
    </ul>
  );
}

export default ListDemo;
