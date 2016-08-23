import React, { Component } from 'react'
import './Gallery2.css'

class Gallery2 extends Component {
  /*navigateToGallery1 = (e) => {
    e.preventDefault()
    this.props.navigate('Gallery1')
  }*/
  render () {
    return
    <div>
    <header>
    <div><h1>Breakfast</h1></div>
    </header>
    <div className='main-content'>
    <sidebar>
    <ul>
    <li><a href=''><img src='./images/breakfast/donuts.jpg'/>Breakfast</a></li>
    <li><a href=''><img src='./images/lunch/garden-salad.jpg'/>Lunch Specials</a></li>
    <li><a href=''><img src='./images/appetizers/cheese-plate.jpg'/>Appetizers</a></li>
    <li><a href=''><img src='./images/dinner/pork-chop.jpg'/>Entrees</a></li>
    <li><a href=''><img src='./images/beverages/blueberry-gin.jpg'/>Beverages</a></li>
    <li><a href=''><img src='./images/dessert/pound-cake.jpg'/>Dessert</a></li>
    </ul>
    </sidebar>
    <content>
    <div className='gallery-image'><a onClick={this.navigateToGallery1} href='#'><img src='./images/breakfast/assorted-pastries.jpg'/>Assorted Pastries</a></div>
    <div className='gallery-image'><a href=''><img src='./images/breakfast/chicken-n-waffles.jpg'/>Chicken and Waffles</a></div>
    <div className='gallery-image'><a href=''><img src='./images/breakfast/donuts.jpg'/>Donuts</a></div>
    <div className='gallery-image'><a href=''><img src='./images/breakfast/granola-fruit.jpg'/>Granola and Fruit</a></div>
    <div className='gallery-image'><a href=''><img src='./images/breakfast/latte.jpg'/>Latte</a></div>
    <div className='gallery-image'><a href=''><img src='./images/breakfast/strawberry-toast.jpg'/>Toast with Strawberry Jam</a></div>
    </content>
    </div>
    </div>
  }
}

export default Gallery2
