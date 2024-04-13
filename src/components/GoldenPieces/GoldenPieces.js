import React from 'react';

class GoldenPieces extends React.Component {
  handleButtonClick = (amount) => {
    this.props.updateGoldenPieces(amount);
  }

  render() {
    return (
      <div>
        <h2>Golden Pieces: {this.props.goldenPieces}</h2>
        <button onClick={() => this.handleButtonClick(1)}>+1 GP</button>
        <button onClick={() => this.handleButtonClick(5)}>+5 GP</button>
        <button onClick={() => this.handleButtonClick(10)}>+10 GP</button>
      </div>
    );
  }
}

export default GoldenPieces;
