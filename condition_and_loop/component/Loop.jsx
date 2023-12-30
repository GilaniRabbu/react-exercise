const Loop = () => {
  const fruits = ["Apple", "Orange", "Mango", "Watermelon"];
  return (
    <div>
      <select>
        {fruits.map((item, i) => {
          return <option key={i.toString()}>{item}</option>;
        })}
        ;
      </select>
    </div>
  );
};

export default Loop;
