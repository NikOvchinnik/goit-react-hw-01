import Profile from "../profile/Profile";
import userData from "../../json/userData.json";
import FriendList from "../friend_list/FriendList";
import friends from "../../json/friends.json";
import TransactionHistory from "../transaction_history/TransactionHistory";
import transactions from "../../json/transactions.json";
import styles from "./App.module.css"

const App = () => {
  return (
    <main className={styles.mainContainer}>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </main>
  );
};

export default App;
