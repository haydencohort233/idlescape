import React from 'react';

class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 1,
      experience: 0,
      nextLevelExperience: 100
    };
  }

  render() {
    return (
      <div>
        <h2>Experience:</h2>
        <p>Level: {this.state.level}</p>
        <p>Experience: {this.state.experience} / {this.state.nextLevelExperience}</p>
      </div>
    );
  }
}

export default Experience;