import user from '../user.json'
import { Profile } from "./Profile/Profile"

const { avatar, username, tag, location, stats } = user

export const App = () => {
    return <Profile
                avatar={avatar}
                username={username}
                tag={tag}
                location={location}
                stats={stats}
    />
}