import React from 'react';
import '../GoldenPieces/GoldenPieces.css'

class GoldenPieces extends React.Component {
  handleButtonClick = (amount) => {
    this.props.updateGoldenPieces(amount);
  }

  render() {
    return (
      <div>
        <h2 className='gold-display'>Golden Pieces: {this.props.goldenPieces}</h2>
        <div className='gold-button-container'>
          <button className='gold-button-dev' onClick={() => this.handleButtonClick(1)}>+1 GP</button>
          <button className='gold-button-dev' onClick={() => this.handleButtonClick(5)}>+5 GP</button>
          <button className='gold-button-dev' onClick={() => this.handleButtonClick(10)}>+10 GP</button>
        </div>
      </div>
    );
  }
}

export default GoldenPieces;
