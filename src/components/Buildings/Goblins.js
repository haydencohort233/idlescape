// Goblins.js
import React from 'react';

class Goblins extends React.Component {
  componentDidMount() {
    this.goblinIncomeTimer = setInterval(this.generateIncome, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.goblinIncomeTimer);
  }

  generateIncome = () => {
    const { goblinCount, goblinIncome } = this.props;
    const totalIncome = goblinCount * goblinIncome;
    if (!isNaN(totalIncome)) {
      this.props.updateGoldenPieces(totalIncome);
    } else {
      console.error("Invalid income calculated:", totalIncome);
    }
  }
    
      buyGoblin = () => {
        const { goldenPieces, goblinCost, updateGoldenPieces, goblinCount, updateGoblinCount } = this.props;
      
        if (goldenPieces >= goblinCost) {
          updateGoldenPieces(-goblinCost);
          updateGoblinCount(goblinCount + 1); // Increment goblin count
        } else {
          alert("Not enough Golden Pieces!");
        }
      }
      
  
    render() {
      const { goblinCount, goblinCost } = this.props;
  
      return (
        <div>
          <h2>Goblins</h2>
          <p>Count: {goblinCount}</p>
          <p>Cost: {goblinCost} Golden Pieces</p>
          <button onClick={this.buyGoblin}>Buy Goblin</button>
        </div>
      );
    }
  }

export default Goblins;
