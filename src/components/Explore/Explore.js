import React from "react";
import GoldenPieces from "../GoldenPieces/GoldenPieces";

const Explore = ({ goldenPieces, updateGoldenPieces }) => {
  return (
    <div>
      <GoldenPieces 
        goldenPieces={goldenPieces}
        updateGoldenPieces={updateGoldenPieces}
      />
        Explore Displaying
    </div>
  );
}

export default Explore;