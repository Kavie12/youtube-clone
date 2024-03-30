import SidebarLink from "./SidebarLink";

const ChannelLink = props => {
    return (
        <SidebarLink to={props.to} text={props.channel}>
            <img src={'/Profile/' + props.profile} alt="channel_img" className='w-6 rounded-full' />
        </SidebarLink>
    )
}

export default ChannelLink;