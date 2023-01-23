import { LOADING, REJECTED } from '../helpers/loadingStatus';

import Spinner from '../components/spinner/Spinner';
import PostsList from '../components/postsList/PostsList';
import AnnouncementsList from '../components/announcementsList/AnnouncementsList';
import ErrorPlug from '../components/errorPlug/ErrorPlug';

// eslint-disable-next-line react/display-name
const withLoadingStatus = Component => props => {
  // eslint-disable-next-line react/prop-types
  const { initialLoading } = props;

  if (initialLoading === LOADING) return <Spinner />;
  if (initialLoading === REJECTED) return <ErrorPlug />;

  return <Component />;
};

export const ExtendedWithInitialLoadingPostsList = withLoadingStatus(PostsList);
export const ExtendedWithInitialLoadingAnnouncementsList = withLoadingStatus(AnnouncementsList);
