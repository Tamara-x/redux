import React, {Component} from 'react';
import Table from './table';
import PersonDetails from './personDetails';

class Home extends Component {
    render() {
        return (
            <div className="App">
                <Table />
                <PersonDetails />
            </div>
        );
    }
}

export default Home;
