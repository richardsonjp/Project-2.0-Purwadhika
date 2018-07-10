import React, { Component } from 'react';
import '../../src/App.css';
import Link from 'react-router-dom/Link';

import Fade from 'react-reveal/Fade';

class Hero extends Component{
    render() {
        return (
    <div className="hero">
    <div className="container">
      <div className="row"  >
      <Fade>
        <div className="col-md-12">
          <a className="hero-brand" title="kikipipi"><Link to="/"><img alt="Kikipipi Logo" src="img/kipilogo.png" width="10%" height="10%"/></Link></a>
        </div>
      </Fade>
      </div>

      <div className="texthome">
        <Fade><h1>
            Personalise your streets
          </h1></Fade>
        
        <Fade>
        <p className="tagline">
          Order now!
        </p>
        </Fade>
      </div>
    </div>
  </div>
        )
    }
}


export default Hero