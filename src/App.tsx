import { Route, Routes } from "react-router-dom";

import { ListEntity } from "./pages/ListEntity/index";
import { DeleteEntity } from "./pages/DeleteEntity/index";
import { EditEntity } from "./pages/EditEntity/index";
import { ViewEntity } from "./pages/ViewEntity";
import { NotFoundPage } from "./pages/NotFoundPage";
import { LoginPage } from "./pages/Login/index";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/list" element={<ListEntity />} />
      <Route path="/delete/:id" element={<DeleteEntity />} />
      <Route path="/edit/:id" element={<EditEntity />} />
      <Route path="/view/:id" element={<ViewEntity />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
