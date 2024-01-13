const Result = (status) => {
  if (status) {
    return <button>Passed</button>;
  } else {
    return <button>Failed</button>;
  }
};

const IfElse = () => {
  return (
    <div>
      <h1>Result Status IE</h1>
      {Result(false)}
    </div>
  );
};

export default IfElse;
