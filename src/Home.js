import React, { Component } from 'react'
import './Gallery1.css'

class Home extends Component {

  navigateTo = (event) => {
    event.preventDefault()
    this.props.navigate('Gallery2')
  }

  render () {
    return <div>
    <header>
    <h1>The Westland</h1>
    <h2>An Upscale Eatery in Historic Hyde Park North</h2>
    </header>
      <div className='gallery-image-box'>
      <div className='gallery-image'><a onClick={this.navigateTo} href='#'><img src='./images/breakfast/donuts.jpg'/>Breakfast</a></div>
      <div className='gallery-image'><a onClick={this.navigateTo} href='#'><img src='./images/lunch/garden-salad.jpg'/>Lunch Specials</a></div>
      <div className='gallery-image'><a onClick={this.navigateTo} href='#'><img src='./images/appetizers/cheese-plate.jpg'/>Appetizers</a></div>
      <div className='gallery-image'><a onClick={this.navigateTo} href='#'><img src='./images/dinner/pork-chop.jpg'/>Entrees</a></div>
      <div className='gallery-image'><a onClick={this.navigateTo} href='#'><img src='./images/beverages/blueberry-gin.jpg'/>Beverages</a></div>
      <div className='gallery-image'><a onClick={this.navigateTo} href='#'><img src='./images/dessert/pound-cake.jpg'/>Dessert</a></div>
    </div>
    </div>
  }
}

export default Home
