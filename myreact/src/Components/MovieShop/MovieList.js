import { useEffect, useState } from "react";
import {
  getGenre,
  getMoviesNowPlaying,
  getMoviesPopular,
  getMoviesTopRated,
  getMoviesUpcoming,
  IMG_PATH,
} from "./api";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  margin-top: 30px;
`;
const Card = styled.div`
  width: 100%;
  border: 1px solid #6676b1;
  cursor: pointer;
  padding: 10px;
`;
const Img = styled.img`
  width: 100%;
`;
const Text = styled.div`
  max-height: 150px;
  overflow-y: auto;
`;
const Button = styled.button`
  width: 180px;
  height: 50px;
  background-color: white;
  border: 1px solid #a07fbb;
  color: #a07fbb;
  padding: 5px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1.1rem;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #a07fbb;
    color: white;
  }
  &:active {
    background-color: #6676b1;
  }
`;

const ClickButton = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 10px 0;
`;

export function MovieList() {
  const [data, setData] = useState(null);
  const [page, setPage] = useState("nowPlaying");

  useEffect(() => {
    getMovies();
  }, [page]);

  async function getMovies() {
    try {
      let response;
      switch (page) {
        case "popular":
          response = await getMoviesPopular();
          break;
        case "topRated":
          response = await getMoviesTopRated();
          break;
        case "upcoming":
          response = await getMoviesUpcoming();
          break;
        default:
          response = await getMoviesNowPlaying();
          break;
      }
      setData(response.data);
    } catch (error) {
      console.log("Error", error);
    }
  }

  return (
    <>
      <h1>Movie List</h1>
      <ClickButton>
        <Button onClick={() => setPage("nowPlaying")}>Now Playing</Button>
        <Button onClick={() => setPage("popular")}>Popular</Button>
        <Button onClick={() => setPage("topRated")}>Top Rated</Button>
        <Button onClick={() => setPage("upcoming")}>Upcoming</Button>
      </ClickButton>
      <Container>
        {data &&
          data.results.map((movie) => (
            <Card key={movie.id}>
              <Img src={IMG_PATH + movie.poster_path}></Img>
              <Text>타이틀 : {movie.title} </Text>
              <Text>장르 : {getGenre(movie.genre_ids)} </Text>
              <Text>소개글 : {movie.overview} </Text>
            </Card>
          ))}
      </Container>
    </>
  );
}
