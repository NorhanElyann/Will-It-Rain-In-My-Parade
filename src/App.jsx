import "./App.css";
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import Topbar from "./global/Topbar";
import Dashboard from "./pages/Dashboard";
import WeatherExpectaions from "./pages/weatherexpectations";

function App() {
  return (
    <>
      <div className="app">
        <main className="content">
          <Layout>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route
                path="/weatherexpectaions"
                element={<WeatherExpectaions />}
              />
            </Routes>
          </Layout>
        </main>
      </div>
    </>
  );
}

export default App;
