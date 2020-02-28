import React from 'react';
import {connect} from 'react-redux';

class PersonDetails extends React.Component {
    render() {
        return (
          <div>
            <p></p>
          </div>
        );
    }
}

function mapStateToProps(state) {
    return {

    };
}

export default connect(mapStateToProps)(PersonDetails);