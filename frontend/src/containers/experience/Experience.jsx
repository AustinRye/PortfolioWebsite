import React, { Component, Fragment } from "react";
import { Container, Row } from "react-bootstrap";

import RCMPImg from "../../images/rcmp-logo.png";
import CPRTImg from "../../images/cprt-waldo.jpg";
import CUinSpaceImg from "../../images/cuinspace-rocket.png";

import ExperienceGroup from "./ExperienceGroup";

class Experience extends Component {
    state = {
        experienceList: [
            {
                id: 1,
                title: "RF and Wireless Systems Engineer",
                organization: "RCMP Technical Operations",
                date: "Sep 2018 - Apr 2019",
                work: {
                    image: RCMPImg,
                    description:
                        "Researched, designed and developed RF investigative tools",
                    bulletPoints: [
                        "Developed full-stack web applications using the Django/Flask framework with back-end in Python and SQLite and front-end in JavaScript, HTML, CSS and Bootstrap",
                        "Built web servers in Linux using Python and Bash scripts ",
                        "Developed low-level applications in embedded C for microcontrollers and microprocessors ",
                        "Developed desktop applications in C#",
                        "Maintained and tested code using Git",
                        "Developed wireless technologies in LTE, WCDMA, GSM, GPS, WIFI, Bluetooth, etc.",
                        "Designed, prototyped and tested PCBs",
                        "Measured and characterized RF signals & systems using Spectrum Analyzers, VNAs, Oscilloscopes, etc.",
                        "Evaluated and tested specialized antennas",
                        "Developed test procedures and setups for various RF systems"
                    ]
                }
            },
            {
                id: 2,
                title: "Electrical Design Lead",
                organization: "Carleton Planetary Robotics Team",
                date: "Sep 2016 - Present",
                work: {
                    image: CPRTImg,
                    description:
                        "Designed, built, and programmed a Mars Rover to compete in International Rover Competitions",
                    bulletPoints: [
                        "Designed the power system: battery, emergency stop relay, regulators, protection circuits, microcontroller breakout, power distribution, etc.",
                        "Designed and integrated custom PCBs using Altium Designer",
                        "Soldered, assembled and wired PCBs and electrical components",
                        "Tested and troubleshooted PCBs using scilloscopes, multimeters, signal generators, etc.",
                        "Managed power consumption and financial budget"
                    ]
                }
            },
            {
                id: 3,
                title: "Computer Systems Engineering Member",
                organization: "CUinSpace",
                date: "Sep 2018 - Present",
                work: {
                    image: CUinSpaceImg,
                    description:
                        "Designed, built, and programmed a Rocket to compete in International Rocket Competitions.",
                    bulletPoints: [
                        "Designed sensor/control systems for the rocket: RF system, GPS tracking, temperature sensors, drone deployment, engine ignition, etc.",
                        "Programmed ARM microcontrollers in embedded C",
                        "Designed and integrated custom PCBs using Eagle"
                    ]
                }
            }
        ]
    };

    render() {
        return (
            <section id="experience">
                <Container fluid>
                    <Row className="heading">
                        <h2>EXPERIENCE</h2>
                    </Row>
                </Container>
                <Container className="experience-groups" fluid>
                    {this.state.experienceList.map((experienceGroup, id) => {
                        if (id === 0) {
                            return (
                                <div key={experienceGroup.id} className="experience-group">
                                    <ExperienceGroup experienceGroup={experienceGroup} />
                                </div>
                            );
                        } else {
                            return (
                                <Fragment>
                                    <hr />
                                    <div key={experienceGroup.id} className="experience-group">
                                        <ExperienceGroup experienceGroup={experienceGroup} />
                                    </div>
                                </Fragment>
                            );
                        }
                    })}
                </Container>
            </section>
        );
    }
}

export default Experience;
