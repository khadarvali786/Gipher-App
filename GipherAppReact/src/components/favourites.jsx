
export default function Favourites({likedGifs,darkMode}) {
  return (
    <div data-bs-theme={darkMode?"dark":""}>
    <br />
    <br />
    <div>
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

            </div>
          ))
        )}
      </div>
    </div>
    </div>
  );
}
