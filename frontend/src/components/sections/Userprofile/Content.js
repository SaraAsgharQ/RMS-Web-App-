import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Tab, Nav } from "react-bootstrap";

import customerimg from '../../../assets/img/RMS/customer-5.jpg'

class Content extends Component {
    render() {
        return (
            <div className="ms-content-wrapper">
                <div className="ms-profile-overview">
                    <div className="ms-profile-cover">
                        <img className="ms-profile-img" src={customerimg} alt="people" />
                        <div className="ms-profile-user-info">
                            <h4 className="ms-profile-username text-white">Chihoo Hwang</h4>
                            <h2 className="ms-profile-role">Professional Cheff</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="ms-panel ms-panel-fh">
                            <div className="ms-panel-body">
                                <h2 className="section-title">Basic Information</h2>
                                <table className="table ms-profile-information">
                                    <tbody>
                                        <tr>
                                            <th scope="row">Full Name</th>
                                            <td>Chihoo Hwang</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Birthday</th>
                                            <td>January 25th, 1996</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Language</th>
                                            <td>English (US)</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Website</th>
                                            <td>www.example.com</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Phone Number</th>
                                            <td>+123 456 789</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Email Address</th>
                                            <td>example@mail.com</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Location</th>
                                            <td>New York, USA</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

        );
    }
}

export default Content;