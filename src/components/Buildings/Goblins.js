import React from 'react';

class Goblins extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      goblinCount: 0,
      goblinCost: 10,
      costIncreaseRate: 1.2,
      goblinIncome: 1 // Set goblinIncome to 1 in the initial state
    };
  }

  componentDidMount() {
    // Start generating income immediately after the component mounts
    this.goblinIncomeTimer = setInterval(this.generateIncome, 1000);
  }

  componentWillUnmount() {
    // Clear the income generation interval when the component unmounts
    clearInterval(this.goblinIncomeTimer);
  }

  generateIncome = () => {
    const { goblinCount, goblinIncome } = this.state;
    const totalIncome = goblinCount * goblinIncome; // Calculate total income from all goblins
    this.props.updateGoldenPieces(totalIncome); // Update golden pieces with the total income
  }

  buyGoblin = () => {
    const { goldenPieces, updateGoldenPieces } = this.props;
    const { goblinCost, costIncreaseRate } = this.state;

    if (goldenPieces >= goblinCost) {
      updateGoldenPieces(-goblinCost); // Subtract the cost of the goblin from golden pieces
      this.setState(prevState => ({
        goblinCount: prevState.goblinCount + 1,
        goblinCost: Math.ceil(prevState.goblinCost * costIncreaseRate)
      }));
    } else {
      alert("Not enough Golden Pieces!");
    }
  }

  render() {
    const { goblinCount, goblinCost } = this.state;

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
