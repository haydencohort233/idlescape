// App.js
import React from 'react';
import GoldenPieces from './components/GoldenPieces/GoldenPieces';
import Explore from './components/Explore/Explore';
import Buildings from './components/Buildings/Buildings';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'Buildings',
      goldenPieces: 0,
      goblinCost: 10,
      goblinCount: 0,
      ratCost: 5,
      ratCount: 0,
      goblinIncome: 1,
    };
  }
  
  componentDidMount() {
    // Start income generation timer when component mounts
    this.incomeTimer = setInterval(this.generateIncome, 1000);
  }

  componentWillUnmount() {
    // Clear income generation timer when component unmounts
    clearInterval(this.incomeTimer);
  }

  generateIncome = () => {
    const { activeTab, goblinCount, goblinIncome } = this.state;
    // Only generate income if in the "Buildings" tab or if goblin count > 0 in "Explore" tab
    if (activeTab === 'Buildings' || (activeTab === 'Explore' && goblinCount > 0)) {
      const totalIncome = goblinCount * goblinIncome;
      if (!isNaN(totalIncome)) {
        this.setState(prevState => ({
          goldenPieces: prevState.goldenPieces + totalIncome
        }));
      } else {
        console.error("Invalid income calculated:", totalIncome);
      }
    }
  }

  handleTabChange = (tab) => {
    this.setState({ activeTab: tab });
  }

  updateGoldenPieces = (amount) => {
    this.setState(prevState => ({
      goldenPieces: prevState.goldenPieces + amount
    }));
  }

  updateGoblinCount = (count) => {
    this.setState(prevState => ({
      goblinCount: count,
      goblinCost: Math.ceil(prevState.goblinCost * 1.2)
    }));
  }
  
  render() {
    const { activeTab, goldenPieces, goblinCost, goblinCount, goblinIncome } = this.state;

    return (
      <div>
        <div className="tab-buttons">
          <button onClick={() => this.handleTabChange('Buildings')} className={activeTab === 'Buildings' ? 'active' : ''}>Buildings</button>
          <button onClick={() => this.handleTabChange('Explore')} className={activeTab === 'Explore' ? 'active' : ''}>Explore</button>
        </div>

        {activeTab === 'Buildings' && (
          <div>
            <GoldenPieces 
              goldenPieces={goldenPieces}
              updateGoldenPieces={this.updateGoldenPieces}
            />
            <Buildings 
              activeTab={activeTab}
              goldenPieces={goldenPieces}
              updateGoldenPieces={this.updateGoldenPieces}

              goblinCount={goblinCount}
              goblinCost={goblinCost}
              goblinIncome={goblinIncome}
              updateGoblinCount={this.updateGoblinCount}
              
            />
          </div>
        )}

        {activeTab === 'Explore' && (
          <Explore 
            goldenPieces={goldenPieces}
            updateGoldenPieces={this.updateGoldenPieces}
          />
        )}
      </div>
    );
  }
}

export default App;
