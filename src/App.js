import React, {Component} from 'react';
import Motorcycles from './components/motorcycles';
import axios from 'axios';

class App extends Component {

    render() {
        return (
            <Motorcycles motorcycles={this.state.motorcycles} />
        )
    }

    state = {
        motorcycles: []
    };

    componentDidMount() {
        const options = {
            method: 'GET',
            url: 'https://motorcycle-specs-database.p.rapidapi.com/model/make-name/BMW',
            headers: {
              'X-RapidAPI-Key': '13b0f0d627msh71afbcc2d57667ep143c7ajsnb6fad3acd0cc',
              'X-RapidAPI-Host': 'motorcycle-specs-database.p.rapidapi.com'
            }
        };
        var me = this;

        axios.request(options)
            .then(function (response) {
                let data = response && response.data;
                
                if(data.length > 0){
                    // console.log(data.length, response.data, this);
                    me.setState({ 
                        motorcycles: data 
                    });
                }
            }).catch(function (error) {
                console.error(error);
            });
    }
}

export default App;
