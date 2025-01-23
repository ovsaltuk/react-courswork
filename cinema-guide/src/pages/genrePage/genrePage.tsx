import { ReactElement, useEffect } from "react";
import { useParams } from "react-router-dom";

export const GenrePage = ():ReactElement => {
    const { genre } = useParams();

    useEffect(() => {console.log(genre)}, [genre])
    return (<div className="genre-page">{genre}</div>)
}