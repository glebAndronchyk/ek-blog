import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import CreateCommentForm from 'features/news/posts/postComments/createCommentForm/CreateCommentForm';
import IsAuthPlug from 'features/ui/isAuthPlug/IsAuthPlug';

const CreateCommentFormView = props => {
  const { postId } = props;
  const { isAuth } = useSelector(state => state.user);

  return isAuth ? <CreateCommentForm postId={postId} /> : <IsAuthPlug />;
};

CreateCommentFormView.propTypes = {
  postId: PropTypes.string.isRequired,
};

export default CreateCommentFormView;
