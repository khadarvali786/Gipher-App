import { useState, CSSProperties } from "react";
import {ClipLoader,BeatLoader,BounceLoader} from "react-spinners";

const override= {
    display: "block",
    margin: "0 auto",
  }
export default function Loading(){
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ffffff");
  
    return (
      <div className="sweet-loading">
        <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
        <input value={color} onChange={(input) => setColor(input.target.value)} placeholder="Color of the loader" />
  
        <BounceLoader
          color='#485cff'
          loading={loading}
          cssOverride={override}
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
        />



      </div>
    );
}
