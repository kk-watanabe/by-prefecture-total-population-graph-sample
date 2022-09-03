import styles from "./Styles.module.css";

export interface ErrorContentProps {
  children: JSX.Element;
}

export const ErrorContent = (props: ErrorContentProps) => (
  <div className={styles["error-content"]}>{props.children}</div>
);
