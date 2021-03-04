import React from 'react'
import { connect } from "react-redux";
import { getArtist } from '../Redux/actions'
import store from '../Redux/store'
import ArtistDetails from './card'
import './scss/index.scss'
class Index extends React.Component {
  state = {
    artist_name: ''
  }
  SetArtist = async (event) => {
    await this.setState({ artist_name: event.target.value })
  }
  ArtistDetails = () => {
    store.dispatch(getArtist(this.state.artist_name))
  }
  render() {
    console.log("Artist",this.props.artist)
    return (
      <div className="container">
        <form>
          <div className="inner-form">

            <div className="input-field second-wrap">
              {
                this.props.artist === {} ?
                  <input id="search" type="text" placeholder="Enter Artist Name" onChange={this.SetArtist} />
                  :
                  <input id="search" type="text" placeholder="Enter Artist Name" defaultValue={this.props.artist.name} onChange={this.SetArtist} />

              }
            </div>
            <div className="input-field third-wrap">
              <button className="btn-search" type="button" onClick={this.ArtistDetails}>
                <svg className="svg-inline--fa fa-search fa-w-16" aria-hidden="true" data-prefix="fas" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                </svg>
              </button>
            </div>
          </div>
        </form>
        {this.props.artist === null ?
          <div></div>
          :
          <div>
          <h3 className='result'>1 Result Found for {this.props.artist.name}</h3>
        <ArtistDetails data={this.props.artist} />
        </div>}
      </div>

    )
  }
}

const mapStateToProps = (state) => ({


  artist: state.data.artist


})

export default connect(mapStateToProps, { getArtist })(Index);