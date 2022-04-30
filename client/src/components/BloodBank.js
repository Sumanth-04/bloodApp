import React from 'react';
import PropTypes from 'prop-types';
import MapContainer from "./MapContainer";
import { Card } from 'antd';

class BloodBank extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div style={{background:"#f0f2f5",padding:"1%"}}>
                
                <Card title="BloodBank Name"  style={{  marginLeft:"38%",marginRight:"38%",marginBottom:"1%"}}>
                    <p>BloodBank Details</p>
                    <p>BloodBank Details</p>
                    <p>BloodBank Details</p>
                </Card>
                <MapContainer styles={{paddingLeft:'100px'}} />

            </div>
        );
    }
}

BloodBank.propTypes = {};

export default BloodBank;
