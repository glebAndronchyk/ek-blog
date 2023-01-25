import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { lazy, Suspense } from 'react';

import store from '../../redux/store';
import Layout from '../../pages/Layout';
import Spinner from '../ui/spinner/Spinner';

const Announcements = lazy(() => import('../../pages/Announcements'));
const Posts = lazy(() => import('../../pages/Posts'));
const SinglePostPage = lazy(() => import('../../pages/SinglePostPage'));

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
              <Suspense fallback={<Spinner />}>
                <Posts />
              </Suspense>
            }
          />
          {/* TODO: ROUTE GUARD */}
          <Route
            path="posts/create"
            element={<div>Creator</div>}
          />
          {/* // */}
          <Route
            path="posts/:postId"
            element={
              <Suspense fallback={<Spinner />}>
                <SinglePostPage />
              </Suspense>
            }
          />

          <Route
            path="announcements"
            element={
              <Suspense fallback={<Spinner />}>
                <Announcements />
              </Suspense>
            }
          />
          {/*TODO: ROUTE GUARD*/}
          <Route
            path="announcements/create"
            element={<div>Creator</div>}
          />
          {/*//*/}

          {/*TODO: ROUTE GUARD*/}
          <Route
            path="user"
            element={
              <div>
                Profile Layout
                <Outlet />
              </div>
            }
          >
            <Route
              path=":userId"
              element={
                <div>
                  <Outlet />
                </div>
              }
            >
              <Route
                path="settings"
                element={<div>Settings</div>}
              />

              <Route
                path="/user/:userId"
                element={
                  <Navigate
                    to="settings"
                    replace
                  />
                }
              />
            </Route>

            <Route
              path="/user"
              element={
                <Navigate
                  to="/posts"
                  replace
                />
              }
            />
          </Route>
          {/*//*/}

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

        <Route
          path="registration"
          element={<div>Registration</div>}
        />
        <Route
          path="*"
          element={<div>Not found</div>}
        />
      </Routes>
    </Provider>
  );
};

export default AppRoutes;