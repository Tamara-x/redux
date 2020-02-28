import React from 'react';
import {connect} from 'react-redux';
import {selectPerson, editedPerson, deletePerson, addPerson} from '../actionCreators/index';
import {bindActionCreators} from "redux";

class Table extends React.Component {
    createTableItems() {
        return this.props.persons.map((person) => {
            return (
                <tr key={person.id}>
                    <td>{person.name}</td>
                    <td>{person.age}</td>
                    <td>
                        <button onClick={() => this.props.selectPerson(person)}>Edit</button>
                        <button onClick={() => this.props.deletePerson(person.id)}>Delete</button>
                    </td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div>
                <table className="table table-striped table-dark personTable">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.createTableItems()}
                    </tbody>
                </table>
                <button>Add</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        persons: state.persons
    };
}


function matchDispatchToProps(dispatch) {
    // return bindActionCreators({
    //     selectPerson: selectPerson,
    //     editPerson: editedPerson,
    //     deletePerson: deletePerson,
    //     addPerson: addPerson},
    //     dispatch)
    return {
        deletePerson: (id) => {
            dispatch(deletePerson(id))
        }
    }
}


export default connect(mapStateToProps, matchDispatchToProps)(Table);