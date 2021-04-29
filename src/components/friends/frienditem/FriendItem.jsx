import React from "react";
import styles from "./FriendItem.module.css";
import PropTypes from "prop-types";
import { red, green } from "./FriendItem.module.css";

const FriendItem = ({ isOnline, avatar, name }) => {
  return (
    <li className={styles.item}>
      <span className={isOnline ? green : red}></span>
      <img className="avatar" src={avatar} alt="" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

export default FriendItem;

FriendItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
