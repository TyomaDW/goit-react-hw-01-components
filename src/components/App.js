import user from './Profile/user.json';
import Profile from './Profile/Profile';
import statisticalData from './Statistics/statistical-data.json';
import Statistics from './Statistics/Statistics';
import friends from './FriendList/friends.json';
import FriendList from './FriendList/FriendList';
import transactions from './TransactionHistory/transactions.json';
import Transactions from './TransactionHistory/Transactions';

export default function App() {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics stats={statisticalData} />
      <FriendList friends={friends} />
      <Transactions transactions={transactions} />
    </div>
  );
}
