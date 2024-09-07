import { useEffect, useState } from "react";
import axios from "axios"; // node
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BookMark from "./components/BookMark";
import Favourites from "./components/favourites";
import HomePage from "./components/HomePage";

import ErrorPage from "./components/error_paga";
import SearchData from "./components/SearchData";
import { BounceLoader } from "react-spinners";
import NavBar from "./components/NavBar";
import { useDispatch } from "react-redux";
import { loaderActions } from "./store";

// const override= {
//   display: "block",
//   margin: "0 auto",
//   borderColor: "red",
// }
function App() {
  const [gif, setGifs] = useState([]);
  const [likedGifs, setLikedGifs] = useState([]);
  const [bookMarks, setBookMark] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [theme, setTheme] = useState("light-theme");
  const [serachName, setSearch] = useState("");
  const [searchobj, setsearchData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();

  const Togglemode = () => {
    setDarkMode(!darkMode);
    if (theme === "dark-theme") {
      setTheme("light-theme");
    } else {
      setTheme("dark-theme");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const getSearchData = (searchData, search) => {
    setTimeout(() => {
      dispatch(loaderActions.change());
    }, 5000);
    setsearchData(searchData);
    setSearch(search);
    dispatch(loaderActions.change());
  };

  useEffect(() => {
    setTimeout(() => {
      dispatch(loaderActions.change());
    }, 5000);
    async function fetchData() {
      //     const response = await fetch('http://localhost:1431');
      //   const data = await response.json();
      const response = await axios.get("https://gipher-app.onrender.com");
      setGifs(response.data);
      dispatch(loaderActions.change());
    }
    fetchData();
  }, []);

  const handleLike = (gif) => {
    setLikedGifs((prevLikedGifs) => {
      if (prevLikedGifs.some((item) => item.hash === gif.hash)) {
        return prevLikedGifs.filter((item) => item.hash !== gif.hash);
      } else {
        return [...prevLikedGifs, gif];
      }
    });
  };

  const handleBookMark = (gif) => {
    setBookMark((prevBookMark) => {
      if (prevBookMark.some((item) => item.hash == gif.hash)) {
        return prevBookMark.filter((item) => item.hash != gif.hash);
      } else {
        return [...prevBookMark, gif];
      }
    });
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <NavBar
            modechange={Togglemode}
            darkMode={darkMode}
            getSearchData={getSearchData}
          ></NavBar>
          {
            <HomePage
              gif={gif}
              onLike={handleLike}
              likedGifs={likedGifs}
              onBookMark={handleBookMark}
              bookMarkGifs={bookMarks}
              darkMode={darkMode}
            />
          }
        </>
      ),
      errorElement: <ErrorPage />,
      // children: [
      //   {
      //     path: "bookmark",
      //     element: <BookMark/>,
      //   },
      // ],
    },
    {
      path: "/bookmark",
      element: (
        <>
          <NavBar modechange={Togglemode} darkMode={darkMode}></NavBar>
          <BookMark
            onBookMark={handleBookMark}
            bookMarkGifs={bookMarks}
            bookMarks={bookMarks}
            darkMode={darkMode}
          />
        </>
      ),
    },
    {
      path: "/favourites",
      element: (
        <>
          <NavBar modechange={Togglemode} darkMode={darkMode}></NavBar>
          <Favourites
            likedGifs={likedGifs}
            darkMode={darkMode}
            onLike={handleLike}
          />
        </>
      ),
    },
    {
      path: `/search/:query`,
      element: (
        <>
          <NavBar
            modechange={Togglemode}
            darkMode={darkMode}
            getSearchData={getSearchData}
          ></NavBar>
          <SearchData
            darkMode={darkMode}
            search={serachName}
            gif={searchobj}
            onLike={handleLike}
            likedGifs={likedGifs}
            onBookMark={handleBookMark}
            bookMarkGifs={bookMarks}
            isLoading={isLoading}
          />
        </>
      ),
    },
  ]);

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
