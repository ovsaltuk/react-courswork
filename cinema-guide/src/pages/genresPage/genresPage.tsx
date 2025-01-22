import { FC } from "react"
import { GenresList } from "../../components/genresList/genresList"
import "./styles.scss";


export const GenresPage: FC =() => {
  return(<div className="genres-page">
    <h1>Жанры фильмов</h1>
    <GenresList />
  </div>)
}