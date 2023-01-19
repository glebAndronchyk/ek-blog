import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '../../store/store';
import Layout from '../../pages/Layout';
import Posts from '../../pages/Posts';
import Announcements from '../../pages/Announcements';

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
            element={<Posts />}
          />
          {/* TODO: ROUTE GUARD */}
          <Route
            path="posts/create"
            element={<div>Creator</div>}
          />
          {/* // */}
          <Route
            path="posts/:postId"
            element={<div>Single Post</div>}
          />

          <Route
            path="announcements"
            element={<Announcements />}
          />
          {/*TODO: ROUTE GUARD*/}
          <Route
            path="announcements/create"
            element={<div>Creator</div>}
          />
          {/*//*/}
          <Route
            path="announcements/:announcementsId"
            element={<div>Single announcement</div>}
          />

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

export default App;
