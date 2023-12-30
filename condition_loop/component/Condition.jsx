const Condition = () => {
  let marks = 82;
  let point = 78;
  return (
    <div>
      {marks > 80 ? <h2>TE: Brilliant Result</h2> : <h2>TE: Average Result</h2>}
      {(() => {
        if (point >= 80 && point <= 100) {
          return <h3>IE: Very Good Result</h3>;
        } else if (point >= 70 && point <= 79) {
          return <h3>IE: Good Result</h3>;
        } else if (point >= 60 && point <= 69) {
          return <h3>IE: Average Result</h3>;
        } else if (point >= 50 && point <= 59) {
          return <h3>IE: Poor Result</h3>;
        } else {
          return <h3>IE: Bad Result</h3>;
        }
      })()}
    </div>
  );
};

export default Condition;
