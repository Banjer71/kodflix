import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import getMovie from './GetMovie';
import './details.css';

class Details extends Component {
    constructor() {
        super();
        this.state = {
            getmovie: {}
        };
    }

    componentDidMount() {
        let movie_id = this.props.match.params.movie_id;
        let getmovie = getMovie().find((getmovie) => getmovie.id === movie_id);
        this.setState({ getmovie });

    }

    render() {
        if (this.state.getmovie === undefined) {
            return <Redirect to='/not-found' />
        } else {
            return (
                <div>
                    <h1>{this.state.getmovie.name}</h1>
                    <div className='container'>
                        <div className='synopsis'>
                            <p className='text'>{this.state.getmovie.synopsis}</p>
                        </div>
                        <img className='cover-image' src={this.state.getmovie.cover} alt={this.state.getmovie.name} />   
                    </div>
                    <Link to='/'>Back to the Homepage</Link>
                </div>
            )
        }

    }
}

export default Details