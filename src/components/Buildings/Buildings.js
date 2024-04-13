// Buildings.js
import React from 'react';
import Goblins from './Goblins';

const Buildings = ({ activeTab, goblinCount, ratCount, updateGoblinCount, updateRatCount, updateGoldenPieces, goblinCost, ratCost, goblinIncome, goldenPieces }) => {
    
  return (
    <div>
      {activeTab === 'Buildings' && (
        <div>
          <Goblins
            goblinCount={goblinCount}
            updateGoblinCount={updateGoblinCount}
            updateGoldenPieces={updateGoldenPieces}
            goblinCost={goblinCost}
            goblinIncome={goblinIncome}
            goldenPieces={goldenPieces} // Pass goldenPieces to Goblins
          />
        </div>
      )}
    </div>
  );
}

export default Buildings;
