import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { lazy, Suspense } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faTrashCan,
  faPen,
  faLock,
  faRightFromBracket,
  faPaperPlane,
  faCheck
} from "@fortawesome/free-solid-svg-icons";

import store from 'redux/store';
import Layout from 'pages/Layout';
import Spinner from 'features/ui/spinner/Spinner';
import ProtectedRoute from 'features/protectedRoute/ProtectedRoute';

const Announcements = lazy(() => import('pages/Announcements'));
const Posts = lazy(() => import('pages/Posts'));
const SinglePostPage = lazy(() => import('pages/singlePostPage/SinglePostPage'));
const Registration = lazy(() => import('pages/Registration'));

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
              <Suspense fallback={<Spinner />}>
                <Posts />
              </Suspense>
            }
          />
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
            element={
              <ProtectedRoute>
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
              </ProtectedRoute>
            }
          />

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
          element={
            <ProtectedRoute>
              <Suspense fallback={<Spinner />}>
                <Registration />
              </Suspense>
            </ProtectedRoute>
          }
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
