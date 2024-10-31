import React from "react";
import top_image from "./final_1-min.jpg";
import phones from "./phones-min.jpg";
import screen1 from "./IMG_1790.JPG"
import screen2 from "./IMG_1791.JPG"
import screen3 from "./IMG_1801.JPG"
import screen4 from "./IMG_1802.JPG"

function Moody(){
return(
<div className="header-content">
    <img src={top_image} alt="Top Image" />
    <hr className="my-line" style={{ width: "79%", margin: "20px auto", borderColor: "#2c2c2c" }} />
    <h2 style={{paddingBottom:'20px'}}>Moody</h2>
    <p>
    As part of our Human-Computer Interaction course, we developed Moody, an innovative
     app designed to support teenagers in managing their mental health. This project allowed 
     us to explore the intersection of technology and psychology, aiming to create a 
     product that genuinely addresses the unique challenges faced by adolescents 
     today. Our design process was grounded in extensive user research, which included 
     interviewing over 50 students to gain insights into their daily struggles, emotional 
     needs, and mental health experiences. This foundational research guided our app’s 
     features, ensuring that we created solutions that resonated with real problems 
     faced by our target audience.
    </p>
    <hr className="my-line" style={{ width: "79%", margin: "20px auto", borderColor: "#2c2c2c" }} />
    <h2>Key Features</h2>
    <ul>
        <li>
            <h3>Personalized Mood Tracking</h3>
            Moody has an interactive digital diary that empowers users to document their feelings and thoughts 
            in a private, safe space. Understanding that journaling can be a therapeutic outlet, 
            we implemented a streak system to encourage consistent use. 
        </li>
        <li>
            <h3>Digital Forum</h3>
            The digital forum feature is designed to cultivate a supportive community where users can 
            openly share their challenges. This space enables teenagers to post their issues, seek advice, 
            and offer support to their peers which 
            has been shown to be crucial in improving emotional resilience.
        </li>
        <li>
            <h3>DeStress Exercises</h3>
            Recognizing the importance of environmental factors in mental well-being, Moody offers a 
            curated selection of ambient sounds. Users can listen to calming instrumentals, 
            nature sounds, and more, with an interactive equalizer that allows them to customize 
            their auditory experience. This feature is complemented by guided visualization 
            exercises that promote mindfulness and relaxation, encouraging users to take a moment 
            for themselves amidst their busy lives. The combination of sound and visualization 
            helps create a serene environment conducive to emotional regulation and stress relief.
        </li>
        <li>
            <h3>Chat with Moody</h3>
            To provide immediate support, we included an AI chatbot named Moody. Users can engage in 
            conversations about their feelings and concerns, receiving tailored responses and 
            resources to help them navigate their emotional landscape.
        </li>
        <li>
            <h3>Mood Kit</h3>
            To enhance the overall user experience, we designed a unique mood kit that includes 
            a sensor-enabled stress ball and a deck of cards. The stress ball is equipped with 
            sensors that detect the user’s stress levels in real time. If stress is detected, 
            the app prompts the user with suggestions for calming exercises or ambient sounds, 
            guiding them towards relaxation. The deck of cards features QR codes linked to 
            specific nature sounds associated with various locations.
        </li>

    </ul>
    <hr className="my-line" style={{ width: "79%", margin: "20px auto", borderColor: "#2c2c2c" }} />
    <h2>Design Process</h2>
    <div style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}>
        <img src={phones} alt="Phones" style={{ width: "50vh", borderRadius:"0" }} />
    </div>
    <p>
    Our design philosophy was informed by psychological principles related to mental health, particularly 
    the understanding that different colors can significantly influence mood and emotional well-being. 
    We carefully selected a calming color palette of light green, brown, and white to create a serene 
    and inviting atmosphere within the app. This choice reflects our intention to cultivate a positive 
    emotional environment for users, making them feel at ease as they engage with the app.
    </p>
    <p>
    The design process involved several key stages, starting with thorough user research. By interviewing 
    over 50 students, we gathered valuable insights into their mental health challenges, preferences, 
    and suggestions. This qualitative data informed our feature set and ensured that our app was not 
    only functional but also deeply empathetic to user needs.
    </p>
    <hr className="my-line" style={{ width: "79%", margin: "20px auto", borderColor: "#2c2c2c" }} />
    <h2>User Research</h2>
    <p>
    We conducted extensive user research through interviews with students, allowing us to understand 
    their mental health challenges firsthand. The feedback we received guided our design decisions, 
    ensuring that each feature addressed the specific needs and concerns expressed by our participants. 
    This collaborative approach reinforced our commitment to user-centered design, emphasizing the 
    importance of empathy in creating effective mental health solutions.
    </p>
    <hr className="my-line" style={{ width: "79%", margin: "20px auto", borderColor: "#2c2c2c" }} />
    <h2>Prototyping and Testing</h2>
    <div style={{
      padding: window.innerWidth > 768 ? "0 20%" : "0 5%",
       paddingTop:'50px'
      }}>
  <div
    className="screenshots"
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }}
  >
    <img
      src={screen1}// Replace with your image paths
      alt="App Screen 1"
      style={{
        width: window.innerWidth > 768 ? "20%" : "20%",
        height: "auto",
        borderRadius: "8px",
      }}
    />
    <img
      src={screen2}// Replace with your image paths
      alt="App Screen 2"
      style={{
        width: window.innerWidth > 768 ? "20%" : "20%",
        height: "auto",
        borderRadius: "8px",
      }}
    />
    <img
      src={screen3} // Replace with your image paths
      alt="App Screen 3"
      style={{
        width: window.innerWidth > 768 ? "20%" : "20%",
        height: "auto",
        borderRadius: "8px",
      }}
    />
    <img
      src={screen4} // Replace with your image paths
      alt="App Screen 4"
      style={{
        width: window.innerWidth > 768 ? "20%" : "20%",
        height: "auto",
        borderRadius: "8px",
      }}
    />
  </div>
  </div>

    <p>
    Next, we employed paper prototyping to visualize our ideas and facilitate early-stage testing. 
    This approach allowed us to gather feedback on our initial designs and iterate quickly 
    based on user input. By conducting usability tests with a diverse group of participants, 
    we refined the app’s interface and functionality, ensuring that it was intuitive and user-friendly.
    </p>
    <hr className="my-line" style={{ width: "79%", margin: "20px auto", borderColor: "#2c2c2c" }} />
    <h2>Final Thoughts</h2>
    <p>
    While Moody was developed only up to the prototyping stage, it serves as a compelling demonstration 
    of our expertise in user research and interaction design. The focus was on understanding user 
    needs and creating an empathetic solution that prioritizes mental health. This project highlights 
    our commitment to designing products that not only meet functional requirements but also foster 
    emotional connections and support positive mental health practices.
    </p>
    <p>
    Ultimately, Moody stands as a testament to the potential of technology to positively impact 
    mental health, providing a blueprint for future development in this vital area. Through our 
    research, design, and prototyping efforts, we gained invaluable insights into user interaction
    and engagement, laying the groundwork for a future where mental health support is accessible, 
    engaging, and effective.
    </p>
    <hr className="my-line" style={{ width: "79%", margin: "20px auto", borderColor: "#2c2c2c" }} />
</div>
);
}
export default Moody;