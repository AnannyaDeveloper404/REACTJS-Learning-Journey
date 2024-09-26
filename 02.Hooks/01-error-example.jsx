const ErrorExample = () => {
  let count = 0;
  const handleClick = () => {
    count++;
    console.log(count);
  };
  return (
    <div>
      <h2>{count}</h2>
      <button className="btn" type="button" onClick={handleClick}>
        increase
      </button>
    </div>
  );
};

export default ErrorExample;
