import React, { Component } from 'react';
import logo from './assets/dancers.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Dancers from './Dancers';

class App extends Component {
  render() {
    return (      
      <div id="root" className="container">
        <nav className="clearfix">
          <div className="logo-main">
            <a href="#" >Project Connect</a>
          </div>
        
          <div className="logo">
            <a href="#" ><img id="logo" src={logo} alt=""></img></a>
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
              <a className="contact" href="#contact" >
                Contact
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
              <a className="contact" href="#contact" >
                Contact
              </a>
            </div>
          </div>
        
        </nav>
      
        <main className="content">
          
          <h1 id="mission">Mission Statement</h1>
          
          <p>Project Connect brings an interactive and participatory swing dance show to nursing homes and senior community centers in order to 1) bring people together across generations through swing dancing and music, and 2) bring joy to those who might have limited access to art and cultural activities. The show is one hour long and will be performed twice during the fiscal year, at nursing homes and senior community centers in Queens and Manhattan. With the permission of the facility, the show will be open to the public, including seniors’ friends and families. </p>

          <p>Project Connect ensures that its performance team consists of a diverse group of professional and volunteer dancers with different levels of skills, experiences and backgrounds. By working together towards a common goal, we hope that dancers will develop closer relationships with one another, and the process of preparing the show will nurture the culture of sharing, collaboration and inclusivity.</p>

          
          <h1 id="performances">Performances</h1>
            <h3>Show Dates</h3>

            <p>
            July 23rd at 2:30pm<br></br>
            <a target="_blank" href="http://www.chapinhome.org">Chapin Home for the Aging</a><br></br>
            165-01 Chapin Parkway<br></br>
            Jamaica, NY  11432<br></br>
            </p>

            <p>
            August 16th at 2pm (A smaller and shorter version of the program)<br></br>
            <a target="_blank" href="http://www.dorotusa.org">DOROT</a><br></br>
            171 West 85th Street, New York, NY 10024 <br></br>
            </p>
            October (TBA)


            
          <h1 id="dancers">Dancers</h1>
          <Dancers/>
          
          <h1 id="sponsors">Sponsors</h1>
          
          <p>Project Connect is made possible by the Queens Council on the Arts with public funds from the New York City Department of Cultural Affairs in partnership with the City Council.</p>
          
          Additional thanks goes to You Should Be Dancing..! as a sponsor.<br></br>
          
          <a href="http://youshouldbedancing.nyc/">You Should Be Dancing..!</a>
          
          <h1 id="contact">Contact</h1>
            Please email contact at contact.com<br></br>
            
            <p>Project Connect is always looking for new volunteers with diverse backgrounds and experiences.  Whether you are a new or experienced dancer, or a person with skills that can improve the project,  please fill out the Volunteer Survey Form and let us know about you.</p><br></br>
            
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeLOy0cQ52jtyZE0qnh3MsYjUyWqlpGONHVBgkMVVeHe6wFRg/viewform?usp=sf_link">Volunteer Info Link</a>
          <h1>Footnote</h1>
          <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
          <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>

          
        </main>
      </div>
      
    );
  }
}

export default App;
