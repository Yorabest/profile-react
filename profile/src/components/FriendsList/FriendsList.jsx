import { FriendItem } from "../FriendItem/FriendItrm"
import s from "./FriendsList.module.css"
export const FriendsList = ({ friends }) => {
    return <ul>
        {(friends.map(({id, avatar, name, isOnline }) => {
            return <li key={id} className={s.FriendItem}>
                <FriendItem
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline}
                />
            </li>
        }))}
    </ul>
}