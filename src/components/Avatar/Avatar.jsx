import styles from "./Avatar.module.css";

export let Avatar = (props) => {
  return (
    <>
      <div className={props.retireMarginLeft ? styles.retireMarginLeft : styles.profilePhoto}>
        <img src={props.src} />
      </div>
    </>
  );
};
