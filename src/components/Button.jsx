import './Button.css';
import PropTypes from 'prop-types';

const Button = ({ text, styling, clickHandler }) => {
    return (
        <button className={`btn ${styling}`} onClick={clickHandler}>
            {text}
        </button>
    );
};

Button.defaultProps = {
    clickHandler: () => {},
    text: '',
    styling: ''
};

Button.propTypes = {
    clickHandler: PropTypes.func,
    text: PropTypes.string,
    styling: PropTypes.string
};

export default Button;
