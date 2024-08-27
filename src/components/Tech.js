import React from "react";
const Tech = () => {
    return (
        <>
            <section>
                <div className="courcessection">
                    <div className="overlaycourses">
                        <div className="container" style={{ paddingTop: 50 }}>
                            <h5 style={{ color: "aliceblue" }}>Tech</h5>
                            <div
                                style={{
                                    backgroundColor: "rgb(255, 186, 13)",
                                    width: 80,
                                    height: 3
                                }}
                            />
                            <h6 style={{ color: "aliceblue" }}>6th June 2023</h6>
                        </div>
                        <div className=" container containertech">
                            <div
                                className="container"
                                style={{ color: "aliceblue", marginTop: 20 }}
                            >
                                <h4>Python Programming Language</h4>
                                <h5></h5>
                                <h6 style={{ color: "rgb(255, 186, 13)", display: "inline" }}>
                                    Instructor
                                </h6>
                                : Mohamed Nour
                                <img
                                    src="./images/download (1).jfif"
                                    alt="python_icon"
                                    className="imgtech"
                                />
                            </div>
                            <div className="container lessondivparent">
                                <div className="lesson_level_div" style={{ display: "flex" }}>
                                    <div>
                                        <i
                                            className="fas fa-clipboard-list"
                                            style={{ color: "rgb(255, 186, 13)", fontSize: 40 }}
                                        />
                                        <div style={{ display: "inline-block", marginLeft: 30 }}>
                                            <h6 className="card-title"> lessons</h6>
                                            <h6 className="card-title"> 12</h6>
                                        </div>
                                    </div>
                                    <div style={{ marginLeft: 50 }}>
                                        <i
                                            className="fas fa-play"
                                            style={{ color: "rgb(255, 186, 13)", fontSize: 40 }}
                                        />
                                        <div style={{ display: "inline-block", marginLeft: 30 }}>
                                            <h6 className="card-title"> Level</h6>
                                            <h6 className="card-title"> Beginner</h6>
                                        </div>
                                    </div>
                                </div>
                                {/*lesson_level_div */}
                                <div style={{ color: "aliceblue", paddingTop: 15 }}>
                                    <h5>
                                        <i className="fas fa-user" /> Students : 20
                                    </h5>
                                    <h5>
                                        <i className="fas fa-language" /> Language : Arabic
                                    </h5>
                                    <h5>

                                        <i className="far fa-clock" /> Duration : 13 hours
                                    </h5>
                                    <h5>

                                        <i className="fas fa-calendar-alt" /> Start Date :
                                        Wednesday,June 7th
                                    </h5>
                                    <h5>

                                        <i className="fas fa-graduation-cap" /> Certificate : Upon
                                        comletion
                                    </h5>
                                </div>
                                <a
                                    href="#"
                                    className="btn btn-warning"
                                    style={{
                                        width: "20rem",
                                        display: "block",
                                        marginTop: 25,
                                        color: "aliceblue"
                                    }}
                                >
                                    ENROLL
                                </a>
                            </div>
                        </div>
                        {/*containertech */}
                    </div>
                    {/* overlaycourses  */}
                </div>
                {/* courcessection   */}
            </section>
            <section>
                <div className="container assesmentaccordiondiv">
                    <div className="accordiondiv">
                        <h4>Introduction</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
                            hic ex autem deleniti sit, corporis voluptate, ullam illo eaque
                            necessitatibus voluptas sequi eius neque saepe quibusdam quaerat sint
                            rerum mollitia!
                        </p>
                        <h4>lessons</h4>
                        <div className="accordion" id="accordionPanelsStayOpenExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button text-light"
                                        style={{ backgroundColor: "black" }}
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#panelsStayOpen-collapseOne"
                                        aria-expanded="true"
                                        aria-controls="panelsStayOpen-collapseOne"
                                    >
                                        Introduction to Python
                                    </button>
                                </h2>
                                <div
                                    id="panelsStayOpen-collapseOne"
                                    className="accordion-collapse collapse show"
                                >
                                    <div
                                        className="accordion-body "
                                        style={{ backgroundColor: "black", color: "aliceblue" }}
                                    >
                                        <strong>This is the first item's accordion body.</strong> It is
                                        shown by default, until the collapse plugin adds the appropriate
                                        classes that we use to style each element. These classes control
                                        the overall appearance, as well as the showing and hiding via
                                        CSS transitions. You can modify any of this with custom CSS or
                                        overriding our default variables. It's also worth noting that
                                        just about any HTML can go within the , though the transition
                                        does limit overflow.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed text-light "
                                        style={{ backgroundColor: "black" }}
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#panelsStayOpen-collapseTwo"
                                        aria-expanded="false"
                                        aria-controls="panelsStayOpen-collapseTwo"
                                    >
                                        Functions
                                    </button>
                                </h2>
                                <div
                                    id="panelsStayOpen-collapseTwo"
                                    className="accordion-collapse collapse"
                                >
                                    <div
                                        className="accordion-body "
                                        style={{ backgroundColor: "black", color: "aliceblue" }}
                                    >
                                        <strong>This is the second item's accordion body.</strong> It is
                                        hidden by default, until the collapse plugin adds the
                                        appropriate classes that we use to style each element. These
                                        classes control the overall appearance, as well as the showing
                                        and hiding via CSS transitions. You can modify any of this with
                                        custom CSS or overriding our default variables. It's also worth
                                        noting that just about any HTML can go within the , though the
                                        transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed text-light "
                                        style={{ backgroundColor: "black" }}
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#panelsStayOpen-collapseThree"
                                        aria-expanded="false"
                                        aria-controls="panelsStayOpen-collapseThree"
                                    >
                                        Arrays
                                    </button>
                                </h2>
                                <div
                                    id="panelsStayOpen-collapseThree"
                                    className="accordion-collapse collapse"
                                >
                                    <div
                                        className="accordion-body"
                                        style={{ backgroundColor: "black", color: "aliceblue" }}
                                    >
                                        <strong>This is the third item's accordion body.</strong> It is
                                        hidden by default, until the collapse plugin adds the
                                        appropriate classes that we use to style each element. These
                                        classes control the overall appearance, as well as the showing
                                        and hiding via CSS transitions. You can modify any of this with
                                        custom CSS or overriding our default variables. It's also worth
                                        noting that just about any HTML can go within the , though the
                                        transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="assesmentdiv">
                        <h4>Assessment</h4>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
                            cumque, ut officia nulla, dicta impedit assumenda, adipisci eum vel
                            voluptates ullam nemo debitis ipsum labore atque accusamus dolorem.
                            Voluptates, error.
                        </p>
                        <h4>Requirements</h4>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
                            cumque, ut officia nulla, dicta impedit assumenda, adipisci eum vel
                            voluptates ullam nemo debitis ipsum labore atque accusamus dolorem.
                            Voluptates, error.
                        </p>
                        <h4>Materials</h4>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
                            cumque, ut officia nulla, dicta impedit assumenda, adipisci eum vel
                            voluptates ullam nemo debitis ipsum labore atque accusamus dolorem.
                            Voluptates, error.
                        </p>
                    </div>
                </div>
            </section>
            <section>
                <div className="courcessection">
                    <div className="overlaycourses">
                        <div className="container" style={{ paddingTop: 50 }}>
                            <h5 style={{ color: "aliceblue" }}>Tech</h5>
                            <div
                                style={{
                                    backgroundColor: "rgb(255, 186, 13)",
                                    width: 80,
                                    height: 3
                                }}
                            />
                            <h6 style={{ color: "aliceblue" }}>6th June 2023</h6>
                        </div>
                        <div className=" container containertech">
                            <div
                                className="container"
                                style={{ color: "aliceblue", marginTop: 20 }}
                            >
                                <h4>Python Programming Language</h4>
                                <h5></h5>
                                <h6 style={{ color: "rgb(255, 186, 13)", display: "inline" }}>
                                    Instructor
                                </h6>
                                : Mohamed Nour
                                <img
                                    src="./images/download (1).jfif"
                                    alt="python_icon"
                                    className="imgtech"
                                />
                            </div>
                            <div className="container lessondivparent">
                                <div className="lesson_level_div" style={{ display: "flex" }}>
                                    <div>
                                        <i
                                            className="fas fa-clipboard-list"
                                            style={{ color: "rgb(255, 186, 13)", fontSize: 40 }}
                                        />
                                        <div style={{ display: "inline-block", marginLeft: 30 }}>
                                            <h6 className="card-title"> lessons</h6>
                                            <h6 className="card-title"> 12</h6>
                                        </div>
                                    </div>
                                    <div style={{ marginLeft: 50 }}>
                                        <i
                                            className="fas fa-play"
                                            style={{ color: "rgb(255, 186, 13)", fontSize: 40 }}
                                        />
                                        <div style={{ display: "inline-block", marginLeft: 30 }}>
                                            <h6 className="card-title"> Level</h6>
                                            <h6 className="card-title"> Beginner</h6>
                                        </div>
                                    </div>
                                </div>
                                {/*lesson_level_div */}
                                <div style={{ color: "aliceblue", paddingTop: 15 }}>
                                    <h5>
                                        <i className="fas fa-user" /> Students : 20
                                    </h5>
                                    <h5>
                                        <i className="fas fa-language" /> Language : Arabic
                                    </h5>
                                    <h5>

                                        <i className="far fa-clock" /> Duration : 13 hours
                                    </h5>
                                    <h5>

                                        <i className="fas fa-calendar-alt" /> Start Date :
                                        Wednesday,June 7th
                                    </h5>
                                    <h5>

                                        <i className="fas fa-graduation-cap" /> Certificate : Upon
                                        comletion
                                    </h5>
                                </div>
                                <a
                                    href="#"
                                    className="btn btn-secondary"
                                    style={{
                                        width: "20rem",
                                        display: "block",
                                        marginTop: 25,
                                        color: "aliceblue"
                                    }}
                                >
                                    ENROLLED
                                </a>
                            </div>
                        </div>
                        {/*containertech */}
                    </div>
                    {/* overlaycourses  */}
                </div>
                {/* courcessection   */}
            </section>
            <section>
                <div className="container assesmentaccordiondiv">
                    <div className="accordiondiv">
                        <h4>Introduction</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
                            hic ex autem deleniti sit, corporis voluptate, ullam illo eaque
                            necessitatibus voluptas sequi eius neque saepe quibusdam quaerat sint
                            rerum mollitia!
                        </p>
                        <h4>lessons</h4>
                        <div className="accordion" id="accordionPanelsStayOpenExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button text-light"
                                        style={{ backgroundColor: "black" }}
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#panelsStayOpen-collapseOne"
                                        aria-expanded="true"
                                        aria-controls="panelsStayOpen-collapseOne"
                                    >
                                        Introduction to Python
                                    </button>
                                </h2>
                                <div
                                    id="panelsStayOpen-collapseOne"
                                    className="accordion-collapse collapse show"
                                >
                                    <div
                                        className="accordion-body "
                                        style={{ backgroundColor: "black", color: "aliceblue" }}
                                    >
                                        <strong>This is the first item's accordion body.</strong> It is
                                        shown by default, until the collapse plugin adds the appropriate
                                        classes that we use to style each element. These classes control
                                        the overall appearance, as well as the showing and hiding via
                                        CSS transitions. You can modify any of this with custom CSS or
                                        overriding our default variables. It's also worth noting that
                                        just about any HTML can go within the , though the transition
                                        does limit overflow.
                                        <a
                                            href="#"
                                            className="btn btn-warning"
                                            style={{
                                                width: "14rem",
                                                display: "block",
                                                marginTop: 25,
                                                marginLeft: "auto",
                                                color: "aliceblue"
                                            }}
                                        >
                                            WATCH LECTURE
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed text-light "
                                        style={{ backgroundColor: "black" }}
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#panelsStayOpen-collapseTwo"
                                        aria-expanded="false"
                                        aria-controls="panelsStayOpen-collapseTwo"
                                    >
                                        Functions
                                    </button>
                                </h2>
                                <div
                                    id="panelsStayOpen-collapseTwo"
                                    className="accordion-collapse collapse"
                                >
                                    <div
                                        className="accordion-body "
                                        style={{ backgroundColor: "black", color: "aliceblue" }}
                                    >
                                        <strong>This is the second item's accordion body.</strong> It is
                                        hidden by default, until the collapse plugin adds the
                                        appropriate classes that we use to style each element. These
                                        classes control the overall appearance, as well as the showing
                                        and hiding via CSS transitions. You can modify any of this with
                                        custom CSS or overriding our default variables. It's also worth
                                        noting that just about any HTML can go within the , though the
                                        transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed text-light "
                                        style={{ backgroundColor: "black" }}
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#panelsStayOpen-collapseThree"
                                        aria-expanded="false"
                                        aria-controls="panelsStayOpen-collapseThree"
                                    >
                                        Arrays
                                    </button>
                                </h2>
                                <div
                                    id="panelsStayOpen-collapseThree"
                                    className="accordion-collapse collapse"
                                >
                                    <div
                                        className="accordion-body"
                                        style={{ backgroundColor: "black", color: "aliceblue" }}
                                    >
                                        <strong>This is the third item's accordion body.</strong> It is
                                        hidden by default, until the collapse plugin adds the
                                        appropriate classes that we use to style each element. These
                                        classes control the overall appearance, as well as the showing
                                        and hiding via CSS transitions. You can modify any of this with
                                        custom CSS or overriding our default variables. It's also worth
                                        noting that just about any HTML can go within the , though the
                                        transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="assesmentdiv">
                        <h4>Assessment</h4>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
                            cumque, ut officia nulla, dicta impedit assumenda, adipisci eum vel
                            voluptates ullam nemo debitis ipsum labore atque accusamus dolorem.
                            Voluptates, error.
                        </p>
                        <h4>Requirements</h4>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
                            cumque, ut officia nulla, dicta impedit assumenda, adipisci eum vel
                            voluptates ullam nemo debitis ipsum labore atque accusamus dolorem.
                            Voluptates, error.
                        </p>
                        <h4>Materials</h4>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
                            cumque, ut officia nulla, dicta impedit assumenda, adipisci eum vel
                            voluptates ullam nemo debitis ipsum labore atque accusamus dolorem.
                            Voluptates, error.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Tech ; 