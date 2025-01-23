import { ReactElement } from "react";
import { useParams } from "react-router-dom";

export const MoviePage = ():ReactElement => {
    const { id } = useParams();

    return (<div className="movie-page">{id}</div>)
}