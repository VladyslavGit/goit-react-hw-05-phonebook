import React from "react";
import styles from "./ContactList.module.css";

const ContactList = ({ contacts, deleteContact }) => (
  <ul className={styles.contactList}>
    {contacts.map((contact) => (
      <li key={contact.id} className={styles.contactListItem}>
        <span>{contact.name}: </span>
        <div className={styles.TelBox}>
          <a className={styles.linkToTel} href={"tel:" + contact.number}>
            {contact.number}
          </a>
          <button
            className={styles.buttonDel}
            type="button"
            onClick={deleteContact}
            id={contact.id}
          ></button>
        </div>
      </li>
    ))}
  </ul>
);

export default ContactList;
