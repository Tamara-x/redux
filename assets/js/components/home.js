import React, {Component} from 'react';
import Table from './table';
import AddPerson from './ModalPerson';
import EditPerson from './EditComponent';

class Home extends Component {
    render() {
        return (
            <div className="App">
                <Table />
                <AddPerson />
                <br />
                <EditPerson />
            </div>
        );
    }
}

export default Home;
