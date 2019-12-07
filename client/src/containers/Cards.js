import Cards from "./../components/Cards";
import { connect } from 'react-redux';

function mapStateToProps({ state }) {
    return { matches: state.main.matches };
}

export default connect(mapStateToProps, null)(Cards);

