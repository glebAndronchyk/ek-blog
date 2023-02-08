import { Navigate, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { lazy, Suspense } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faTrashCan,
  faPen,
  faLock,
  faRightFromBracket,
  faPaperPlane,
  faCheck,
} from '@fortawesome/free-solid-svg-icons';

import store from 'redux/store';
import Layout from 'pages/Layout';
import Spinner from 'features/ui/spinner/Spinner';
import ProtectedRoute from 'features/protectedRoute/ProtectedRoute';

const Announcements = lazy(() => import('pages/Announcements'));
const Posts = lazy(() => import('pages/Posts'));
const SinglePostPage = lazy(() => import('pages/singlePostPage/SinglePostPage'));
const Registration = lazy(() => import('pages/Registration'));
const UserProfile = lazy(() => import('pages/UserProfile'));

library.add(faTrashCan, faPen, faLock, faRightFromBracket, faPaperPlane, faCheck);

const AppRoutes = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route
          path="/"
          element={<Layout />}
        >
          <Route
            path="posts"
            element={
              <Suspense fallback={<Spinner wrapperClassName="pt-20" />}>
                <Posts />
              </Suspense>
            }
          />
          <Route
            path="posts/:postId"
            element={
              <Suspense fallback={<Spinner wrapperClassName="pt-20" />}>
                <SinglePostPage />
              </Suspense>
            }
          />

          <Route
            path="announcements"
            element={
              <Suspense fallback={<Spinner wrapperClassName="pt-20" />}>
                <Announcements />
              </Suspense>
            }
          />

          <Route element={<ProtectedRoute onLoginAccess />}>
            <Route
              path="profile"
              element={
                <Suspense fallback={<Spinner wrapperClassName="pt-20" />}>
                  <UserProfile />
                </Suspense>
              }
            >
              <Route
                path="settings"
                element={
                  <Suspense fallback={<Spinner wrapperClassName="pt-20" />}>
                    <div>test</div>
                  </Suspense>
                }
              />

              <Route
                path="/profile"
                element={
                  <Navigate
                    to="settings"
                    replace
                  />
                }
              />
            </Route>
          </Route>

          <Route
            path="/"
            element={
              <Navigate
                to="/posts"
                replace
              />
            }
          />
        </Route>

        <Route element={<ProtectedRoute page="registration" />}>
          <Route
            path="registration"
            element={
              <Suspense fallback={<Spinner wrapperClassName="pt-20" />}>
                <Registration />
              </Suspense>
            }
          />
        </Route>

        <Route
          path="*"
          element={<div>Not found</div>}
        />
      </Routes>
    </Provider>
  );
};

export default AppRoutes;
