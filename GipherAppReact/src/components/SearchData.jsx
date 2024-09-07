import BookMarkIcon from "./BookMarkIcon";
import HeartIcon from "./HeartIcon";
import "./HomePage.css";
import { useSelector } from "react-redux";
import Spinner from "./Spinner";
export default function SearchData({
  gif,
  darkMode,
  search,
  onLike,
  likedGifs,
  bookMarkGifs,
  onBookMark,
}) {
const {loaderVal}=useSelector(store=>store.loader);

  return (
    <>
    {loaderVal && <Spinner/>}
     {!loaderVal && <div className="homepage" data-bs-theme={darkMode ? "dark" : ""}>
        <h1>Search {search}</h1>
        <div className="row row-cols-lg-4 row-cols-md-3 row-cols-sm-1 gap-3">
          {gif.map((item) => {
            return (
              <div className="card cols-4 " key={item.hash}>
                <img
                  src={item.url}
                  className="card-img-top"
                  alt="..."
                  style={{ height: "20rem" }}
                />

                <div className="card-body ">
                  <HeartIcon
                    gif={item}
                    onLike={onLike}
                    isLiked={likedGifs.some((g) => g.hash === item.hash)}
                  />
                  <BookMarkIcon
                    gif={item}
                    onBookMark={onBookMark}
                    isBookMarked={bookMarkGifs.some(
                      (g) => g.hash === item.hash
                    )}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>}
    </>
  );
}
