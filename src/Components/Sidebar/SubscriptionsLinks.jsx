import ChannelLink from './ChannelLink';
import SubscriptionData from "../../Data/SubscriptionData.json";


const SubscriptionsLinks = props => {
    props.setCount(SubscriptionData.length);
    return (
        <>
            {
                props.showMore ?
                    SubscriptionData.map((sub, index) => (
                        <ChannelLink key={index} profile={sub.profile} to={sub.to} text={sub.text} />
                    )) :
                    SubscriptionData.slice(0, 7).map((sub, index) => (
                        <ChannelLink key={index} profile={sub.profile} to={sub.to} text={sub.text} />
                    ))
            }
        </>
    )
}

export default SubscriptionsLinks;