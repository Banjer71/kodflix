import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
//import getMovie from './GetMovie';
import './details.css';


class Details extends Component {
    constructor() {
        super();
        this.state = {
            getmovie: {}
        };
    }

    componentDidMount() {
        fetch('/rest/shows')
            .then(response => response.json())
            .then(shows => {
                let movie_id = this.props.match.params.movie_id;
                let getmovie = shows.find((getmovie) => getmovie.id === movie_id);
                this.setState({ getmovie });
            })

        // let movie_id = this.props.match.params.movie_id;
        // let getmovie = getMovie().find((getmovie) => getmovie.id === movie_id);
        // this.setState({ getmovie });

    }

    render() {
        if (this.state.getmovie) {
            return this.state.getmovie.id ?
                <div>
                    <h1>{this.state.getmovie.name}</h1>
                    <div className='container'>
                        <div className='synopsis'>
                            <p className='text'>{this.state.getmovie.synopsis}</p>
                        </div>
                        <img className='cover-image' src={require(`../commons/img/${this.state.getmovie.id}.jpg`)} alt={this.state.getmovie.name} />
                    </div>
                    <Link to='/'>Back to the Homepage</Link> 
                  </div> : 
                <div />
        } else {
            return (
                <div>
                    <Redirect to='/not-found' />

                </div>
            )
        }

    }
}

export default Details