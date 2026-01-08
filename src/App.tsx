import { BrowserRouter } from "react-router-dom";

import { AppRouter } from "./router/AppRouter";
import { ConfigProvider } from "./context/configContext";
import Navbar from "./components/layout/NavBar";

function App() {
  return (
    <ConfigProvider>
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
