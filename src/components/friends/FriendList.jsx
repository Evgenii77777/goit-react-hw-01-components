import React from "react";
import FriendItem from "./frienditem/FriendItem";
import friends from "../../friends.json";

const FriendList = () => {
  return (
    <ul className="friend-list">
      {friends.map((friend) => (
        <FriendItem {...friend} key={friend.id} />
      ))}
    </ul>
  );
};

export default FriendList;
