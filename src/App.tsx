import { Navigate, Route, Routes } from "react-router-dom";
import {
  ChatPage,
  HomePage,
  ProfilePage,
  SearchPage,
  UploadPage,
} from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/upload" element={<UploadPage />} />
      <Route path="/chat" element={<ChatPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="*" element={<Navigate to="/profile" />} />
    </Routes>
  );
}

export default App;
