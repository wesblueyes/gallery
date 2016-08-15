import React, { Component } from 'react'
import './App.css'
import './Gallery1.css'
import Album from './albumPreview'
import Links from './links.json'

// begin class definition of Home component. Simple component that demonstrates
// how props passed from App.js can be accessed and utilized for navigation. A random
// image from Unsplash it is presented with a simple <h1>, <p>, and <button> elements
// returned from the render function, all contained within a <div>. Remember that
// all return statements can only return one top level value such as a <div>, but that
// <div> can contain as many elements as you would like. When the button is clicked,
// the navigate function passed down from App.js is called with an argument of 'page'
// which allows the currentScreen to be set to 'page' in the app. This causes the
// page to re-render with the <Page /> element displayed instead of <Home />
class Home extends Component {
  // function takes a click event , prevents the default action of a click from occuring
  // and passes the argument 'page' back to the App.js function navigateToPage
  // which then calls setState() to give the value 'page' to the currentScreen state
  // key. This causes the page to re-render with <Page /> view displayed due to
  // the switch statement executing on the updated state
  navigateTo = (event) => {
    event.preventDefault()
    this.props.navigate('page')
  }

  render () {
    return <div>
    <header>
    <h1>The Westland</h1>
    <h2>An Upscale Eatery in Historic Hyde Park North</h2>
    </header>
    <div className='gallery-image-box'>
    //const albums = links.galleries.map((links, index) => {
    //  return <albumPreview />
    <div className='gallery-image'>
    <a onClick={this.navigateTo} href='#'><img src={this.props.albumImage}/>{this.props.albumName}</a>
    </div>
    })
    </div>
  }
}
export default Home
