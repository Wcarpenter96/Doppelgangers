import Cards from "./../components/Cards";
import { connect } from 'react-redux';

function mapStateToProps({ matches }) {
    return { matches: matches };
}

export default connect(mapStateToProps, null)(Cards);

