

export default function BookMark({bookMarks,darkMode}) {
  return (
    <div data-bs-theme={darkMode?"dark":""}>
    <br />
    <br />
    <div>
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

            </div>
          ))
        )}
      </div>
    </div>

    </div>
  );
}
