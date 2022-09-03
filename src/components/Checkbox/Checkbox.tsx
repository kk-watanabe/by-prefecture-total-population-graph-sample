import { ChangeEvent, useState, useCallback } from "react";

import styles from "./Styles.module.css";

export interface CheckboxProps {
  id: string;
  label: string;
  value: string | number;
  checked?: boolean;
  colorCode: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox = (props: CheckboxProps) => {
  const { onChange } = props;
  const [isChecked, setIsChecked] = useState(props.checked);
  const checkedBoxClassName = isChecked ? styles["checkbox__box--checked"] : "";
  const boxClasses = [styles.checkbox__box, checkedBoxClassName].join(" ");
  const checkedBoxStyle = {
    backgroundColor: isChecked ? props.colorCode : "",
    borderColor: isChecked ? props.colorCode : "",
  };

  const checkedLabelClassName = isChecked ? styles["checkbox__label--checked"] : "";
  const labelClasses = [styles.checkbox__label, checkedLabelClassName].join(" ");

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        setIsChecked(event.target.checked);
        onChange(event);
      }
    },
    [onChange]
  );

  return (
    <label className={styles.checkbox} htmlFor={props.id}>
      <input
        type="checkbox"
        value={props.value}
        id={props.id}
        defaultChecked={isChecked}
        onChange={handleChange}
        className={styles.checkbox__input}
      />
      <span className={boxClasses} style={checkedBoxStyle}>
        <span className={styles.checkbox__check} />
      </span>
      <span className={labelClasses}>{props.label}</span>
    </label>
  );
};
