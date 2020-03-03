import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from "redux";
import {addPerson, closeEdit, editPerson} from "../actionCreators";


class EditComponent extends React.Component {
    constructor() {
        super();
    }
    render() {
        const dataPerson = {
            id: '',
            name: '',
            age: ''
        };

        const handleChange = (e) => {
            e.preventDefault();
            const name = this.getName.value;
            const age = this.getAge.value;
            dataPerson.id = this.props.ui.id;
            dataPerson.name = name;
            dataPerson.age = age;
            console.log(dataPerson);
        };
        const saveChange = (e) => {
            e.preventDefault();
            console.log("Save change");
            this.props.editPerson(dataPerson);
        };
        const cancelChange = (e) => {
            e.preventDefault();
            dataPerson.id = '';
            dataPerson.name = '';
            dataPerson.age = '';
            this.props.closeEdit(dataPerson);
        };
        return (
            <div>
                <form onSubmit={saveChange}>
                    <input required type="text"
                           defaultValue={this.props.ui.name}
                           onChange={handleChange}
                           ref={(input)=>this.getName = input}
                           placeholder="Enter name" />
                           <br /><br />
                    <input required type="text"
                           defaultValue={this.props.ui.age}
                           onChange={handleChange}
                           ref={(input)=>this.getAge= input}
                           placeholder="Enter age" />
                           <br /><br />
                    <button>Save</button>
                </form>
                <button onClick={cancelChange}>Cancel</button>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        persons: state.persons,
        ui: state.uiState.personToEdit
    };
}


function matchDispatchToProps(dispatch) {
    return bindActionCreators({
            editPerson: editPerson,
            closeEdit: closeEdit},
        dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(EditComponent);