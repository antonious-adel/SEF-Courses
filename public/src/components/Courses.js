import React from "react";
// import Swiper from 'swiper';
import Swiper from 'swiper/bundle';
// import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Courses = () => {
   
    return (
        new Swiper('.card-wrapper', {

            loop: true,
            spaceBetween : 30 , 
        
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          
            breakpoints: {
                0:{
                    slidesPerView: 1 
                } , 
                768 :{
                    slidesPerView: 2 
                } ,
                1024:{
                    slidesPerView: 3
                } ,
            }
          }) , 
        <>
            <section>
                <div className="courcessection">
                    <div className="overlaycourses">
                        <div className="container" style={{ paddingTop: 50 }}>
                            <h5 style={{ color: "aliceblue" }}>Cources</h5>
                            <div
                                style={{
                                    backgroundColor: "rgb(255, 186, 13)",
                                    width: 80,
                                    height: 3
                                }}
                            />
                            <h6 style={{ color: "aliceblue" }}>6th June 2023</h6>
                        </div>
                        <div className="container " style={{ paddingBottom: 100 }}>


                            <div className="maindiv">
                                <div className="container swiper">
                                    <div className="card-wrapper">
                                        <h1 style={{ color: "aliceblue" }}>New Cources</h1>
                                        <ul className="card-list swiper-wrapper">
                                            <li className="card-item swiper-slide">
                                                <a href="#" className="card-link">
                                                    <div style={{ position: "relative", textAlign: "center" }}>
                                                        <h4 style={{ position: "absolute", bottom: 20, color: "#fff" }}>
                                                            Python for Beginners
                                                        </h4>
                                                        <h7 style={{ position: "absolute", bottom: 5, color: "#fff" }}>
                                                            <span style={{ color: "rgb(255, 186, 13)" }}>Instructor </span>
                                                            : Mohamed Nour
                                                        </h7>
                                                        <img
                                                            src="./images/th.jfif"
                                                            alt="Card Image"
                                                            className="card-image"
                                                        />
                                                    </div>
                                                    <h6 className="card-title" style={{ paddingTop: 25 }}>
                                                        <i
                                                            className="far fa-calendar-alt"
                                                            style={{ color: "rgb(255, 186, 13)" }}
                                                        />
                                                        Wednesday,June 7th
                                                    </h6>
                                                    <h6 className="card-title" style={{ paddingTop: 5 }}>
                                                        
                                                        <i
                                                            className="fas fa-clipboard-list"
                                                            style={{ color: "rgb(255, 186, 13)" }}
                                                        />
                                                        12 lessons
                                                    </h6>
                                                    <button className="card-button btn btn-warning">ENROLL</button>
                                                    <div
                                                        style={{ textDecoration: "none", marginTop: 15, color: "#fff" }}
                                                    >
                                                        View Details &gt;
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="card-item swiper-slide">
                                                <a href="#" className="card-link">
                                                    <div style={{ position: "relative", textAlign: "center" }}>
                                                        <h4 style={{ position: "absolute", bottom: 20, color: "#fff" }}>
                                                            Python for Beginners
                                                        </h4>
                                                        <h7 style={{ position: "absolute", bottom: 5, color: "#fff" }}>
                                                            <span style={{ color: "rgb(255, 186, 13)" }}>Instructor </span>
                                                            : Mohamed Nour
                                                        </h7>
                                                        <img
                                                            src="./images/th.jfif"
                                                            alt="Card Image"
                                                            className="card-image"
                                                        />
                                                    </div>
                                                    <h6 className="card-title" style={{ paddingTop: 25 }}>
                                                        <i
                                                            className="far fa-calendar-alt"
                                                            style={{ color: "rgb(255, 186, 13)" }}
                                                        />
                                                        Wednesday,June 7th
                                                    </h6>
                                                    <h6 className="card-title" style={{ paddingTop: 5 }}>
                                                        
                                                        <i
                                                            className="fas fa-clipboard-list"
                                                            style={{ color: "rgb(255, 186, 13)" }}
                                                        />
                                                        12 lessons
                                                    </h6>
                                                    <button className="card-button btn btn-warning">ENROLL</button>
                                                    <div
                                                        style={{ textDecoration: "none", marginTop: 15, color: "#fff" }}
                                                    >
                                                        View Details &gt;
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="card-item swiper-slide">
                                                <a href="#" className="card-link">
                                                    <div style={{ position: "relative", textAlign: "center" }}>
                                                        <h4 style={{ position: "absolute", bottom: 20, color: "#fff" }}>
                                                            Python for Beginners
                                                        </h4>
                                                        <h7 style={{ position: "absolute", bottom: 5, color: "#fff" }}>
                                                            <span style={{ color: "rgb(255, 186, 13)" }}>Instructor </span>
                                                            : Mohamed Nour
                                                        </h7>
                                                        <img
                                                            src="./images/th.jfif"
                                                            alt="Card Image"
                                                            className="card-image"
                                                        />
                                                    </div>
                                                    <h6 className="card-title" style={{ paddingTop: 25 }}>
                                                        <i
                                                            className="far fa-calendar-alt"
                                                            style={{ color: "rgb(255, 186, 13)" }}
                                                        />
                                                        Wednesday,June 7th
                                                    </h6>
                                                    <h6 className="card-title" style={{ paddingTop: 5 }}>
                                                        
                                                        <i
                                                            className="fas fa-clipboard-list"
                                                            style={{ color: "rgb(255, 186, 13)" }}
                                                        />
                                                        12 lessons
                                                    </h6>
                                                    <button className="card-button btn btn-warning">ENROLL</button>
                                                    <div
                                                        style={{ textDecoration: "none", marginTop: 15, color: "#fff" }}
                                                    >
                                                        View Details &gt;
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="card-item swiper-slide">
                                                <a href="#" className="card-link">
                                                    <div style={{ position: "relative", textAlign: "center" }}>
                                                        <h4 style={{ position: "absolute", bottom: 20, color: "#fff" }}>
                                                            Python for Beginners
                                                        </h4>
                                                        <h7 style={{ position: "absolute", bottom: 5, color: "#fff" }}>
                                                            <span style={{ color: "rgb(255, 186, 13)" }}>Instructor </span>
                                                            : Mohamed Nour
                                                        </h7>
                                                        <img
                                                            src="./images/th.jfif"
                                                            alt="Card Image"
                                                            className="card-image"
                                                        />
                                                    </div>
                                                    <h6 className="card-title" style={{ paddingTop: 25 }}>
                                                        <i
                                                            className="far fa-calendar-alt"
                                                            style={{ color: "rgb(255, 186, 13)" }}
                                                        />
                                                        Wednesday,June 7th
                                                    </h6>
                                                    <h6 className="card-title" style={{ paddingTop: 5 }}>
                                                        
                                                        <i
                                                            className="fas fa-clipboard-list"
                                                            style={{ color: "rgb(255, 186, 13)" }}
                                                        />
                                                        12 lessons
                                                    </h6>
                                                    <button className="card-button btn btn-warning">ENROLL</button>
                                                    <div
                                                        style={{ textDecoration: "none", marginTop: 15, color: "#fff" }}
                                                    >
                                                        View Details &gt;
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="card-item swiper-slide">
                                                <a href="#" className="card-link">
                                                    <div style={{ position: "relative", textAlign: "center" }}>
                                                        <h4 style={{ position: "absolute", bottom: 20, color: "#fff" }}>
                                                            Python for Beginners
                                                        </h4>
                                                        <h7 style={{ position: "absolute", bottom: 5, color: "#fff" }}>
                                                            <span style={{ color: "rgb(255, 186, 13)" }}>Instructor </span>
                                                            : Mohamed Nour
                                                        </h7>
                                                        <img
                                                            src="./images/th.jfif"
                                                            alt="Card Image"
                                                            className="card-image"
                                                        />
                                                    </div>
                                                    <h6 className="card-title" style={{ paddingTop: 25 }}>
                                                        <i
                                                            className="far fa-calendar-alt"
                                                            style={{ color: "rgb(255, 186, 13)" }}
                                                        />
                                                        Wednesday,June 7th
                                                    </h6>
                                                    <h6 className="card-title" style={{ paddingTop: 5 }}>
                                                        
                                                        <i
                                                            className="fas fa-clipboard-list"
                                                            style={{ color: "rgb(255, 186, 13)" }}
                                                        />
                                                        12 lessons
                                                    </h6>
                                                    <button className="card-button btn btn-warning">ENROLL</button>
                                                    <div
                                                        style={{ textDecoration: "none", marginTop: 15, color: "#fff" }}
                                                    >
                                                        View Details &gt;
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                        <div className=" swiper-slide-button  btnswip1 swiper-button-prev" />
                                        <div className=" swiper-slide-button btnswip2 swiper-button-next" />
                                    </div>
                                </div>
                            </div>


                            <div className="othercoursesdiv">
                                < h2 className="othercoursestitle" style={{ color: "aliceblue" }}>
                                    Other Cources
                                </h2>
                                <div className="searchforcources ">
                                    <input type="text" placeholder="search for cources"
                                     style={{textDecoration : "none" , border : "none" , background : "none"}}></input>
                                    
                                    <i
                                        className="fas fa-search"
                                        style={{ color: "rgb(255, 186, 13)", paddingLeft: 4 }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* overlaycourses  */}
                </div>
            </section>
            <section>
                <div className="resposivetablediv">
                    <table className="table table-dark  table-borderless container ">
                        <thead>
                            <tr>
                                <th scope="col" />
                                <th scope="col">Start Date</th>
                                <th scope="col">Level</th>
                                <th scope="col" />
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">
                                    <div style={{ display: "flex" }}>
                                        <div className="coursepic" />
                                        <div
                                            style={{ color: "aliceblue", marginTop: 30, marginLeft: 30 }}
                                        >
                                            <h4>HTML Basics</h4>
                                            <h6>12 lessons</h6>
                                            <h5></h5>
                                            <h6 style={{ color: "rgb(255, 186, 13)", display: "inline" }}>
                                                Instructor
                                            </h6>
                                            : Mohamed Nour
                                        </div>
                                    </div>
                                </th>
                                <td style={{ paddingTop: 60 }}>Thursday,June 8th</td>
                                <td style={{ paddingTop: 60 }}>1</td>
                                <td>
                                    <a
                                        href="#"
                                        className="btn btn-warning"
                                        style={{ width: 100, display: "block", marginTop: 25 }}
                                    >
                                        ENROLL
                                    </a>
                                    <a
                                        href="#"
                                        className="link-light  "
                                        style={{
                                            textDecoration: "none",
                                            display: "block",
                                            marginTop: 15
                                        }}
                                    >
                                        View Details
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <div style={{ display: "flex" }}>
                                        <div className="coursepic" />
                                        <div
                                            style={{ color: "aliceblue", marginTop: 30, marginLeft: 30 }}
                                        >
                                            <h4>Graphic Design</h4>
                                            <h6>17 lessons</h6>
                                            <h5></h5>
                                            <h6 style={{ color: "rgb(255, 186, 13)", display: "inline" }}>
                                                Instructor
                                            </h6>
                                            : Mohamed Nour
                                        </div>
                                    </div>
                                </th>
                                <td style={{ paddingTop: 60 }}>Thursday,June 8th</td>
                                <td style={{ paddingTop: 60 }}>1</td>
                                <td>
                                    <a
                                        href="#"
                                        className="btn btn-warning"
                                        style={{ width: 100, display: "block", marginTop: 25 }}
                                    >
                                        ENROLL
                                    </a>
                                    <a
                                        href="#"
                                        className="link-light  "
                                        style={{
                                            textDecoration: "none",
                                            display: "block",
                                            marginTop: 15
                                        }}
                                    >
                                        View Details
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <div style={{ display: "flex" }}>
                                        <div className="coursepic" />
                                        <div
                                            style={{ color: "aliceblue", marginTop: 30, marginLeft: 30 }}
                                        >
                                            <h4>UI UX Design</h4>
                                            <h6>12 lessons</h6>
                                            <h5></h5>
                                            <h6 style={{ color: "rgb(255, 186, 13)", display: "inline" }}>
                                                Instructor
                                            </h6>
                                            : Mohamed Nour
                                        </div>
                                    </div>
                                </th>
                                <td style={{ paddingTop: 60 }}>Thursday,June 8th</td>
                                <td style={{ paddingTop: 60 }}>1</td>
                                <td>
                                    <a
                                        href="#"
                                        className="btn btn-warning"
                                        style={{ width: 100, display: "block", marginTop: 25 }}
                                    >
                                        ENROLL
                                    </a>
                                    <a
                                        href="#"
                                        className="link-light  "
                                        style={{
                                            textDecoration: "none",
                                            display: "block",
                                            marginTop: 15
                                        }}
                                    >
                                        View Details
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <div style={{ display: "flex" }}>
                                        <div className="coursepic" />
                                        <div
                                            style={{ color: "aliceblue", marginTop: 30, marginLeft: 30 }}
                                        >
                                            <h4>UI UX Design</h4>
                                            <h6>12 lessons</h6>
                                            <h5></h5>
                                            <h6 style={{ color: "rgb(255, 186, 13)", display: "inline" }}>
                                                Instructor
                                            </h6>
                                            : Mohamed Nour
                                        </div>
                                    </div>
                                </th>
                                <td style={{ paddingTop: 60 }}>Thursday,June 8th</td>
                                <td style={{ paddingTop: 60 }}>1</td>
                                <td>
                                    <a
                                        href="#"
                                        className="btn btn-warning"
                                        style={{ width: 100, display: "block", marginTop: 25 }}
                                    >
                                        ENROLL
                                    </a>
                                    <a
                                        href="#"
                                        className="link-light  "
                                        style={{
                                            textDecoration: "none",
                                            display: "block",
                                            marginTop: 15
                                        }}
                                    >
                                        View Details
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <div style={{ display: "flex" }}>
                                        <div className="coursepic" />
                                        <div
                                            style={{ color: "aliceblue", marginTop: 30, marginLeft: 30 }}
                                        >
                                            <h4>UI UX Design</h4>
                                            <h6>12 lessons</h6>
                                            <h5></h5>
                                            <h6 style={{ color: "rgb(255, 186, 13)", display: "inline" }}>
                                                Instructor
                                            </h6>
                                            : Mohamed Nour
                                        </div>
                                    </div>
                                </th>
                                <td style={{ paddingTop: 60 }}>Thursday,June 8th</td>
                                <td style={{ paddingTop: 60 }}>1</td>
                                <td>
                                    <a
                                        href="#"
                                        className="btn btn-warning"
                                        style={{ width: 100, display: "block", marginTop: 25 }}
                                    >
                                        ENROLL
                                    </a>
                                    <a
                                        href="#"
                                        className="link-light  "
                                        style={{
                                            textDecoration: "none",
                                            display: "block",
                                            marginTop: 15
                                        }}
                                    >
                                        View Details
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="container responsiveothercoursesdiv">
                    <div className=" container row">
                        <div className=" col-sm-12 cardparent">
                            <div
                                className="card "
                                style={{ width: "100%", backgroundColor: "black" }}
                            >
                                <div className="courcesimg"></div>
                                <div className="card-body">
                                    <div style={{ color: "aliceblue" }}>
                                        <div className="card-title">
                                            <span style={{ fontWeight: "bold" }}>HTML Basics</span>
                                            <span
                                                style={{
                                                    display: "inline-block",
                                                    marginLeft: "55%",
                                                    fontWeight: "bold"
                                                }}
                                            >

                                                LEV 1
                                            </span>
                                        </div>
                                        <h6 className="card-title">12 lessons</h6>
                                        <h5></h5>
                                        <h6 style={{ color: "rgb(255, 186, 13)", display: "inline" }}>
                                            Instructor
                                        </h6>
                                        : Mohamed Nour
                                        <h5 style={{ color: "aliceblue" }}></h5>
                                        <h6 style={{ color: "rgb(255, 186, 13)", display: "inline" }}>
                                            Start Date
                                        </h6>
                                        : Thursday , June 8th
                                    </div>
                                    <a
                                        href="#"
                                        className="btn btn-warning"
                                        style={{ width: "100%", display: "block", marginTop: 25 }}
                                    >
                                        ENROLL
                                    </a>
                                    <a
                                        href="#"
                                        className="link-light  "
                                        style={{
                                            textDecoration: "none",
                                            display: "block",
                                            marginTop: 15,
                                            marginLeft: "70%"
                                        }}
                                    >
                                        View Details
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className=" col-sm-12 cardparent">
                            <div
                                className="card "
                                style={{ width: "100%", backgroundColor: "black" }}
                            >
                                <div className="courcesimg"></div>
                                <div className="card-body">
                                    <div style={{ color: "aliceblue" }}>
                                        <div className="card-title">
                                            <span style={{ fontWeight: "bold" }}>HTML Basics</span>
                                            <span
                                                style={{
                                                    display: "inline-block",
                                                    marginLeft: "55%",
                                                    fontWeight: "bold"
                                                }}
                                            >

                                                LEV 1
                                            </span>
                                        </div>
                                        <h6 className="card-title">12 lessons</h6>
                                        <h5></h5>
                                        <h6 style={{ color: "rgb(255, 186, 13)", display: "inline" }}>
                                            Instructor
                                        </h6>
                                        : Mohamed Nour
                                        <h5 style={{ color: "aliceblue" }}></h5>
                                        <h6 style={{ color: "rgb(255, 186, 13)", display: "inline" }}>
                                            Start Date
                                        </h6>
                                        : Thursday , June 8th
                                    </div>
                                    <a
                                        href="#"
                                        className="btn btn-warning"
                                        style={{ width: "100%", display: "block", marginTop: 25 }}
                                    >
                                        ENROLL
                                    </a>
                                    <a
                                        href="#"
                                        className="link-light  "
                                        style={{
                                            textDecoration: "none",
                                            display: "block",
                                            marginTop: 15,
                                            marginLeft: "70%"
                                        }}
                                    >
                                        View Details
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className=" col-sm-12 cardparent">
                            <div
                                className="card "
                                style={{ width: "100%", backgroundColor: "black" }}
                            >
                                <div className="courcesimg"></div>
                                <div className="card-body">
                                    <div style={{ color: "aliceblue" }}>
                                        <div className="card-title">
                                            <span style={{ fontWeight: "bold" }}>HTML Basics</span>
                                            <span
                                                style={{
                                                    display: "inline-block",
                                                    marginLeft: "55%",
                                                    fontWeight: "bold"
                                                }}
                                            >

                                                LEV 1
                                            </span>
                                        </div>
                                        <h6 className="card-title">12 lessons</h6>
                                        <h5></h5>
                                        <h6 style={{ color: "rgb(255, 186, 13)", display: "inline" }}>
                                            Instructor
                                        </h6>
                                        : Mohamed Nour
                                        <h5 style={{ color: "aliceblue" }}></h5>
                                        <h6 style={{ color: "rgb(255, 186, 13)", display: "inline" }}>
                                            Start Date
                                        </h6>
                                        : Thursday , June 8th
                                    </div>
                                    <a
                                        href="#"
                                        className="btn btn-warning"
                                        style={{ width: "100%", display: "block", marginTop: 25 }}
                                    >
                                        ENROLL
                                    </a>
                                    <a
                                        href="#"
                                        className="link-light  "
                                        style={{
                                            textDecoration: "none",
                                            display: "block",
                                            marginTop: 15,
                                            marginLeft: "70%"
                                        }}
                                    >
                                        View Details
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export default Courses; 