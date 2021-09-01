function RadioInput(props) {
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="radio"
        name={props.name}
        id={props.id}
        value={props.value}
        checked={props.checked}
        onChange={props.onChange}
      />
      <label className="form-check-label" htmlFor={props.id}>
        {props.label}
      </label>
    </div>
  );
}

export default RadioInput;
