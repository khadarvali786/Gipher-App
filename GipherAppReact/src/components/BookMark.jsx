import "./BookMark.css"
import BookMarkIcon from "./BookMarkIcon";

export default function BookMark({bookMarks,darkMode,bookMarkGifs,onBookMark}) {
  return (
    <div data-bs-theme={darkMode?"dark":""}>
    <div className="BookMark">
      <h1>BookMarks</h1>
      <div className="row row-cols-lg-4 row-cols-md-3 row-cols-sm-1">
        {bookMarks.length === 0 ? (
          <p>No favourites yet.</p>
        ) : (
          bookMarks.map((gif) => (
            <div className="card cols-4" key={gif.hash}>
              <img
                src={gif.url}
                className="card-img-top"
                alt="..."
                style={{ height: "20rem" }}
              />
               <div className="card-body ">
                  <BookMarkIcon
                  gif={gif}
                  onBookMark={onBookMark}
                  isBookMarked ={bookMarkGifs.some((g)=>g.hash === gif.hash)}
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
