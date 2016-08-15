import React, { Component } from 'react'
import './Gallery3.css'

class Gallery3 extends Component {

  navigateTo = (event) => {
    event.preventDefault()
    this.props.navigate('page')
  }

  render () {
    return (
<div>
<header>
<div className='back-nav'><a onClick={this.navigateTo} href='#'>&lt; Back to Album</a></div>
<h1>Donut</h1>
</header>
<div className='one-image'><a href=''><img src='./images/breakfast/donuts.jpg'/></a></div>
</div>
)
  }
}

export default Gallery3
