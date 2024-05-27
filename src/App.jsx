import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import NewPost from "./pages/NewPost.jsx"; // Import the NewPost component

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/new-post" element={<NewPost />} /> {/* Add route for new post */}
      </Routes>
    </Router>
  );
}

export default App;
