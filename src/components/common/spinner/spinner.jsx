import styles from "./spinner.module.css";

export default function LoadingSpinner() {
  return (
    <div className={styles.spinner}>
      <div className={styles.loadingSpinner}></div>
    </div>
  );
}
