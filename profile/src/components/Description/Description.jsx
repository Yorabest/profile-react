import { DescriptionInfo } from "../DescriptionInfo/DescriptionInfo"

export const Description = ({ avatar, username, tag, location }) => {
    return <>
        <img
            src={avatar}
            alt="User avatar"
            className="avatar"
        />
        <DescriptionInfo
            nameOfClass='name'
            info={username}
        />
        <DescriptionInfo
            nameOfClass='tag'
            info={`@${tag}`}
        />
        <DescriptionInfo
            nameOfClass='location'
            info={location}
        />
    </>
}