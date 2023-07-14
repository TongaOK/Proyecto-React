import styles from "./CheckoutForm.module.css";
import { useState } from "react";

const CheckoutForm = ({ onConfirm }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleConfirm = (event) => {
    event.preventDefault();

    const userData = {
      name,
      phone,
      email,
    };

    onConfirm(userData);
    console.log(userData);
  };
  return (
    <div className={styles.Container}>
      <form onSubmit={handleConfirm} className={styles.Form}>
        <label htmlFor="nombre" className={styles.Label}>
          Nombre:
          <input
            className={styles.Input}
            type="text"
            value={name}
            onChange={({ target }) => setName(target.value)}
            required
          />
        </label>
        <label htmlFor="nombre" className={styles.Label}>
          Telefono:
          <input
            className={styles.Input}
            type="tel"
            value={phone}
            onChange={({ target }) => setPhone(target.value)}
            required
          />
        </label>
        <label htmlFor="nombre" className={styles.Label}>
          Email:
          <input
            className={styles.Input}
            type="email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            required
          />
        </label>
        <div className={styles.Label}>
          <button type="submit" className={styles.Button}>
            Crear Orden
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
