import ChannelLink from './ChannelLink';
import { useEffect, useState } from 'react';

const SubscriptionsLinks = props => {
    const [subData, setSubData] = useState([]);

    useEffect(() => {
        fetch('/Data/SubscriptionData.json')
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then(data => {
                setSubData(data);
                props.setCount(data.length);
            })
            .catch(error => console.error('Error fetching data: ', error));
    }, []);

    return (
        <>
            {
                props.showMore ?
                    subData.map((sub, index) => (
                        <ChannelLink key={index} profile={sub.profile} to={"/" + sub.channelusername} channel={sub.channel} />
                    )) :
                    subData.slice(0, 7).map((sub, index) => (
                        <ChannelLink key={index} profile={sub.profile} to={"/" + sub.channelusername} channel={sub.channel} />
                    ))
            }
        </>
    )
}

export default SubscriptionsLinks;