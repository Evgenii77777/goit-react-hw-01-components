import React from "react";
import styles from "../statisticsItem/StatisticItem.module.css";
import PropTypes from "prop-types";

const StatisticsItem = ({ stat }) => {
  return (
    <li className={styles.item}>
      <span className="label">{stat.label}</span>
      <span className="percentage">{stat.percentage}%</span>
    </li>
  );
};

export default StatisticsItem;

StatisticsItem.propTypes = {
  stat: PropTypes.shape({
    label: PropTypes.string,
    percentage: PropTypes.number,
    id: PropTypes.string,
  }).isRequired,
};
