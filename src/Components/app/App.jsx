import {Navigate, Outlet, Route, Routes} from "react-router-dom";


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<div>Layout <Outlet/></div>}>
        <Route path='posts' element={<div>Posts</div>} />
        <Route path='posts/creator' element={<div>Creator</div>} />
        <Route path='posts/:postId' element={<div>Single Post</div>} />
        {/*TODO: ROUTE GUARD*/}
        <Route path='posts/:postId/edit' element={<div>Editor</div>} />
        {/*//*/}
        <Route path='posts/:postId/comments' element={<div>Comments</div>} />

        <Route path='announcements' element={<div>Announcements</div>} />
        <Route path='announcements/creator' element={<div>Creator</div>} />
        <Route path='announcements/:announcementsId' element={<div>Single announcement</div>} />
        {/*TODO: ROUTE GUARD*/}
        <Route path='announcements/:announcementsId/edit' element={<div>Editor</div>} />
        {/*//*/}


        {/*TODO: ROUTE GUARD*/}
        <Route path='user' element={<div>Profile Layout <Outlet /></div>}>
          <Route path=':userId' element={<div><Outlet /></div>}>
            <Route path='settings' element={<div>Settings</div>} />

            <Route
              path="/user/:userId"
              element={<Navigate to="settings" replace />}
            />
          </Route>

          <Route
            path="/user"
            element={<Navigate to="/posts" replace />}
          />
        </Route>
        {/*//*/}


        <Route
          path="/"
          element={<Navigate to="/posts" replace />}
        />
      </Route>

      <Route path='registration' element={<div>Registration</div>} />
      <Route path='*' element={<div>Not found</div>} />

    </Routes>
  )
}

export default App;
