import React from 'react';
import {connect} from 'react-redux';
import {selectPerson} from '../actionCreators/index';
import {editedPerson} from '../actionCreators/index';
import {deletePerson} from '../actionCreators/index';
import {addPerson} from '../actionCreators/index';
import {bindActionCreators} from "redux";

class Table extends React.Component {
    render(){
        // const persons = this.props;
        // const personList = persons.length ? (
        //     persons.map(person => {
        //         return (
        //             <div>
        //                 {person.name}
        //             </div>
        //         )
        //     })
        // ) : (
        //     <div className="center">Not working</div>
        // )
        //
        // return(
        //     <div>
        //         {personList}
        //     </div>
        // )
            const persons = this.props;
            console.log(persons);
            return (

            persons.map((person) => {
                return (
                    <tr key={person.id}>
                        <td>{person.name}</td>
                        <td>{person.age}</td>
                        <td>
                            <button onClick={() => this.props.selectPerson(person)}>Edit</button>
                            <button onClick={() => this.props.deletePerson(person)}>Delete</button>
                        </td>
                    </tr>
                )
            }
            )
            )

    }

    // createTableItems() {
    //     return this.props.persons.map((person) => {
    //         return (
    //             <tr key={person.id}>
    //                 <td>{person.name}</td>
    //                 <td>{person.age}</td>
    //                 <td><button onClick={() => this.props.selectPerson(person)}>Edit</button>
    //                     <button onClick={() => this.props.deletePerson(person)}>Delete</button>
    //                 </td>
    //             </tr>
    //         )
    //     })
    // }
    //
    // render() {
    //     const persons = this.props;
    //     console.log(persons);
    //     return (
    //
    //     persons.map((person) => {
    //         return (
    //             <tr key={person.id}>
    //                 <td>{person.name}</td>
    //                 <td>{person.age}</td>
    //                 <td>
    //                     <button onClick={() => this.props.selectPerson(person)}>Edit</button>
    //                     <button onClick={() => this.props.deletePerson(person)}>Delete</button>
    //                 </td>
    //             </tr>
    //         )
    //     }
    //     )
    //     )
    // }
    //


        // return (
        //     <div>
        //         <table className="table table-striped table-dark personTable">
        //             <thead>
        //                 <tr>
        //                     <th>Name</th>
        //                     <th>Age</th>
        //                     <th>Actions</th>
        //                 </tr>
        //             </thead>
        //             <tbody>
        //
        //             </tbody>
        //         </table>
        //         <button>Add</button>
        //     </div>
        // )
}

function mapStateToProps(state) {
    console.log(state);
    return {
        persons: state.persons.persons
    };
}


function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        selectPerson: selectPerson,
        editPerson: editedPerson,
        deletePerson: deletePerson,
        addPerson: addPerson},
        dispatch)
}


export default connect(mapStateToProps, matchDispatchToProps)(Table);