import PropTypes from 'prop-types';

function Input({ testId, type, labelText, onChange }) {
  return (
    <label htmlFor={ testId }>
      { labelText }
      <input
        id={ testId }
        data-testid={ testId }
        type={ type }
        onChange={ (e) => onChange(e.target.value) }
      />
    </label>
  );
}

Input.propTypes = {
  testId: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
