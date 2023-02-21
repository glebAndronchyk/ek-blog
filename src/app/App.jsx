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
  faBars,
  faXmark,
  faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';

import store from 'redux/store';
import Layout from 'pages/Layout';
import Spinner from 'features/ui/spinner/Spinner';
import ProtectedRoute from 'features/protectedRoute/ProtectedRoute';

const Announcements = lazy(() => import('pages/Announcements'));
const Posts = lazy(() => import('pages/Posts'));
const SinglePostPage = lazy(() => import('pages/singlePostPage/SinglePostPage'));
const Registration = lazy(() => import('pages/Registration'));
const UserProfile = lazy(() => import('pages/userProfile/UserProfile'));
const ProfileSettingsForm = lazy(() => import('pages/userProfile/ProfileSettingsForm'));
const UserNewsPage = lazy(() => import('pages/userProfile/UserNewsPage'));

library.add(faTrashCan, faPen, faLock, faRightFromBracket, faPaperPlane, faCheck, faBars, faXmark, faArrowLeft);

const App = () => {
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
                    <ProfileSettingsForm />
                  </Suspense>
                }
              />
              <Route
                path="userNews"
                element={
                  <Suspense fallback={<Spinner wrapperClassName="pt-20" />}>
                    <UserNewsPage />
                  </Suspense>
                }
              >
                <Route
                  path="posts"
                  element={<span>posts</span>}
                />
                <Route
                  path="announcements"
                  element={<span>announcements</span>}
                />

                <Route
                  path="/profile/userNews"
                  element={
                    <Navigate
                      to="posts"
                      replace
                    />
                  }
                />
              </Route>

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

export default App;
