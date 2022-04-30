import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom"
import { Card } from 'antd';


class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        console.log("profile props")
        console.log(this.props)
        return (
            <div>
                <Card title="Profile"  style={{  marginLeft:"38%",marginRight:"38%",marginBottom:"1%"}}>
                    <p>Email : {this.props.email_id}</p>
                    <p>Full Name : {this.props.fullName}</p>
                    <p>{this.props.isDonor ? "You are a Donor" : "You are a Blood Bank Admin"}</p>
                <Link to="/dashboard" >Back to Dashboard</Link>
                </Card>
            </div>
        );
    }
}

Profile.propTypes = {};

export default Profile;
