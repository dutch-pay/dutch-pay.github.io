import React from 'react'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDivide } from '@fortawesome/free-solid-svg-icons'

import 'App.scss'
import DutchForm from 'components/DutchForm'
import Footer from 'components/Footer'


function App() {

  function scrollToForm() {
    document.getElementById("dutch-form").scrollIntoView({
      behavior: 'smooth'
    })
  }

  const renderIntroduction = () => (
    <div id="introduction">
      <header className="header">
        <h1>
          <FontAwesomeIcon icon={faDivide}
                           className="App-logo"
                           alt="logo"
                           size="lg"
                           spin
                           />
          &nbsp;&nbsp;&nbsp;
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <span>Split bills with friends!</span>
        </h1>

        <p className="p-3">
        It's not a simple calculator that lets you know how much you have to pay for a bill paid by one person.<br/>
        <span className="highlight">Dutch pay</span> will calculate and split every bills paid by multiple people.<br/><br/>
        <i className="quote">
          I went to a trip with my friends and each of us spent different amount of money for buying food, drinks and etc. After the trip, I was struggled with how to spilt all the bills. At that moment, I used this and it was super easy. What I did was just entering all the bills and DutchPay solved the problem!
          <br/>
          - Aree
        </i>
        <br/>
        <br/>
        Enter every bills, we will let you know<br/>
        how to split bills with <span className="highlight">minimum transaction!</span><br/>
        </p>
      </header>

      <div>
        <Button className="start-button"
                size="lg"
                onClick={scrollToForm}>Get started!</Button>
      </div>
    </div>
  )

  const getCompressedURL = () => {
    const contentParamKey = 'c'
    const params = new URLSearchParams(window.location.search)

    return params.has(contentParamKey) ? params.get(contentParamKey) : ''
  }

  return (
    <div className="App">

      { renderIntroduction() }

      <DutchForm compressedURL={getCompressedURL()} />

      <div id="kofi">
        <span>Did you enjoy dutch paying?</span><br/>
        <a href='https://ko-fi.com/G2G22LHXS'
           target='_blank'>
          <img height='36'
               style={{ 'border':'0px', 'height':'36px' }}
               src='https://cdn.ko-fi.com/cdn/kofi2.png?v=2'
               border='0'
               alt='Buy Me a Coffee at ko-fi.com' />
        </a>
      </div>

      <Footer/>

    </div>
  );
}

export default App;
