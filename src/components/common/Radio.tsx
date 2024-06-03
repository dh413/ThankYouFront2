import { RadioProps } from "@/types/search/common/type";
import React from "react";

const Radio: React.FC<RadioProps> = ({
  options,
  name,
  selectedValue,
  onChange,
}) => {
  return (
    <div className="d-flex flex-wrap">
      {options.map((option) => (
        <label
          key={option.value}
          className="form-check form-check-inline custom-radio"
        >
          <input
            type="radio"
            className="form-check-input"
            name={name}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={(e) => onChange(Number(e.target.value))}
          />
          <span className="custom-radio-span">{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default Radio;
