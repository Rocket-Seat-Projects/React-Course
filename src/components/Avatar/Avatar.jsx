import styles from "./Avatar.module.css";

export let Avatar = (props) => {
  return (
    <>
      <div className={props.hasBorder ? !styles.retireBorder : styles.retireBorder }>
        <div
          className={
            props.retireMarginLeft
              ? styles.retireMarginLeft
              : styles.profilePhoto
          }
        >
          <img src={props.src} />
        </div>
      </div>
    </>
  );
};
