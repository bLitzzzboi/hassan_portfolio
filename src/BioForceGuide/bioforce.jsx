import React from "react";
import top_image from "./top_image.jpg";
import app_home from "./app_home.png";
import admin_home from "./admin_home.png";
import app_video from "./app_video.mp4"; // Your app video file
import firebase from "./firebase.png";
import flutter from "./flutter.png";
import leaf from "./leaf.mp4";


function BioForce() {
  const farmerFeatures = [
    {
      title: "1. Real-time Crop and Pesticide Information",
      description:
        "Farmers can access a regularly updated database of crops, pests, and the pesticides that combat those pests.",
    },
    {
      title: "2. Weather Updates",
      description:
        "The app provides regular weather forecasts to help farmers plan their agricultural activities and prepare for environmental changes.",
    },
    {
      title: "3. In-App Communication with Experts",
      description:
        "A direct messaging feature allows farmers to reach out to BioForce’s operators with specific crop-related issues.",
    },
    {
      title: "4. Problem Submission System",
      description:
        "Farmers can easily submit their issues or concerns through a dedicated form in the app.",
    },
  ];

  const adminFeatures = [
    {
      title: "1. Comprehensive Crop Management",
      description:
        "The admin side allows BioForce Guide to add new crops to the app, linking them with relevant pests and pesticides.",
    },
    {
      title: "2. Weather Forecast Integration",
      description:
        " The dashboard displays a detailed list of farmers who have registered on the app. Admins can view their personal details, crop preferences, and any issues they have submitted.",
    },
    {
      title: "3. Issue Resolution Interface",
      description:
        "Company operators can review and respond to issues submitted by farmers. They can provide tailored solutions based on the information provided.",
    },
  ];

  return (
    <div className="header-content">
      <img src={top_image} alt="Top Image" />
      <hr className="my-line" style={{ width: "79%", margin: "20px auto", borderColor: "#2c2c2c" }} />

      <h1>BioForce Guide</h1>
      <p>
        I had the opportunity to develop a cross-platform Flutter application
        for BioForce Chemicals, aimed at providing farmers with critical,
        real-time agricultural information and an efficient way to communicate
        with the company for support. This app addresses several pain points
        faced by farmers in managing their crops, pests, and pesticide usage,
        offering a significant leap forward for agricultural management in
        Pakistan, where farming plays a vital role in the economy.
      </p>
      <hr className="my-line" style={{ width: "79%", margin: "20px auto", borderColor: "#2c2c2c" }} />

      <h2>Overview</h2>
      <p>
        The BioForce Guide App bridges the gap between farmers and agricultural
        experts by delivering up-to-date information and a support system,
        accessible anytime. It features both a user-friendly farmer interface
        and a robust admin dashboard for the company’s operators to manage
        content and provide real-time solutions.
      </p>
      <hr className="my-line" style={{ width: "79%", margin: "20px auto", borderColor: "#2c2c2c" }} />

      <h2>Farmer Focused Features</h2>

      <div
      className="farmer-features"
        style={{
          display: "flex",
          justifyContent: "flex-start",
          margin: "10px 0",
          fontSize: "22px",
          fontFamily: "UltraBold",
          lineHeight: "1.4",
          paddingLeft: window.innerWidth > 768 ? "100px" : "0", // Conditional padding
          marginBottom: "70px",
        }}
      >
        {/* Left side - Image */}
        <div style={{ width: "30vh" }}>
          <img src={app_home} style={{ width: "79%" }} alt="App Home" />
        </div>

        {/* Right side - Text */}
        <div style={{ width: "60%" }}>
          {farmerFeatures.map((item, index) => (
            <div
              key={index}
              style={{
                marginBottom: "20px",
                fontSize: "15px",
              }}
            >
              <div>{item.title}</div>
              <div
                style={{
                    fontFamily: 'Regular',
                     marginTop: "10px",
                     fontSize: "15px",
                     padding: "10px",
                     borderRadius: "5px",
                     boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
                   }}
              >
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr className="my-line" style={{ width: "79%", margin: "20px auto", borderColor: "#2c2c2c" }} />

      <h2>Admin Dashboard Features</h2>

      <div
            className="farmer-features"

        style={{
          display: "flex",
          justifyContent: "flex-start",
          margin: "10px 0",
          fontSize: "22px",
          fontFamily: "UltraBold",
          lineHeight: "1.4",
          paddingLeft: window.innerWidth > 768 ? "100px" : "0", // Conditional padding
          marginBottom: "70px",
        }}
      >
        {/* Left side - Text */}
        <div style={{ width: "60%", paddingRight: "20px" }}>
          {adminFeatures.map((item, index) => (
            <div
              key={index}
              style={{
                marginBottom: "20px",
                fontSize: "15px",
              }}
            >
              <div>{item.title}</div>
              <div
                style={{
                 fontFamily: 'Regular',
                  marginTop: "10px",
                  fontSize: "15px",
                  padding: "10px",
                  borderRadius: "5px",
                  boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
                }}
              >
                {item.description}
              </div>
            </div>
          ))}
        </div>

        {/* Right side - Image */}
        <div style={{ width: "30vh" }}>
          <img src={admin_home} style={{ width: "79%" }} alt="Admin Dashboard" />
        </div>
      </div>
      <hr className="my-line" style={{ width: "79%", margin: "20px auto", borderColor: "#2c2c2c" }} />

      {/* New Video Section with Chat Bubbles */}
      <h2>UX/UI Design</h2>
      <p>
      A significant portion of the project was dedicated to UX and UI research 
      to create an app that is not only functional but intuitive and easy to use,
      given that many farmers may have limited experience with technology.
      </p>
      <div 
      
      style={{ position: "relative", width: "100%", textAlign: "center" }}>
        
        {/* Video */}
        <video
          src="https://myportfoliobucket-hassan.s3.eu-north-1.amazonaws.com/app_video-2.mp4"
          autoPlay
          loop 
          muted
          playsInline
          style={{
            width: "35vh",
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        ></video>

        {/* Chat Bubbles */}
        <div
          style={{
            position: "absolute",
            textAlign: "left",
            top: "20%",
            left: "12%",
            backgroundColor: "#09CE81",
            padding: "10px 15px",
            // borderRadius: "20px",
            borderTopRightRadius:'20px',
            borderBottomRightRadius:'20px',
            borderBottomLeftRadius :'20px',
            fontSize: "1.3vh",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          Simple and Accessible!
          <br/>
          Clear navigation, minimal steps,
          <br/>
          and large, easy-to-read fonts"
        </div>
        <div
          style={{
            position: "absolute",
            textAlign: "left",
            top: "40%",
            right: "15%",
            backgroundColor: "#C6BAFC",
            padding: "10px 15px",
            borderTopRightRadius:'20px',
            borderBottomRightRadius:'20px',
            borderBottomLeftRadius :'20px',
            fontSize: "1.3vh",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          Visually Informative!
            <br/>
            The use of icons, images, 
            <br/>
            and color-coded 
            <br/>
            notifications makes it easier 
            <br/>
            for farmers to understand 
            <br/>
            complex data
        </div>
        <div
          style={{
            position: "absolute",
            textAlign: "left",
            top: "75%",
            left: "20%",
            backgroundColor: "#F24F1F",
            padding: "10px 15px",
            borderTopRightRadius:'20px',
            borderBottomRightRadius:'20px',
            borderBottomLeftRadius :'20px',
            fontSize: "1.3vh",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          Mobile-First!
            <br/>
        Optimized for mobile screens, 
        <br/>
        ensuring smooth performance 
        <br/>
        even on devices with limited 
        <br/>
        hardware.
        </div>
      </div>
      <hr className="my-line" style={{ width: "79%", margin: "20px auto", borderColor: "#2c2c2c" }} />
      <h2>Development Process</h2>
      <p>
      Thorough documentation was created to ensure that the app is easy to 
      maintain and scale. The documentation covers all aspects of the app,
       from the setup process to the deployment stages, and provides clear 
       guidelines for future development or feature expansions.
      </p>

      <div
  style={{
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: "50px",
  }}
>
  {/* First Column */}
  <div style={{ textAlign: "center", width: "50%" }}>
    <img
      src={flutter}
      alt="Logo 1"
      style={{ width: "100px", marginBottom: "10px" }}
    />
    <p style={{ fontSize: "16px", fontFamily: "Regular" }}>
    The app was built using Flutter for cross-platform compatibility, ensuring that it can run smoothly on both Android and iOS devices.
    </p>
  </div>

  {/* Second Column */}
  <div style={{ textAlign: "center", width: "50%" }}>
    <img
      src={firebase}
      alt="Logo 2"
      style={{ width: "100px", marginBottom: "10px" }}
    />
    <p style={{ fontSize: "16px", fontFamily: "Regular" }}>
    Firebase/Firestore was used for backend services, including real-time data management, secure user authentication, and storage.
    </p>
  </div>
</div>
<hr className="my-line" style={{ width: "79%", margin: "20px auto", borderColor: "#2c2c2c" }} />

<h2>Solving Real World Issues</h2>
<div
  className="solution-section"
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    margin: "0 auto",

    marginTop: "20px",
  }}
>
  {/* Left side - GIF */}
  <video
    src={leaf}
    alt="Leaf"
    autoPlay
    loop
    muted
    playsInline
    style={{
      width: "200px",
      height: "200px",
      marginRight: "-24px",
      borderRadius: "10px",
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    }}
  />

  {/* Right side - Text */}
  <p
    style={{
      fontSize: "16px",
      fontFamily: "Regular",
      textAlign: "justify",
    }}
  >
    In Pakistan’s agricultural sector, BioForce Guide App introduces a crucial solution to the inefficiency of traditional communication methods. Previously, farmers relied on printed materials for updates about crops, pests, and pesticides, which led to delays and high costs for companies in producing and distributing these materials. This app effectively eliminates the need for paperwork, transitioning all important information into a digital format accessible directly through their mobile devices.
  </p>
</div>
<hr className="my-line" style={{ width: "79%", margin: "20px auto", borderColor: "#2c2c2c" }} />


    </div>
  );
}

export default BioForce;
