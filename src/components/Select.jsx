export default function Select({ label, options, className, ...props }) {
  return (
    <div>
      {label && <label></label>}
      <select name="" id="" className={className} {...props}>
        {options?.map((option) => (
          <option key={Math.random()}>{option}</option>
        ))}
      </select>
    </div>
  );
}
