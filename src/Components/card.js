import React from 'react'
import { Card, Avatar } from 'antd';
import './scss/card.scss'

const { Meta } = Card;
export default class ArtistDetails extends React.Component {
    ToEvents = (name) => {
        window.location = `/events/${name}`
    }
    render() {
        const item = this.props.data
        return (


            <Card
                onClick={() => this.ToEvents(item.name)}
                className='card'
                cover={
                    <img
                        alt="example"
                        src={item.image_url}
                    />
                }

            >
                <Meta
                    avatar={<Avatar src={item.image_url} />}
                    title={item.name}
                    description={item.facebook_page_url}
                />
            </Card>
        )
    }
}
