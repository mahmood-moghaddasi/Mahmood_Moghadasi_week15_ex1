/* eslint-disable react/prop-types */
const Input = ({ handleChange, hint, setHint, setValue, value }) => {
  return (
    <div className="input">
      <label htmlFor="input">{hint}</label>
      <input value={value} type="text" id="input" onChange={handleChange} />
    </div>
  );
};

export default Input;
