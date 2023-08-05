import { StatisticsItem } from "../StatisticItem/StatisticsItem";
import s from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
    return <section className={s.statistics}>
        {title && <h2 className={s.title}>{ title}</h2>}

        <ul className={s.statsList}>
            {stats.map(({ id, label, percentage }) => {
                return <li key={id} className={s.statItem} style={{
                    padding: "10px",
                    color: "#fff",
                    backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
                    width: "50px",
                    display: 'flex',
                    alignItems: "center",
                    flexDirection: "column"
                }}>
                    <StatisticsItem
                        label={label}
                        percentage={percentage}
                    />
                </li>

            })}

        </ul>
   </section>
}