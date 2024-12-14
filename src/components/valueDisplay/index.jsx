import { useEffect, useRef } from "react";
import styles from "./styles.module.css";

export default function ValueDisplay({ value }) {
  const valueRef = useRef(value);
  useEffect(() => {
    valueRef.current = value;
  }, [value]);
  return (
    <div className={styles.container}>
      <p>Current Value: {value}</p>
      <p>Previous Value: {valueRef.current}</p>
    </div>
  );
}
