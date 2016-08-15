import React, { Component } from 'react'
import './App.css'
import './Gallery2.css'
import './links.json'

// simple component that demonstrates a component with a nested component that
// takes props passed from the App.js and then continues to pass them down to
// the nested component as props in order to allow access to pass information
// from a component back to the App in order to update/influence the state
class Page extends Component {
  // function takes a click event , prevents the default action of a click from occuring
  // and passes the argument 'home' back to the App.js function navigateToPage
  // which then calls setState() to give the value 'home' to the currentScreen state
  // key. This causes the page to re-render with <Home /> view displayed due to
  // the switch statement executing on the updated state
  navigateTo = (event) => {
    event.preventDefault()
    this.props.navigate('gallery3')
  }
  // <Picture /> component is introduced and the function passed from App.js
  // is passed as props to the Picture component via the
  // "navigate={this.props.navigate}"
  render () {
    return <div>
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
    //let categoryImage =
    // Get category from Home eventTarget content
    // Is it equal to JSON Category?
    // If it is, get "photo: variable"
    //let categoryContent =
    // If equal to JSON Category
    // Get "name: variable"
    // Create element div.gallery-image for all elements in that category
    /*render: function() {
        return*/<div>
        <div className='gallery-image'><a onClick='{this.props.image}' href='#'><img src='this.props.name'/>Name</a></div>
        </div>
    }
}
    </div>
    </div>
  }
}
export default Page
