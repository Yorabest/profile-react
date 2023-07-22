export const Stat = ({label, quantity}) => {
    return <>
        <span className="label">{label}</span>
        <span className="quantity">{quantity}</span>
    </>
}