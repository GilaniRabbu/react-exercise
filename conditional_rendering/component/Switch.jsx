const Switch = () => {
  const status = true;

  switch (status) {
    case true:
      return <button>Result Stat - Passed Switch</button>;
    case false:
      return <button>Result Stat - Failed Switch</button>;
    default:
      return null;
  }
};

export default Switch;
