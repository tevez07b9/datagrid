import { useEffect, useRef } from "react";
import styles from "./Checkbox.module.css";

interface CheckboxProps {
  checked: boolean;
  indeterminate?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, indeterminate, onChange }) => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.indeterminate = !!indeterminate;
    }
  }, [indeterminate])

  return (
    <input
      type="checkbox"
      ref={ref}
      className={styles.checkbox}
      checked={checked}
      onChange={onChange}
    />
  )
}

export default Checkbox;