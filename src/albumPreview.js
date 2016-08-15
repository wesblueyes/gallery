import React, { Component} from 'react'

class albumPreview extends Component {
  render () {
    <div className='gallery-image'>
    <a onClick={this.navigateTo} href='#'><img src={this.props.links.albumImage}/>{this.props.links.albumName}</a>
    </div>
  }
}
albumPreview.propTypes = {
  albumImage: React.PropType.string,
  albumName: React.PropTyple.string
}
export default albumPreview
