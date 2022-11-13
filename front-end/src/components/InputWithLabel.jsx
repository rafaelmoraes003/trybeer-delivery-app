import PropTypes from 'prop-types';

function InputWithLabel({ testId, type, labelText, onChange }) {
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

InputWithLabel.propTypes = {
  testId: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputWithLabel;
