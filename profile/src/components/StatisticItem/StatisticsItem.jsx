export const StatisticsItem = ({label, percentage}) => {
    return <>
        <span>{ label}</span>
        <span>{percentage}%</span>
    </>
}