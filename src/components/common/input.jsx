const Input = ({ label, name, error, ...rest }) => {
  debugger
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      
      <input {...rest} name={name} id={name} className="form-control" />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
