const Error = ({ error }) => {
  return (
    <div className="error-display">
      <h2>ERROR</h2>
      <p>An error occurred while trying to process data:</p>
      <pre>
        {error.status} {error.statusText}
        {error.status === 404 && (
          <>
            <br />
            <>This is likely due to the hosted database being down. </>
            <br />
            Please try again later.
          </>
        )}
      </pre>
    </div>
  );
};
export default Error;
