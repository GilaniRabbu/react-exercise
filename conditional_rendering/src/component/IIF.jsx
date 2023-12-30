const ImmediatelyInvokedFunction = () => {
  let status = true;
  return (
    <div>
      <h1>Result Status IIF</h1>
      {(() => {
        if (status == true) {
          return <button>Passed</button>;
        } else {
          return <button>Failed</button>;
        }
      })()}
    </div>
  );
};

export default ImmediatelyInvokedFunction;
