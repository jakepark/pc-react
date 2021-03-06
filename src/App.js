import React, { Component } from 'react';
import logo from './assets/dancers.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Dancers from './Dancers';

class App extends Component {
  render() {
    return (      
      <div id="root">
        <div className="background-color">
          <nav className="clearfix container">
            <div className="logo-main">
              <a href="#">Project Connect</a>
            </div>
          
            <div className="logo">
              <a href="#"><img id="logo" src={logo} alt=""></img></a>
            </div>
            
            <div className="links hidden-xs">
              <div className="pull-right">
                <a className="mission" href="#mission" >
                  Mission
                </a>
                <a className="mission" href="#performances" >
                  Performances
                </a>
                <a className="dancers" href="#dancers" >
                  Dancers
                </a>
                <a className="sponsors" href="#sponsors" >
                  Sponsors
                </a>
                <a className="founder" href="#founder" >
                  Founder
                </a>
                <a className="contact" href="#contact" >
                  Contact
                </a>
                <a className="donate" href="#donate" >
                  Donate
                </a>
              </div>
            </div>
          
            <div className="links visible-xs">
              <div className="pull-right">
                <a className="mission" href="#mission" >
                  Mission
                </a>
                <a className="mission" href="#performances" >
                  Performances
                </a>
                <a className="dancers" href="#dancers" >
                  Dancers
                </a>
                <a className="sponsors" href="#sponsors" >
                  Sponsors
                </a>
                <a className="founder" href="#founder" >
                  Founder
                </a>
                <a className="contact" href="#contact" >
                  Contact
                </a>
                <a className="donate" href="#donate" >
                  Donate
                </a>
              </div>
            </div>
          </nav>
        </div>
        
        <main className="content container">
          <div id="mission"><h1>Mission Statement</h1>
            <p>Project Connect brings an interactive and participatory swing dance show to nursing homes and senior community centers in order to 1) bring people together across generations through swing dancing and music, and 2) bring joy to those who might have limited access to art and cultural activities. The show is one hour long and will be performed twice during the fiscal year, at nursing homes and senior community centers in Queens and Manhattan. With the permission of the facility, the show will be open to the public, including seniors’ friends and families.</p>
            <p>Project Connect ensures that its performance team consists of a diverse group of professional and volunteer dancers with different levels of skills, experiences and backgrounds. By working together towards a common goal, we hope that dancers will develop closer relationships with one another, and the process of preparing the show will nurture the culture of sharing, collaboration and inclusivity.</p>
            
            <p>Please see the <a target="_blank" href="https://drive.google.com/file/d/0B6Gaj1w4AkMRbTlKTEtVMFVPdWs/view">press release</a> for more information.</p>
          </div>
          <div id="performances"><h1>Performances</h1>
            <ul>
              <h3>Upcoming Show Dates:</h3>

              <li>
                <p>
                July 23rd at 2:30pm<br></br>
                <a target="_blank" href="http://www.chapinhome.org">Chapin Home for the Aging</a><br></br>
                165-01 Chapin Parkway<br></br>
                Jamaica, NY  11432<br></br>
                </p>
              </li>
              
              <li>
                <p>
                August 16th at 2pm (A smaller and shorter version of the program)<br></br>
                <a target="_blank" href="http://www.dorotusa.org">DOROT</a><br></br>
                171 West 85th Street, New York, NY 10024 <br></br>
                </p>
              </li>
              
              <li>            
                <p>
                  October (TBA)
                </p>
              </li>
            </ul>
            <ul>
              <h3>Past Performances:</h3>
              <li>
                <p>
                  June 27th at 6:30pm<br></br>
                  Midsummer Night Swing at Lincoln Center<br></br>
                  <div className="wrapper">
                    <div className="h_iframe">
                      <iframe height="2" width="2" src="https://www.youtube.com/embed/5Y66rBRGXCw" frameborder="0" allowfullscreen></iframe>
                    </div>
                  </div>
                </p>
              </li>
            </ul>
          </div>
          
          <div id="dancers"><h1>Dancers</h1>
            <Dancers/>
          </div>
          
          <div id="sponsors"><h1>Sponsors</h1>
          
            <p>Project Connect is made possible by the Queens Council on the Arts with public funds from the New York City Department of Cultural Affairs in partnership with the City Council.</p>
            
            <ul>Additional thanks goes to:
              <li>
                <a href="http://youshouldbedancing.nyc/">You Should Be Dancing..!</a>
              </li>
              <li>
                <a href="https://www.facebook.com/modeljvintage/">Model J Vintage</a>
              </li>
            </ul>
          </div>
          
          <div id="founder"><h1>Founder</h1>
            <p>
              Akemi Kinukawa is a professional Lindy Hop/Swing dance instructor, choreography, and performer. Ms. Kinukawa has taught and performed at various New York events, including Midsummer Night Swing and Jazz at Lincoln Center. As a teaching artist, she is passionate about sharing the joy of partner dancing with students from diverse backgrounds. She currently teaches social dancing to elementary and high school students in New York City public schools as well as after-school programs. 
            </p>
            <p>
              Ms. Kinukawa also teaches at universities, ESL and senior citizens’ centers, as well as at major dance studios including; You Should Be Dancing Studios, Sandra Cameron Dance Center, and Brooklyn Swings. She is also the founder of Swing Dance Astoria, an organization dedicated to creating a friendly, diverse swing dance community in Astoria/LIC and other parts of Queens.
            </p>
          </div>
          
          <div id="contact"><h1>Contact</h1>
            <p>Please email us at <a href="mailto:danceprojectconnect@gmail.com">danceprojectconnect@gmail.com</a></p>
            
            <p>Project Connect is always looking for new volunteers with diverse backgrounds and experiences!  Whether you are a new or experienced dancer, or a person with skills that can improve the project,  please fill out the Volunteer Survey Form and let us know about you.</p><br></br>
            
            <button>
              <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSeLOy0cQ52jtyZE0qnh3MsYjUyWqlpGONHVBgkMVVeHe6wFRg/viewform?usp=sf_link">Volunteer Info Link</a>
            </button>
          </div>
          
          <div id="donate"><h1>Donate</h1>
            <div className="donate">
            <p>Click here to donate $25 to Project Connect Dancers!</p>
            
              <form id="donate-form" name="_xclick" action="https://www.paypal.com/fk/cgi-bin/webscr" method="post">
                <input type="hidden" name="cmd" value="_xclick"></input>
                <input type="hidden" name="business" value="danceprojectconnect@gmail.com"></input>
                <input type="hidden" name="item_name" value="Project Connect Dancers"></input>
                <input type="hidden" name="currency_code" value="USD"></input>
                <input type="hidden" name="amount" value="25.00"></input>
                <input type="image" src="http://www.paypal.com/en_US/i/btn/x-click-butcc-donate.gif" border="0" name="submit" alt="Make payments with PayPal - it's fast, free and secure!"></input>
              </form>
            </div>
          </div>
          
        </main>
      </div>
      
    );
  }
}

export default App;
