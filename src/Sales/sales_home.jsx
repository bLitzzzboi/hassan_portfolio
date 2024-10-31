import React from "react";
import biosales_image from "./header_image.jpg";
import phones from "./phones.jpg";
import pc_screens from "./pc_screens.jpg";
import figma from "./figma.png";
import figma_logo from "./figma_logo.png";
import react_logo from "./react_logo.png";
import mongo_logo from "./mongo_logo.png";
import node_logo from "./node_logo.png";

function Sales() {
  return (
    <div className="header-content">
        <img src={biosales_image} alt="BioSales"/>
        <hr className="my-line" style={{ width: "79%", margin: "20px auto", borderColor: '#2c2c2c'  }} />

        <h1>BioSales</h1>
        <p>
            <span style={{fontFamily: "UltraBold", marginRight:"10px"}}>
                Platform:
            </span>
            React Native (Android & iOS)
        </p>
        <p>
            <span style={{fontFamily: "UltraBold", marginRight:"10px"}}>
                Website:
            </span>
            MERN Stack
        </p>
        <p>
            <span style={{fontFamily: "UltraBold", marginRight:"10px"}}>
                Client:
            </span>
            Confidential
        </p>
        <hr className="my-line" style={{ width: "79%", margin: "20px auto", borderColor: '#2c2c2c'  }} />

        <p>
        Biosales is a comprehensive sales management application designed for a client 
        to streamline the daily operations of their sales team. Built for both 
        Android and iOS, the app allows salespeople to log expenses, 
        record daily sales, manage dealers, and place product orders. 
        All orders are tracked in real-time, showing the current status. 
        Each salesperson has access to a detailed ledger that provides a 
        complete history of their orders and transactions.
        </p>
        <div style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}>
        <img src={phones} alt="Phones" style={{ width: "100%", borderRadius:"0" }} />
        </div>
        <hr className="my-line" style={{ width: "79%", margin: "20px auto", borderColor: '#2c2c2c'  }} />
        <p>
        For the company, a web-based management portal offers control over 
        employee activities, allowing them to approve or deny orders, 
        manage products and discounts, and monitor the overall sales 
        performance via a dashboard. Location tracking is implemented, 
        ensuring that dealers are operating within their designated regions.
        </p>
        <div style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}>
        <img src={pc_screens} alt="Screens PC" style={{ width: "79%", borderRadius:"0" }} />
        </div>
        <hr className="my-line" style={{ width: "79%", margin: "20px auto", borderColor: '#2c2c2c'  }} />

        <h2>Key Features:</h2>

        <p>
            <span style={{fontFamily: "UltraBold", marginRight:"10px", fontSize:'20px'}}
            >Expense Logging and Sales Tracking:</span>
            Employees log their daily expenses and sales, along with cash collections.
        </p>
        <p>
            <span style={{fontFamily: "UltraBold", marginRight:"10px", fontSize:'20px'}}
            >Dealer Management:</span>
            Salespeople add and manage their dealers and submit orders.
        </p>
        <p>
            <span style={{fontFamily: "UltraBold", marginRight:"10px", fontSize:'20px'}}
            >Order Tracking:</span>
            Orders are tracked in real-time, with status updates visible to both salespeople and the company.
        </p>
        <p>
            <span style={{fontFamily: "UltraBold", marginRight:"10px", fontSize:'20px'}}
            >Ledger & Order History:</span>
            Salespeople can review their current ledger and previous orders.
        </p>
        <p>
            <span style={{fontFamily: "UltraBold", marginRight:"10px", fontSize:'20px'}}
            >Location Tracking:</span>
            Ensures salespeople are within required locations.
        </p>
        <p>
            <span style={{fontFamily: "UltraBold", marginRight:"10px", fontSize:'20px'}}
            >Admin Dashboard:</span>
            Provides an overview of employees, sales data, and cash collection performance.
        </p>
        <p>
            <span style={{fontFamily: "UltraBold", marginRight:"10px", fontSize:'20px'}}
            >Product & Discount Management:</span>
            The company can add new products and discounts directly through the website.
        </p>
        <p>
            <span style={{fontFamily: "UltraBold", marginRight:"10px", fontSize:'20px'}}
            >Database:</span>
            MongoDB was used during the pilot stage with plans for a future SQL migration.
        </p>
        <hr className="my-line" style={{ width: "79%", margin: "20px auto", borderColor: '#2c2c2c'  }} />

        <h2>Design Process:</h2>
        <p>
        UX/UI design for the Biosales app and website involved comprehensive 
        market research, consultations with industry leaders, and hands-on 
        testing with employees. Wireframes and interactive prototypes were 
        developed in Figma, ensuring a seamless and intuitive experience for
        both employees and managers.
        </p>
        <div style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}>
        <img src={figma} alt="Figma Screen" style={{ width: "40%", borderRadius:"0" }} />
        </div>
        <hr className="my-line" style={{ width: "79%", margin: "20px auto", borderColor: '#2c2c2c'  }} />

        <h2>
        Development Process:
        </h2>
        <p>
        Biosales was built following modern development practices to ensure 
        scalability, maintainability, and performance. The app's architecture 
        was designed using a modular approach, separating concerns between 
        frontend and backend to allow for easier updates and feature 
        additions. Code was organized with reusability in mind, utilizing 
        custom hooks and components in React Native to streamline development.
         API integration followed RESTful conventions, ensuring clear and 
         consistent communication between the app and the backend. MongoDB
        was used for its flexibility during the pilot phase, and future plans
         include a smooth migration to SQL to handle larger data sets 
         efficiently. The development process also included extensive 
         code reviews, testing (both manual and automated), and continuous 
         integration (CI) to ensure high code quality and reduce bugs before 
         deployment.
        </p>
        <div style={{ display: "flex", justifyContent: "center", margin: "50px 0", paddingTop:'20px' }}>
        <img src={figma_logo} alt="figma" style={{ width: "10%",height:'10%', margin: "0 10px",marginRight:'55px' }} />
        <img src={react_logo} alt="react" style={{ width: "10%",height:'10%', margin: "0 10px",marginRight:'55px' }} />
        <img src={node_logo} alt="node" style={{ width: "10%",height:'10%', margin: "0 10px",marginRight:'55px'}} />
        <img src={mongo_logo} alt="mongo" style={{ width: "5%",height:'2%', margin: "0 10px", }} />

      
      </div>
      <hr className="my-line" style={{ width: "79%", margin: "20px auto", borderColor: '#2c2c2c'  }} />

    </div>
  );
}

export default Sales;