import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Details extends Component {
    constructor() {
        super();
        this.state= {
            welcomeMessage: 'Hello to the deatils page'
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                welcomeMessage: 'Stay with us...the best is yet to come'
            });
        }, 2000);
    }

    render() {
        return (
            <div>
                <h1>{this.state.welcomeMessage}</h1>
                <Link to='/'>Back to the Homepage</Link>
            </div>
        )
    }
}

export default Details