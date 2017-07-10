import React, { Component } from 'react';
import './App.css';
import Image from './Image'


class Dancers extends Component {
  constructor(props, context){
    super(props, context);
    this.createImage = this.createImage.bind(this);
    this.createImages = this.createImages.bind(this);
  }
  
  createImage(image) {
    // console.log('createImage')
    return <Image source={image} key={image} />;
  };
  
  createImages(images) {
    // console.log('createImages')
    return images.map(this.createImage);
  };

  
  render() {
    // a = CSV.read('./dancers.csv')
    // a = a.map {|x| {name_first: x[0], name_last: x[1], web_url: x[2], photo_url: x[3], role: x[4], bio: x[5]}}


    const DANCERS_ARRAY =[{name_first: "Abril",
     name_last: "Anchondo Reynaga",
     web_url: null,
     photo_url: null,
     role: "Dancer",
     bio: null},
    {name_first: "Akemi",
     name_last: "Kinukawa",
     web_url: "www.swingdanceastoria.com",
     photo_url: "https://i1.wp.com/www.swingdanceastoria.com/wp-content/uploads/2016/02/pause.jpg",
     role: "Founder, Artisitc Director",
     bio: 
      "Akemi Kinukawa is a professional Lindy Hop/Swing dance instructor, choreography, and performer. Ms. Kinukawa has taught and performed at various New York events, including Midsummer Night Swing and Jazz at Lincoln Center. As a teaching artist, she is passionate about sharing the joy of partner dancing with students from diverse backgrounds. She currently teaches social dancing to elementary and high school students in New York City public schools as well as after-school programs. Ms. Kinukawa also teaches at universities, ESL and senior citizens’ centers, as well as at major dance studios including; You Should Be Dancing Studios, Sandra Cameron Dance Center, and Brooklyn Swings. Ms. Kinukawa is the founder of Swing Dance Astoria, an organization dedicated to creating a friendly, diverse swing dance community in Astoria/LIC and other parts of Queens."},
    {name_first: "Alice",
     name_last: "Gabrielle Roschuni",
     web_url: null,
     photo_url: null,
     role: "Dancer",
     bio: null},
    {name_first: "Allison",
     name_last: "Raven",
     web_url: null,
     photo_url: "https://1drv.ms/i/s!AjRFNTgOLRl_ka87MCeZp5EoGds2_Q",
     role: "Chorus Dancer / Administrator",
     bio: 
      "As a native New Yorker, Allison has enjoyed a lifelong passion for the empowering electricity and poetic concepts of the performing arts. She has spent the last 14 years serving as a Development fundraiser for nonprofit organizations such as Manhattan Theatre Club, Primary Stages, Roundabout Theatre Company, and The Greenhouse Ensemble. Her interest in various styles of dance led her to Paul Pellicoro’s DanceSport, where she studies Lindy Hop with Milo Saidl, Argentine Tango with Victoria Codru and Ballroom with Sandra Cameron. In 2015, she competed in the group category at Manhattan Dance Championships and she is very excited to continue to build her creative experience as a chorus line member of Project Connect."},
    {name_first: "Alyssa",
     name_last: "Nasca",
     web_url: null,
     photo_url: null,
     role: "Dancer",
     bio: null},
    {name_first: "Brandon",
     name_last: "Barker",
     web_url: null,
     photo_url: null,
     role: "Dancer",
     bio: null},
    {name_first: "Briana",
     name_last: "Whyte Harris",
     web_url: null,
     photo_url: null,
     role: "Script Writing / Dancer",
     bio: null},
    {name_first: "Byron",
     name_last: "Hon",
     web_url: null,
     photo_url: null,
     role: "Photography",
     bio: null},
    {name_first: "Chad", name_last: "Mills", web_url: null, photo_url: null, role: "Dancer", bio: null},
    {name_first: "Christina",
     name_last: "Farley",
     web_url: null,
     photo_url: null,
     role: "Logo Design",
     bio: null},
    {name_first: "Galit",
     name_last: "Weinfeld",
     web_url: "galitdances.com",
     photo_url: "https://drive.google.com/file/d/0B5oYOvYuwFOTcFFSUUdhajB2cDQ/view?usp=drivesdk",
     role: "Dancer",
     bio: null},
    {name_first: "Gianna ",
     name_last: "Messina",
     web_url: null,
     photo_url: null,
     role: "Press Release",
     bio: null},
    {name_first: "Jake",
     name_last: "Park",
     web_url: "parkjake.com",
     photo_url: "http://parkjake.com/images/jakepark.jpg",
     role: "Dancer / Web Developer",
     bio: 
      "Jake Park was born and raised in New York City, and graduated as an engineer from Columbia University. He studied Lindy Hop with Nathan Bugh and Evita Arce, and has competed with Nathan's choreography at the International Lindy Hop Championships. He is a member of the Big Apple Lindy Hoppers performing works by Frankie Manning and Ryan Francois, and is an avid social dancer."},
    {name_first: "Jessica",
     name_last: "Webb",
     web_url: null,
     photo_url: null,
     role: "Dancer",
     bio: null},
    {name_first: "Joy",
     name_last: "Glad",
     web_url: null,
     photo_url: null,
     role: "Fashion Show",
     bio: null},
    {name_first: "Julia ",
     name_last: "Loving",
     web_url: null,
     photo_url: null,
     role: "Dancer",
     bio: null},
    {name_first: "Kathy",
     name_last: "Rollo",
     web_url: null,
     photo_url: null,
     role: "Venue Coordinator",
     bio: null},
    {name_first: "Kristen",
     name_last: "Seavey",
     web_url: null,
     photo_url: null,
     role: "Actor / Dancer",
     bio: null},
    {name_first: "Krisy",
     name_last: "Han",
     web_url: null,
     photo_url: null,
     role: "Hair Make-up",
     bio: null},
    {name_first: "Lewi",
     name_last: "Gilamichael",
     web_url: null,
     photo_url: null,
     role: "Dancer",
     bio: null},
    {name_first: "Lindsey",
     name_last: "Wells",
     web_url: null,
     photo_url: null,
     role: "Dancer",
     bio: null},
    {name_first: "Margaret",
     name_last: "Griffith",
     web_url: null,
     photo_url: null,
     role: "Sound",
     bio: null},
    {name_first: "Milo", name_last: "Saidl", web_url: null, photo_url: null, role: "Dancer", bio: null},
    {name_first: "Morgan", name_last: "Lee", web_url: null, photo_url: null, role: "Dancer", bio: null},
    {name_first: "Odysseus",
     name_last: "Bailer",
     web_url: null,
     photo_url: null,
     role: "Actor / Dancer",
     bio: null},
    {name_first: "Sammy",
     name_last: "Coldman",
     web_url: null,
     photo_url: null,
     role: "Dancer",
     bio: null},
    {name_first: "Seigo",
     name_last: "Yokomine",
     web_url: null,
     photo_url: null,
     role: "Videography",
     bio: null},
    {name_first: "Sharon ",
     name_last: "Chin",
     web_url: null,
     photo_url: "use FB Profile picture?",
     role: "Dancer/ Management Consultant",
     bio: 
      "Sharon Chin hails from Queens and learned to swing dance with the Columbia University swing dance club. Sharon is primarily a social dancer- engaged in swing, salsa, and tango. Sharon has performed choreography under the direction of Laura Jeffers, Paolo  Lanna,  and Steven Plummer. Sharon is also a modern dance enthusiast and has studied Graham technique. Professionally she is a management consultant with PwC and a board member of the Global Language Project. She is excited to connect across generations through dance under Project Connect. "},
    {name_first: "Steffanie",
     name_last: "Shapiro",
     web_url: "dancewellny.com",
     photo_url: null,
     role: "Actor / Dancer",
     bio: null},
    {name_first: "Steven",
     name_last: "Plummer",
     web_url: null,
     photo_url: null,
     role: "Dancer",
     bio: null},
    {name_first: "Taylor",
     name_last: "Gillhouse",
     web_url: null,
     photo_url: null,
     role: "Dancer",
     bio: null}];


  // const DANCERS_ARRAY = [
    //   {name_first: "Alpha", name_last: "AbleLast", url: "url_1", url_text:"url_text1", img_url: "pic_1.jpeg"},
    //   {name_first: "Bravo", name_last: "BakerLast", url: "url_2", url_text:"url_text2", img_url: "pic_2.jpeg"},
    //   {name_first: "Charlie", name_last: "CharlieLast", url: "url_3", url_text:"url_text3", img_url: "pic_1.jpeg"},
    //   {name_first: "Delta", name_last: "DogLast", url: "url_4", url_text:"url_text4", img_url: "pic_1.jpeg"},
    //   {name_first: "Echo", name_last: "EasyLast", url: "url_5", url_text:"url_text5", img_url: "pic_2.jpeg"},
    //   {name_first: "Foxtrot", name_last: "FoxLast", url: "url_6", url_text:"url_text6", img_url: "pic_2.jpeg"},
    //   {name_first: "Golf", name_last: "GeorgeLast", url: "url_7", url_text:"url_text7", img_url: "pic_1.jpeg"},
    //   {name_first: "Hotel", name_last: "HowLast", url: "url_8", url_text:"url_text8", img_url: "pic_2.jpeg"},
    // ];
        
    return (
      <div id="dancers" className="dancers-list">
      
      {DANCERS_ARRAY.map(function(dancer, i) {
        return (
          <div className="dancer" key={i}>
            {/* <a href="{dancer.url}">
              {this.createImage(dancer.photo_url)}
            </a> */}
              
            <div>{dancer.name_first} {dancer.name_last}</div>
            <a href="{dancer.url}">{dancer.url_text}</a>
          </div>
        )
      }, this)}

            
      </div>
      
    );
  }
}

export default Dancers;