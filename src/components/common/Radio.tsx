import { RadioProps } from "@/types/search/common/type";
import styles from "@/styles/Radio.module.css"; // CSS 모듈 임포트

import React from "react";
import "@/css/search/styles.css";

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
