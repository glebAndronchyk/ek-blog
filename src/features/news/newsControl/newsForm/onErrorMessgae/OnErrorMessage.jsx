import PropTypes from 'prop-types';

import InputErrorMessage from 'features/ui/inputs/inputError/inputErrorMessage/InputErrorMessage';
import { REJECTED } from 'helpers/loadingStatus';

const OnErrorMessage = props => {
  const { loading } = props;

  return loading === REJECTED && <InputErrorMessage>Something went wrong try again later</InputErrorMessage>;
};

OnErrorMessage.propTypes = {
  loading: PropTypes.string.isRequired,
};

export default OnErrorMessage;
