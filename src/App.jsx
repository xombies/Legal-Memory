import { BrowserRouter, Routes, Route } from "react-router-dom";
import LegalMemoryHome from "./components/LegalMemoryHome";
import OpenAIPage from "./components/OpenAIPage";
import ToolkitPage from "./components/ToolkitPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LegalMemoryHome />} />
        <Route path="/openai" element={<OpenAIPage />} />
        <Route path="/toolkit" element={<ToolkitPage />} />
        <Route path="*" element={<LegalMemoryHome />} />
      </Routes>
    </BrowserRouter>
  );
}
