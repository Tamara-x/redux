import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from "redux";
import {addPerson, deletePerson, editedPerson} from "../actionCreators";


class ModalPerson extends React.Component {
    constructor() {
        super();
    }
    render() {
        const handleAdd = (e) => {

            e.preventDefault();
            const name = this.getName.value;
            const age = this.getAge.value;
            const dataPerson = {
                id: 100,
                name,
                age
            };
            // const dataAddPerson = {
            //     type: 'ADD_PERSON',
            //     dataPerson
            // };
            this.props.dispatch({type: 'ADD_PERSON', dataPerson});
        };
        return (
            <div>
                <form onSubmit={handleAdd}>
                    <input required type="text" ref={(input)=>this.getName = input} placeholder="Enter name" /><br /><br />
                    <input required type="text" ref={(input)=>this.getAge= input} placeholder="Enter age" /><br /><br />
                    <button>Save</button>
                </form>
                    <button>Cancel</button>
            </div>
        );
    }
}


function matchDispatchToProps(dispatch) {
    return bindActionCreators({
            addPerson: addPerson},
        dispatch)
}

export default connect( matchDispatchToProps)(ModalPerson);