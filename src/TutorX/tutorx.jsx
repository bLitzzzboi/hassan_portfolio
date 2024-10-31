import React from "react";
import top_image from "./main_img_1.jpg";
import flutter from "./flutter.png";
import firebase from "./firebase.png";
import mongodb from "./mongo_logo.png";
import node from "./node_logo.png";
import billing from "./billing.png";
import tutor from "./tutor.png";
import student from "./student.png";
import find_tutor from "./find_tutor.mp4";


function TutorX() {
  return (
  <div className="header-content">
  <img src={top_image} alt="Top Image" />
  <hr className="my-line" style={{ width: "79%", margin: "20px auto", borderColor: "#2c2c2c" }} />
  <h1>TutorX</h1>
  <p>
  TutorX is a feature-rich, cross-platform mobile application that connects students with 
  tutors for personalized learning experiences, whether online or in-person. Built using a 
  robust tech stack of Flutter, Firebase, MongoDB, Node, and Express, TutorX demonstrates a 
  well-rounded approach to app development, combining solid backend infrastructure with a smooth, 
  intuitive front-end experience. The project involved extensive documentation (SRS, SDS) and 
  was executed with agile methodologies, including sprints, teamwork, and rigorous testing.
  </p>
  <div
  style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "20px 0",
    paddingLeft: "10px",
    marginBottom: "70px",
  }}
>
  <video
    src={find_tutor}
    style={{ width: "33%", marginBottom: "20px" }}
    autoPlay
    loop
    muted
    playsInline
    className="app-video"
  ></video>
  <div
    style={{
      fontSize: "35px",
      fontFamily: "UltraBold",
      lineHeight: "1.2",
      textAlign: "center",
    }}
  >
    "Bridging the gap between learning and expertise effortlessly"
  </div>
</div>

  
  <hr className="my-line" style={{ width: "79%", margin: "20px auto", borderColor: "#2c2c2c" }} />
  <h2>Matching Algorithm</h2>
  <p>
  The system intelligently pairs students with the most suitable tutors based on location 
  (for in-person requests), subject expertise, ratings, and availability. The algorithm uses 
  queries in MongoDB and Firebase for fast retrieval of potential matches, ensuring that 
  responses are quick and relevant.
  </p>
  <h2>Real Time Communication</h2>
  <p>
  The chat system, built using Firebase's real-time database, allows seamless messaging 
  between students and tutors once a match is made. Firebase also ensures that sessions 
  are synced across devices instantly, maintaining continuity in communications.
  </p>
  <h2>Billing System</h2>
  <p>
  After a tutoring session ends, a billing system calculates the final amount based on the 
  tutor's hourly rate and the session duration. This is automatically sent to the student 
  for payment processing, with data stored securely in MongoDB.
  </p>
  <hr className="my-line" style={{ width: "79%", margin: "20px auto", borderColor: "#2c2c2c" }} />
  <h2>UI UX Considerations</h2>
  <p>
  Although primarily a coding-heavy project, TutorX was also built with the end-user in mind. 
  The UI/UX was designed to be clean and intuitive
  </p>
  <div style={{padding:"0 100px", paddingTop:'50px'}}>
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }}
  >
    <img
      src={student}// Replace with your image paths
      alt="App Screen 1"
      style={{
        width: "30%",
        height: "auto",
        borderRadius: "20px",
      }}
    />
    <img
      src={tutor}// Replace with your image paths
      alt="App Screen 2"
      style={{
        width: "30%",
        height: "auto",
        borderRadius: "20px",
      }}
    />
    <img
      src={billing} // Replace with your image paths
      alt="App Screen 3"
      style={{
        width: "30%",
        height: "auto",
        borderRadius: "20px",
      }}
    />
  </div>
  </div>
  
  <ul>
    <li style={{paddingBottom:'20px'}}>
      <strong style={{fontSize:'20px'}}>Interactive Maps:</strong> Using Google Maps API, location selection for in-person sessions is quick and visual.
    </li>
    <li style={{paddingBottom:'20px'}}>
      <strong style={{fontSize:'20px'}}>User Profiles:</strong> Both students and tutors have profiles that display key information such as ratings, subjects, and hourly rates, simplifying decision-making.
    </li>
    <li style={{paddingBottom:'10px'}}>
      <strong style={{fontSize:'20px'}}>Streamlined Navigation:</strong> Flutter's widget-based framework allowed for fast, responsive UIs across iOS and Android, ensuring a consistent experience on both platforms.
    </li>
  </ul>

  <hr className="my-line" style={{ width: "79%", margin: "20px auto", borderColor: "#2c2c2c" }} />
  <h2>Development Process and Documentation</h2>
  <p>
  TutorX was developed using an agile, sprint-based approach, with detailed <strong>SRS</strong> and <strong>SDS</strong>
  documentation to outline features, architecture, and user needs. Each sprint focused on 
  implementing key functionalities, from backend APIs to frontend interfaces. 
  Extensive <strong>Wireframing and User Testing</strong> refined the app’s design and usability based 
  on real-world feedback, ensuring a cohesive integration of features like real-time 
  messaging and location-based matching.
  </p>
  <hr className="my-line" style={{ width: "79%", margin: "20px auto", borderColor: "#2c2c2c" }} />
  
  <h2 style={{paddingBottom:'20px'}}>Technology Stack</h2>


  <div 
  style={{ margin: "20px 0", padding:"0 100px",  }}
  >

  {/* Tech Stack Item 1 */}
  <div 
    className="tutor-stack"
  style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
  <div style={{ flexShrink: 0 }}>
    <img
      src={flutter} // Replace with your Flutter image path
      alt="Flutter"
      style={{ width: "80px", height: "80px", marginRight: "20px", alignSelf: "center"  }}
    />
  </div>
    <div style={{ fontSize: "20px", fontFamily: "Regular", lineHeight: "1.5" }}>
      Flutter for cross-platform app development (iOS and Android).
    </div>
  </div>

  {/* Tech Stack Item 2 */}
  <div 
    className="tutor-stack"

  style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
  <div style={{ flexShrink: 0 }}>
    <img
      src={firebase}
      alt="Firebase"
      style={{ width: "80px", height: "100px", marginRight: "20px", alignSelf: "center"  }}
    />
  </div>
    <div style={{ fontSize: "20px", fontFamily: "Regular", lineHeight: "1.5" }}>
      Firebase for real-time messaging, authentication, and data syncing.
    </div>
  </div>

  {/* Tech Stack Item 3 */}
  <div 
    className="tutor-stack"

  style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
  <div style={{ flexShrink: 0 }}>
    <img
      src={mongodb}
      alt="MongoDB"
      style={{ width: "80px", height: "110px", marginRight: "20px", alignSelf: "center"  }}
    />
  </div>
    <div style={{ fontSize: "20px", fontFamily: "Regular", lineHeight: "1.5" }}>
      MongoDB for a flexible, NoSQL database to store user profiles, tutoring
      requests, and session details.
    </div>
  </div>

  {/* Tech Stack Item 4 */}
  <div 
    className="tutor-stack"

  style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
  <div style={{ flexShrink: 0 }}>
    <img
      src={node}
      alt="Node.js"
      style={{ width: "80px", height: "90px", marginRight: "20px", alignSelf: "center" }}
    />
  </div>
    <div style={{ fontSize: "20px", fontFamily: "Regular", lineHeight: "1.5" }}>
      Node.js and Express for building scalable backend APIs that handle
      student-tutor matching logic, messaging, and billing.
    </div>
  </div>
</div>
<hr className="my-line" style={{ width: "79%", margin: "20px auto", borderColor: "#2c2c2c" }} />


  </div>
  );
}

export default TutorX;