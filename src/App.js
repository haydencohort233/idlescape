// App.js
import React from 'react';
import GoldenPieces from './components/GoldenPieces/GoldenPieces';
import Experience from './components/Experience/Experience';
import Goblins from './components/Buildings/Goblins';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      goldenPieces: 0, // Set initial Golden Pieces to 100 for testing
      goblinCost: 10 // Set initial Goblin Cost
    };
  }

  // Function to update the total number of Golden Pieces in App.js
  updateGoldenPieces = (amount) => {
    this.setState(prevState => ({
      goldenPieces: prevState.goldenPieces + amount
    }));
  }

  render() {
    const { goldenPieces } = this.state; // Remove goblinCost from here
    const { goblinCost } = this.state; // Set goblinCost as a separate variable
    return (
      <div>
        <GoldenPieces 
          goldenPieces={goldenPieces}
          updateGoldenPieces={this.updateGoldenPieces}
        />
        <Goblins 
          goldenPieces={goldenPieces}
          goblinCost={goblinCost} // Pass goblinCost as prop
          updateGoldenPieces={this.updateGoldenPieces}
        />
        {/* Other components */}
      </div>
    );
  }
}

export default App;
