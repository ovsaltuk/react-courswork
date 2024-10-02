import React from "react";
import "./styles.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { APP_ROUTES } from "./routes/config";
import { Footer } from "../components/footer/footer";
import { GenresPage } from "../pages/genresPage/genresPage";
import { HomePage } from "../pages/homePage/homePage";
import { Header } from "../components/header/header";
import "./styles.scss"

function App() {
  return (
    <div className="app-container">
    <BrowserRouter>
      <Header />
      <main className="main-content">
        <Routes>
          <Route path={APP_ROUTES.root} element={<HomePage />} />
          <Route path={APP_ROUTES.genres} element={<GenresPage />} />
        </Routes>
    
      </main>
      <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
