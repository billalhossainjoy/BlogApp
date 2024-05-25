import { forwardRef } from "react";

const Input = ({ label, name, classname,type,placeholder,...props },ref) => {
  return (
    <div className="mt-3 mb-3">
      <div className="flex flex-col">
        {label && (
          <label name={name} className=" text-gray-600 text-sm">
            {label}
          </label>
        )}
        <input
          name={name}
          ref={ref}
          type={type}
          placeholder={placeholder}
          {...props}
          className={`${classname} bg-white p-2 font-semibold rounded outline-none`}
        />
      </div>
    </div>
  );
};

export default forwardRef(Input);
