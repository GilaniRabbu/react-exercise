const Logical = () => {
  let status = true;
  return (
    <div>
      <h1>Result Status Logical</h1>
      <p>Component Rendering using Logical method Passed single condition</p>
      {status && <button>Passed the exam</button>}
    </div>
  );
};

export default Logical;
