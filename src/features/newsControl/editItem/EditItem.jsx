import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { modalOpened } from 'redux/slices/modalSlice';
import useGetPost from 'hooks/useGetPost';
import { useEffect } from 'react';

const EditItem = props => {
  const dispatch = useDispatch();
  const { configuration } = props;
  const { id } = configuration;
  const { page, getData } = useGetPost(id);
  const { title, body } = page;

  useEffect(() => {
    getData();
  }, []);

  const handleClick = () => {
    dispatch(modalOpened({ name: 'CreateNewsForm', configuration: { ...configuration, title, body } }));
  };

  return (
    <button
      type="button"
      className="rounded-full w-[30px] h-[30px] bg-app-red bg-emerald-600"
      onClick={handleClick}
    >
      Edit
    </button>
  );
};

EditItem.propTypes = {
  configuration: PropTypes.exact({
    id: PropTypes.number.isRequired,
    entity: PropTypes.string.isRequired,
  }).isRequired,
};

export default EditItem;
