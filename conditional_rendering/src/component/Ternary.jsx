const Ternary = () => {
  let marks = 85;
  return (
    <div>
      <h1>Result Status Ternary</h1>
      {marks > 80 ? <h1>First Class</h1> : <h1>Second Class</h1>}
    </div>
  );
};

export default Ternary;
