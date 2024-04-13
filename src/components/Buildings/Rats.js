// Rats.js
import React from 'react';

class Rats extends React.Component {
  componentDidMount() {
    this.ratIncomeTimer = setInterval(this.generateIncome, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.ratIncomeTimer);
  }

  generateIncome = () => {
    const { ratCount, ratIncome } = this.props;
    const totalIncome = ratCount * ratIncome;
    this.props.updateGoldenPieces(totalIncome);
  }

  buyRat = () => {
    const { goldenPieces, ratCost, updateGoldenPieces } = this.props;

    if (goldenPieces >= ratCost) {
      updateGoldenPieces(-ratCost);
    } else {
      alert("Not enough Golden Pieces!");
    }
  }

  render() {
    const { ratCount, ratCost } = this.props;

    return (
      <div>
        <h2>Rats</h2>
        <p>Count: {ratCount}</p>
        <p>Cost: {ratCost} Golden Pieces</p>
        <button onClick={this.buyRat}>Buy Rat</button>
      </div>
    );
  }
}

export default Rats;
