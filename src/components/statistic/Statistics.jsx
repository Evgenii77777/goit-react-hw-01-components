import React from "react";
import StatisticsItem from "./statisticsItem/StatisticsItem";
import stats from "../../statistical-data.json";
import styles from "../statistic/Statistics.module.css";
import PropTypes from "prop-types";

const Statistics = ({ title }) => {
  return (
    <section className={styles.section}>
      <h2 className="title">{title}</h2>

      <ul className={styles.list}>
        {stats.map((stat) => (
          <StatisticsItem stat={stat} key={stat.id} />
        ))}
      </ul>
    </section>
  );
};

export default Statistics;
Statistics.defaultProps = {
  title: "Upload stats",
};
Statistics.propTypes = {
  title: PropTypes.string,
};
