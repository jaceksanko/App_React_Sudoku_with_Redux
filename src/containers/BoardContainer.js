import { connect } from 'react-redux';
import Board from '../components/Board';


const mapStateToProps = state => {
    return {
        appState: state
    };
};

export default connect(mapStateToProps)(Board);