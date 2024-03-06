import { Route, Routes } from 'react-router-dom';

import Post from './components/post';
import Posts from './components/posts';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Posts />} />
      <Route path="/posts/:id" element={<Post />} />
    </Routes>
  );
}

export default App;