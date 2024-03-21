import FriendsListItem from "../friends_list_item/FriendsListItem";
import styles from "./FriendList.module.css"

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendsListContainer}>
      {friends.map((friend) => (
        <FriendsListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
};

export default FriendList;
