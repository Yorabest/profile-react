import s from "./FriendItem.module.css";

export const FriendItem = ({ avatar, name, isOnline }) => {
    return <>
        <span className={isOnline ? s.green : s.red }></span>
        <img src={avatar} alt="User avatar" width="100" />
        <p>{name}</p>
    
    </>
}