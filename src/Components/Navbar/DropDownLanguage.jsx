import downSolid from "../../assets/basil_caret-down-solid.svg";
import styles from "./DropDownLanguage.module.scss";
import { useState } from "react";

export default function DropDownLanguage() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("AZ");

  function toggleButton() {
    setDropdownVisible(!dropdownVisible);
  }

  function selectLanguage(language) {
    setSelectedLanguage(language);
    setTimeout(() => {
      setDropdownVisible(false); // Close the dropdown after 0.4 seconds
    }, 400);
  }

  return (
    <div className={styles.dropdownElement}>
      <div className={styles.dropdownLanguageSelected}>
        <p className={styles.languageonPage}>{selectedLanguage}</p>
        <button onClick={toggleButton} className={styles.downSolidButton}>
          <img src={downSolid} alt="Down Solid" />
        </button>
      </div>
      <div
        className={`${styles.languageElement}${
          dropdownVisible ? " " + styles.active : ""
        }`}
      >
        <div
          onClick={() => selectLanguage("AZ")}
          className={styles.checkAndLanguage}
        >
          {selectedLanguage === "AZ" && <p className={styles.checkIcon}>✓</p>}
          <p className={styles.langText}>AZ</p>
        </div>
        <div
          onClick={() => selectLanguage("EN")}
          className={styles.checkAndLanguage}
        >
          {selectedLanguage === "EN" && <p className={styles.checkIcon}>✓</p>}
          <p className={styles.langText}>EN</p>
        </div>
        <div
          onClick={() => selectLanguage("RU")}
          className={styles.checkAndLanguage}
        >
          {selectedLanguage === "RU" && <p className={styles.checkIcon}>✓</p>}
          <p className={styles.langText}>RU</p>
        </div>
      </div>
    </div>
  );
}
