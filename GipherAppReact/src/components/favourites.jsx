import BookMarkIcon from "./BookMarkIcon";
import "./favourite.css"
import HeartIcon from "./HeartIcon";
export default function Favourites({likedGifs,darkMode,onLike}) {
  return (
    <div data-bs-theme={darkMode?"dark":""}>
    <div className="Favourite">
      <h1>Favourites</h1>
      <div className="row row-cols-lg-4 row-cols-md-3 row-cols-sm-1 gap-4">
        {likedGifs.length === 0 ? (
          <p>No favourites yet.</p>
        ) : (
          likedGifs.map((gif) => (
            <div className="card cols-4 " key={gif.hash}>
              <img
                src={gif.url}
                className="card-img-top"
                alt="..."
                style={{ height: "18rem" }}
              />
               <div className="card-body ">
                  <HeartIcon 
                  gif={gif}
                  onLike={onLike}
                  isLiked={likedGifs.some((g) => g.hash === gif.hash)}
                  /> 
                </div>
            </div>
          ))
        )}
      </div>
    </div>
    </div>
  );
}
