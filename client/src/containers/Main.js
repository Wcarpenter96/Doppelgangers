// import React, { Component } from 'react';
import { initUpload } from '../actions';
import { loadData } from '../actions';
import { connect } from 'react-redux';
import Main from "./../components/Main";

function mapStateToProps(state) {
    return {
        image_url: state.main.image_url,
        matches: state.main.matches,
        errorMessage: state.main.errorMessage,
        data: state.main.data,
        data_error: state.main.data_error
    }
}

export default connect(mapStateToProps, { initUpload, loadData })(Main);
