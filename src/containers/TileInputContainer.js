import { connect } from 'react-redux';
import TileInput from '../components/TileInput';
import { addValueTileInput } from '../redux/actions';

const mapDispatchToProps = dispatch => ({
    addValueTileInput: (value, id) => dispatch(addValueTileInput(value, id))
});


export default connect(null, mapDispatchToProps)(TileInput);