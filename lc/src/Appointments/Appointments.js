import React, { Component } from 'react';
import Navi from '../Nav/Navi';
import Calendar from 'react-calendar';

class Appointments extends Component {
    render() {
        return (
            <div>
                <Navi />
                <Calendar />
            </div>
        );
    }
}

export default Appointments;