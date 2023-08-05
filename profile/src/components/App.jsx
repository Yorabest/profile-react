// import user from '../user.json'
import data from '../data.json';
import friends from "../friends.json";
// import { Profile } from "./Profile/Profile"
import { Statistics } from './Statistics/Statistics';
import { FriendsList } from './FriendsList/FriendsList';

// const { avatar, username, tag, location, stats } = user

export const App = () => {
    // return <Profile
    //             avatar={avatar}
    //             username={username}
    //             tag={tag}
    //             location={location}
    //             stats={stats}
    // />
    return <>
    <Statistics
        stats={data}
        title="Upload stats"
        />
        <FriendsList
            friends={friends}
        />
        </>
}