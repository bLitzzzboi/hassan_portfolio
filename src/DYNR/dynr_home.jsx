import React from "react";
import dynr_image from "../images/dynr_full.jpg";
import video_food from "./find_food.mp4";
import mockup from "./phones_mockup.jpg";
import richierich from "./richierich.png";
import mrpopular from "./mrpopular.png";
import documentar from "./documentar.png";
import palette from "./palette.png";
// import find_food from "./find_food.gif";
// import reviews from "./reviews.gif";
import bar_graph from "./graph_bar.png";
import wireframes from "./wireframes.jpg";
import figma from "./figma_ss.png";
import logo_white from "./logo_white.jpg";
import logo_orange from "./logo_orange.png";


function DYNR() {
  return (
    <div className="header-content">
      <img src={dynr_image} alt="DYNR"/>
      <hr className="my-line" style={{ width: "79%", margin: "20px auto", borderColor: '#2c2c2c'  }} />

      <h1>DYNR</h1>
      <p>Tired of the never-ending cycle of “What should we eat?” Enter DYNR—your 
        foodie soulmate, ready to transform your dining decisions into an exciting 
        journey of flavors, fun, and a whole lot less stress. Built on solid UX 
        research and designed with you at the center of the experience, DYNR is 
        here to turn your meal choices into an engaging adventure.</p>

        <hr className="my-line" style={{ width: "79%", margin: "20px auto", borderColor: '#2c2c2c' }} />


      <h2>Welcome to DYNR: Your Culinary Adventure Awaits!</h2>
      <p>We all know the struggle: you're hungry, but the endless list of 
        restaurants leaves you scrolling forever. With DYNR, I set out to solve this 
        problem using a <b> User-Centered Design (UCD) </b> approach. I wanted to create 
        something that doesn’t just throw options at you, but curates them based on 
        your personal taste profile—one that learns from your preferences over time. 
        The result? A smart app that makes sure you never order something you won’t love again!</p>
    
      <div style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}>
        <img src={mockup} alt="DYNR" style={{ width: "79%", borderRadius:"0" }} />
      </div>

      <hr className="my-line" style={{ width: "79%", margin: "20px auto", borderColor: '#2c2c2c' }} />


      <h2>The Quest for Flavor: User-Centered Solutions</h2>
      <p>
      Research shows that we’re all feeling overwhelmed by choice. 
      Through user interviews and competitor analysis, I found that most 
      people want recommendations that cater specifically to their tastes. 
      Using A/B testing to refine the onboarding process, I crafted an experience 
      that’s quick, fun, and incredibly personalized. DYNR builds your Taste Profile 
      through machine learning, learning from your feedback with each new restaurant 
      visit and review.
      </p>
      <p>
      And it’s not just about choosing a place—it’s about choosing right. 
      DYNR helps you navigate restaurant options by suggesting places based on 
      what you love. It’s like having a food-savvy friend who always knows the 
      best spots!
      </p>

      <hr className="my-line" style={{ width: "79%", margin: "20px auto", borderColor: '#2c2c2c' }} />


      {/* <h2>How Does It Work?</h2>
      <p>
      Imagine if your taste buds could speak! DYNR builds a 
      Taste Profile just for you using cutting-edge machine learning. 
      Here’s how it works:
      </p> */}
      <ul>
          {/* <h3>Taste Profile Magic: </h3> */}
          {/* <hr className="my-line" style={{ width: "79%", margin: "20px auto", borderColor: '#2c2c2c' }} /> */}

          <div style={{ display: "flex", justifyContent: "center", margin: "20px 0", 
          fontSize:'6vh', fontFamily:'UltraBold', lineHeight:'1.2', paddingLeft:'10px', marginBottom:'70px'
          }} className="responsive-video-container">
          <video src="https://myportfoliobucket-hassan.s3.eu-north-1.amazonaws.com/find_food.mp4" style={{width:'25vh', marginRight:'20px'}} autoPlay loop muted playsInline className="app-video"></video>
          "From sushi to burgers, your taste is unique. DYNR curates personalized recommendations 
          that grow with you!"
          </div>
          {/* <hr className="my-line" style={{ width: "79%", margin: "20px auto", borderColor: '#2c2c2c' }} /> */}

          {/* <h3>Join the Foodie Community: </h3> */}
          {/* <div style={{ display: "flex", justifyContent: "center", margin: "20px 0,", 
          fontSize:'50px', fontFamily:'UltraBold', lineHeight:'1.2', paddingLeft:'10px', textAlign:'right',
          marginBottom:'70px'}}>
          
          "Your voice matters! Contribute your reviews and let your taste guide fellow 
          diners on their culinary adventures!"
          <img src={reviews} alt="Reviews" style={{ width: "33%", marginLeft:'20px' }} />
          </div>
          <hr className="my-line" style={{ width: "79%", margin: "20px auto", borderColor: '#2c2c2c' }} /> */}



          {/* <h3>Rewards and XP: </h3> */}
          {/* <div style={{ display: "flex", justifyContent: "center", margin: "20px 0,", 
          fontSize:'50px', fontFamily:'UltraBold', lineHeight:'1.2', paddingLeft:'10px',textAlign:'left',
          marginBottom:'70px'}}>
          <img src={reviews} alt="Reviews" style={{ width: "33%", marginRight:'20px' }} />
          Get rewarded for your taste! DYNR transforms dining into a game where every 
          review and new restaurant visit boosts your XP!
          </div> */}

      </ul>

      <hr className="my-line" style={{ width: "79%", margin: "20px auto", borderColor: '#2c2c2c' }} />


      <h2>Gamification & Rewards: UX Fun Meets Psychology</h2>
      <div style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}>
        <img src={richierich} alt="Richie Rich" style={{ width: "30%",transform: "rotate(-5deg)", margin: "0 10px" }} />
        <img src={documentar} alt="Documentar" style={{ width: "30%",transform: "rotate(5deg)", margin: "0 10px" }} />
        <img src={mrpopular} alt="Mr. Popular" style={{ width: "30%",transform: "rotate(7deg)", margin: "0 10px" }} />
      </div>
      <p>By integrating game mechanics into the app, DYNR uses the power of rewards to drive 
        repeated user engagement. Research into behavioral psychology shows that positive 
        reinforcement, such as XP and badges, leads to increased user retention. The more users 
        interact with DYNR, the more they are incentivized to continue using it through a 
        sense of achievement.</p>
      <p>
      Through prototyping and usability testing, I iterated on different reward mechanisms to 
      ensure users stayed motivated while navigating through the app’s interface. Early A/B 
      tests confirmed that users who received instant rewards were more likely to return to the 
      app, while long-term rewards like badges helped in fostering loyalty.
      </p>

      <hr className="my-line" style={{ width: "79%", margin: "20px auto", borderColor: '#2c2c2c' }} />


      <h2>A Feast for the Eyes</h2>
      <p>Now let’s talk about how we’ve designed DYNR to be as 
        delightful to use as it is to explore. Our carefully selected 
        color palette enhances your experience while reflecting the
        essence of the app:</p>

        <div style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}>
        <img src={palette} alt="DYNR" style={{ width: "45%", borderRadius:"0" }} />
      </div>

      <ul>
        <li>
          <h3>Golden Gate Bridge (#F74200): </h3>
          This vibrant hue represents passion and excitement, 
          mirroring the thrill of discovering a new restaurant. 
          It stimulates appetite and enthusiasm, making you feel 
          energized and ready for culinary exploration!
        </li>
        <li>
          <h3>Soft Cream (#F2F2E0): </h3>
          This calming shade provides a pleasant contrast, 
          creating a sense of balance and comfort. It reflects
          the inviting atmosphere of a cozy café, allowing users to 
          feel relaxed while they navigate their dining choices.
        </li>
        <li>
          <h3>Deep Charcoal (#2F2F2F): </h3>
          This strong, grounding color brings depth to the interface and 
          enhances readability. It evokes a sense of sophistication, 
          reminding users that DYNR is not just an app; it’s a stylish 
          companion for your dining adventures.
        </li>
      </ul>

      <p>
      The UI was designed with visual hierarchy and usability in mind, ensuring that 
      primary actions, such as viewing restaurant details or submitting reviews, are 
      intuitive and easy to find.
      </p>

      <hr className="my-line" style={{ width: "79%", margin: "20px auto", borderColor: '#2c2c2c' }} />

      <h2>The Design Process</h2>
      <ul>
        
        <li>
          
          <h3>Research and Insights:</h3>
          My design process was driven by qualitative and quantitative research. Surveys 
          and user interviews helped me understand the frustrations users face when choosing 
          a restaurant. This allowed me to craft a solution based on real needs and behaviors.
        <div style={{ display: "flex", justifyContent: "left", margin: "20px 0" }}>
        <img src={bar_graph} alt="Graph" style={{ width: "79%", borderRadius:"0" }} />
      </div>
        </li>
        <hr className="my-line" style={{ width: "79%", margin: "20px auto", borderColor: '#2c2c2c' }} />

        <li>
          <h3>Wireframes:</h3>
          Early wireframing helped define the structure of the app, focusing on content prioritization 
          and user flows. The goal was to reduce friction, ensuring users could easily navigate 
          between discovering restaurants, reading reviews, and building their profiles.
          <div style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}>
        <img src={wireframes} alt="WireFrames" style={{ width: "100%", borderRadius:"0" }} />
      </div>
        </li>
        <hr className="my-line" style={{ width: "79%", margin: "20px auto", borderColor: '#2c2c2c' }} />

        <li>
          <h3>Prototyping & User Testing:</h3>
          The prototype was tested with real users to simulate interactions, using interactive 
          elements and transitions that mimic real-world usage. Feedback was incorporated at every step, making sure that even the smallest interaction, 
          like selecting a dish or writing a review, felt smooth and intuitive. User tests revealed key insights 
          that allowed for final refinements to be made before the development phase.
          <div style={{ display: "flex", justifyContent: "left", margin: "20px 0", justifyContent: "center" }}>
        <img src={figma} alt="Figma" style={{ width: "79%", borderRadius:"0" }} />
      </div>
        </li>
        <hr className="my-line" style={{ width: "79%", margin: "20px auto", borderColor: '#2c2c2c' }} />

        <li>
          <h3>Logo Inspiration:</h3>
          The branding of DYNR was designed to be bold yet inviting. The logo, with the “Y” shaped 
          like a wine glass, embodies the sophistication and fun of dining out.
          <div style={{ display: "flex", justifyContent: "center", margin: "20px 0", paddingTop:'20px' }}>
        <img src={logo_white} alt="Logo White" style={{ width: "30%", margin: "0 10px", marginRight:'60px', borderBottomLeftRadius:'10px',borderBottomRightRadius:'10px' }} />
        <img src={logo_orange} alt="Logo Orange" style={{ width: "30%", margin: "0 10px", borderBottomLeftRadius:'10px',borderBottomRightRadius:'10px' }} />
      </div>

        </li>
        
      </ul>

      <hr className="my-line" style={{ width: "79%", margin: "20px auto", borderColor: '#2c2c2c' }} />


      <h2>Conclusion</h2>
      <p>
      DYNR is a result of a thoughtful, research-driven approach to solving a real user problem—making 
      dining decisions easier and more enjoyable. Every element, from the user-centered design to the 
      reward system, has been carefully crafted to ensure a seamless and delightful experience. This 
      project represents my dedication to iterative design, data-driven decision making, and creating 
      interfaces that blend function with beauty.
      </p>

      <hr className="my-line" style={{ width: "79%", margin: "20px auto", borderColor: '#2c2c2c' }} />


    </div>
  );
}

export default DYNR;