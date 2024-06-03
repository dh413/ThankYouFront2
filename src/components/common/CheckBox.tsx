import { CheckboxProps } from "@/types/search/common/type";
import React from "react";

const CheckBox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => {
  return (
    <div className="d-flex flex-wrap">
      <label className="form-check form-check-inline custom-radio">
        <input
          type="checkbox"
          className="form-check-input"
          checked={checked}
          onChange={onChange}
        />
        <span className="custom-radio-span">{label}</span>
      </label>
    </div>
  );
};

export default CheckBox;
