import { Description } from "../Description/Description"
import { Stat } from "../Stat/Stat"

export const Profile = ({ avatar, username, tag, location, stats:{followers, views, likes} }) => {
    return <div className="profile">
        <div className="description">
            <Description
                avatar={avatar}
                username={username}
                tag={tag}
                location={location}
            />
        </div>

        <ul className="stats">
            <li>
                <Stat
                    label='Followers'
                    quantity={followers}
                />
            </li>
            <li>
                <Stat
                    label='Views'
                    quantity={views}
                />
            </li>
            <li>
                <Stat
                    label='Likes'
                    quantity={likes}
                />
            </li>
        </ul>
    </div>
}