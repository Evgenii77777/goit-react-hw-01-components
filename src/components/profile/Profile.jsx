import React from "react";
import PropTypes from "prop-types";
import styles from "../profile/Profile.module.css";

const Profile = ({ user }) => {
  return (
    <>
      <div className={styles.profile}>
        <div className={styles.descr}>
          <img src={user.avatar} alt={user.name} className={styles.avatar} />
          <p className="name">{user.name}</p>
          <p className="tag">@{user.tag}</p>
          <p className="location">{user.location}</p>
        </div>

        <ul className={styles.stats}>
          <li className={styles.item}>
            <span className="label">Followers:</span>
            <span className={styles.qyantyti}>{user.stats.followers}</span>
          </li>
          <li className={styles.item}>
            <span className="label">Views:</span>
            <span className={styles.qyantyti}>{user.stats.views}</span>
          </li>
          <li className={styles.item}>
            <span className="label">Likes:</span>
            <span className={styles.qyantyti}>{user.stats.likes}</span>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Profile;

Profile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.shape({
      followers: PropTypes.number,
      likes: PropTypes.number,
      views: PropTypes.number,
    }),
  }),
};
