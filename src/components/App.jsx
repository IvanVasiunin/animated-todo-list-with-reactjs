import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import WelcomePage from '../pages/Welcome.jsx';
import ChallengesPage from '../pages/Challenges.jsx';

const router = createBrowserRouter([
  { path: '/animated-todo-list-with-reactjs/', element: <WelcomePage /> },
  { path: '/animated-todo-list-with-reactjs/challenges', element: <ChallengesPage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
