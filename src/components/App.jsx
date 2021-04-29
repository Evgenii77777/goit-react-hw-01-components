import React from "react";
import Profile from "./profile/Profile";
import user from "../userss.json";
import Statistics from "./statistic/Statistics";
import FriendList from "./friends/FriendList";
import TransactionHistory from "./transaction/TransactionHistory";

const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistics />
      <FriendList />
      <TransactionHistory />
    </>
  );
};

export default App;
