import PropTypes from 'prop-types';

import * as S from './styled';

function InputWithLabel({ testId, type, labelText, onChange }) {
  return (
    <S.Label htmlFor={ testId }>
      { labelText }
      <S.Input
        id={ testId }
        data-testid={ testId }
        type={ type }
        onChange={ (e) => onChange(e.target.value) }
      />
    </S.Label>
  );
}

InputWithLabel.propTypes = {
  testId: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputWithLabel;
