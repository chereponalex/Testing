import { Route, Routes } from "react-router-dom";

import { HomePage } from "./pages/ListEntity/index";
import { DeletePage } from "./pages/DeleteEntity/index";
import { EditPage } from "./pages/EditEntity/index";
import { ViewPage } from "./pages/ViewEntity";
import { NotFoundPage } from "./pages/NotFoundPage";

import { LoginPage } from "./pages/Login/index";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/delete/:id" element={<DeletePage />} />
      <Route path="/edit/:id" element={<EditPage />} />
      <Route path="/view/:id" element={<ViewPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
