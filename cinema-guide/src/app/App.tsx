import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { APP_ROUTES } from "./routes/config";
import { Footer } from "../components/footer/footer";
import { GenresPage } from "../pages/genresPage/genresPage";
import { HomePage } from "../pages/homePage/homePage";
import { Header } from "../components/header/header";
import "./styles.scss"
import { MoviePage } from "../pages/moviePage/moviePage";
import { GenrePage } from "../pages/genrePage/genrePage";
import { Modal } from "../components/common/modal/modal";

function App() {
  return (
    <div className="app-container">
    <BrowserRouter>
      <Header />
      <main className="main-content">
        <Routes>
          <Route path={APP_ROUTES.root} element={<HomePage />} />
          <Route path={APP_ROUTES.genres} element={<GenresPage />} />
          <Route path={`${APP_ROUTES.movie}/:id`} element={<MoviePage />} />
          <Route path={`${APP_ROUTES.genre}/:genre`} element={<GenrePage />} />
        </Routes>
    
      </main>
      <Footer />
    </BrowserRouter>
    <Modal />
    </div>
  );
}

export default App;
