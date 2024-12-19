const Error = ({ error }) => {
  return (
    <div className="error-display">
      <h2>ERROR</h2>
      <p>An error occurred while trying to process data:</p>
      <pre>
        {error.status} {error.statusText}
      </pre>
    </div>
  );
};
export default Error;
