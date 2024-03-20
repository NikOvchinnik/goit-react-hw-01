import Profile from "../profile/Profile";
import userData from "../../json/userData.json";
import FriendList from "../friend_list/FriendList";
import friends from "../../json/friends.json";
import TransactionHistory from "../transaction_history/TransactionHistory";
import transactions from "../../json/transactions.json";

const App = () => {
  return (
    <section>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </section>
  );
};

export default App;
