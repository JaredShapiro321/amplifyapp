import React, { Component } from "react";
import "./Default.css";

class About extends Component {
    render() {
        return (
            <div className="content-inner">
                <h1 class="Head">ABOUT</h1>
                <p>
                    Web application designed to help students find what food is
                    offered where and to help track their meals throughout the
                    week.
                </p>

                <p>
                    {"For information on future plans or development visit the "}
                    <a
                        style={{ color: "#c62034" }}
                        href="https://github.com/JaredShapiro321/amplifyapp"
                    >
                        Github.
                    </a>
                </p>

                <p>Developed by Jared Shapiro.</p>

                <p>
                    {"Contact "}
                    <a
                        style={{ color: "#c62034" }}
                        href="mailto:shapir11@miamioh.edu"
                    >
                        shapir11@miamioh.edu
                    </a>
                    {" or open a new issue on "}
                    <a
                        style={{ color: "#c62034" }}
                        href="https://github.com/JaredShapiro321/amplifyapp"
                    >
                        Github
                    </a>
                    {" with feedback or concerns."}
                </p>
            </div>
        );
    }
}
export default About;
