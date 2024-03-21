import styles from "./FriendsListItem.module.css";
import clsx from "clsx";

const FriendsListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={styles.friendsItemContainer}>
      <img src={avatar} alt={name} width="48" />
      <p className={styles.friendsItemText}>{name}</p>
      <p
        className={clsx(styles.friendsItemStatus, isOnline && styles.friendsItemStatusOnline)}
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendsListItem;
