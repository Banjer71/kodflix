import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import getMovie from './GetMovie';

class Details extends Component {
    constructor() {
        super();
        this.state = {
            getmovie: {}
        };
    }

    componentDidMount() {
        let movie_id = this.props.match.params.movie_id;
        let getmovie = getMovie()
            .find( (getmovie) => getmovie.id === movie_id);
        this.setState({
            getmovie
        });

    }

    render() {
        return (
            <div>
                <h1>{this.state.getmovie.name}</h1>
                <Link to='/'>Back to the Homepage</Link>
            </div>
        )
    }
}

export default Details