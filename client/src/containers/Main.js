// import React, { Component } from 'react';
import { initUpload } from '../actions';
import { loadData } from '../actions';
import { connect } from 'react-redux';
import Main from "./../components/Main";

function mapStateToProps(state) {
    return {
        url: state.main.url,
        matches: state.main.matches,
        errorMessage: state.main.errorMessage,
        data: state.main.data,
        data_error: state.main.data_error
    }
}

export default connect(mapStateToProps, { initUpload, loadData })(Main);
