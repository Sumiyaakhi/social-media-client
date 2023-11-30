import React from "react";

const TextInput = React.forwardRef(
  (
    { type, placeholder, styles, label, labelStyle, register, name, error },
    ref
  ) => {
    return (
      <div className="w-full flex flex-col mt-2">
        {label && <p>{label}</p>}
        <div>
          <input type={type} name={name} placeholder={placeholder} ref={ref} className={`bg=secondary rounded border border-[#66666690] outline-none text-sm text-ascent px-4 py-3 placeholder:text-[#666] ${styles}`} {...register} aia-invalid={error ? "true" : "false"}
          />
        </div>
        <div>
            {
                error && (
                    <span className="text-xs text-[#f64949fe]">{error}</span>
                )
            }
        </div>
      </div>
    );
  }
);

export default TextInput;
