import React from 'react'
import { LeftOutlined } from '@ant-design/icons';
import ArtistDetails from './card'
import { Link } from 'react-router-dom';
import { List, Card,Row,Col } from 'antd';
import AxiosInstance from '../Apis/Artistapi'
import { connect } from "react-redux";
import './scss/event.scss'
class Events extends React.Component {
    state = {
        eventdetails: []
    }
    Onback=()=>{
        window.location='/'
    }
    async componentDidMount() {
        console.log(this.props)
        await AxiosInstance.getArtistevents(this.props.match.params.name).then(response => {
            this.setState({
                eventdetails: response.data,
                isLoading: false
            });
            console.log('Events: ', response.data)
        })
            .catch((error) => {
                console.error(error);
            })
        console.log(this.state.eventdetails)

    }
    render() {
        return (
            <div className='container'>
                <Link className='link' onClick={this.Onback}><LeftOutlined /> Back to Result</Link>
                <ArtistDetails data={this.props.artist} />
                <h3> {this.state.eventdetails.length} Upcoming Events</h3>
                <List
                    grid={{ gutter: 16, column: 3 }}
                    dataSource={this.state.eventdetails}
                    renderItem={item => (
                        <List.Item>
                            <Card title="EVENTS DETAILS" style={{height:300}}>
                              <Row>
                                  <Col span={15}>
                                      <p className='text'>Country</p>
                                      <p>{item.venue.country}</p>
                                  </Col>
                                  <Col offset={2} span={7}>
                                  <p className='text'>City</p>
                                      <p>{item.venue.city}</p></Col> 
                              </Row>
                              <Row>
                                  <Col span={15}>
                                      <p className='text'>Venue</p>
                                      <p>{item.venue.name}</p>
                                  </Col>
                                  <Col offset={2} span={7}>
                                  <p className='text'>Date</p>
                                      <p>{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(item.datetime)))}</p></Col> 
                              </Row>
                              
                                </Card>
                        </List.Item>
                    )}
                />

            </div>

        )
    }
}

const mapStateToProps = (state) => {

    return {
        artist: state.data.artist
    }
}

export default connect(mapStateToProps, {})(Events);