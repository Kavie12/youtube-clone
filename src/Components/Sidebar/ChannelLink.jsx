import Link from "./Link";

const ChannelLink = props => {
    return (
        <Link to={props.to} text={props.text}>
            <img src={props.img} alt="channel_img" className='w-6 rounded-full' />
        </Link>
    )
}

export default ChannelLink;