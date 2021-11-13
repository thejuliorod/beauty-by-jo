//contact page - https://booksy.com/en-us/p/contact 




//first schedule appointment modal doesn't need a back button
//add the price to the preconfirmation and confirmation 
//the modal's background should be the home page



//After MVP
//the four pictures at the bottom of the home page should have titles for example eye lashes and they should be
//clickable so that you go to that specific page 





//TESTIMONIALS
//the person should specify the service they received 
//https://cdn.dribbble.com/users/3100395/screenshots/9333269/media/cf3593e3553e48956bda98823abdd55a.png?compress=1&resize=1600x1200



//LASHES
//RECOMMEND TO JORDAN TO HAVE A FAQ FOR EACH PAGE 
//Accordion menu 
//FAQ title 



import { useState } from "react"
import { BrowserRouter as Browser, Switch, Route } from "react-router-dom"
import {Helmet} from "react-helmet";
import "react-datetime/css/react-datetime.css";

import Home from "./pages/Home"
import Header from "./components/Header"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import SignIn from "./components/SignIn"
import CreateAccount from "./components/CreateAccount"
import AboutUs from "./pages/AboutUs"
import Beauty from "./pages/Beauty"
import MakeUp from "./pages/MakeUp"
import Lashes from "./pages/Lashes"
import Waxing from "./pages/Waxing"
import Eyebrow from "./pages/Eyebrow"
import Vagacial from "./pages/Vagacial"
import Facials from "./pages/Facials"
import Testimonials from "./pages/Testimonials"
import Policies from "./pages/Policies"
import Contact from "./pages/Contact"



import '@popperjs/core'
import 'bootstrap/dist/js/bootstrap'  //bootstrap uses popperjs 

import "./styles/global.scss"


function App() {

 

  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Beauty By Jo</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Browser>

        <Header/>
        <NavBar/>
        <Switch>
          <Route path="/" exact={true} component={Home}/>
          <Route path="/about-us"  component={AboutUs}/>
          <Route path="/beauty" component={Beauty}/>
          <Route path="/make-up" component={MakeUp}/>
          <Route path="/lashes" component={Lashes}/>
          <Route path="/waxing" component={Waxing}/>
          <Route path="/eyebrow" component={Eyebrow}/>
          <Route path="/vagacial" component={Vagacial}/>
          <Route path="/facials" component={Facials}/>
          <Route path="/testimonials" component={Testimonials}/>
          <Route path="/policies" component={Policies}/>
          <Route path="/signin" component={SignIn}/>
          <Route path="/create-account" component={CreateAccount}/>
          <Route path="/contact" component={Contact}/>
          
        </Switch>
      <Footer/>
      </Browser>   
    </div>
  );
}

export default App