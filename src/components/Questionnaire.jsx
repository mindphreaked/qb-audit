import React, { Component } from "react";
import StarRatingsComponent from './StarRatingsComponent';

export default class Questionnaire extends Component {
  constructor(props) {
    super(props) ;
    this.state = {
      learning: 5,
      projects: 5,
      ui: 5,
      code: 5,
      testing: 5,
      performance: 5,
      tools: 5
    }
  }
handleRating = (keyLabel, rating) => {debugger
  this.setState((state)=>{
      let newState = state;
      newState[keyLabel] = rating;
      return newState;
  });
}
  render() {
    return (
      <form action="">
          <StarRatingsComponent parameter="Learning done in past 6 months  " rating={this.state.learning} keyLabel="learning" handleRating={this.handleRating}/>
          <StarRatingsComponent parameter="Projects in last 6 months " rating={this.state.projects} keyLabel="projects" handleRating={this.handleRating}/>
          <StarRatingsComponent parameter="UI " rating={this.state.ui} keyLabel="ui" handleRating={this.handleRating}/>
          <StarRatingsComponent parameter="Code " rating={this.state.code} keyLabel="code" handleRating={this.handleRating}/>
          <StarRatingsComponent parameter="Testing " rating={this.state.testing} keyLabel="testing" handleRating={this.handleRating}/>
          <StarRatingsComponent parameter="Performance " rating={this.state.performance} keyLabel="performance" handleRating={this.handleRating}/>
          <StarRatingsComponent parameter="Plugins & Tools " rating={this.state.tools} keyLabel="tools" handleRating={this.handleRating}/>

      </form>
    );
  }
}
