import React, { Component } from "react";
import Point from "./point";

class MyAction extends Component {
  state = {
    counters: [
      { id: 0, points: 5, histories: [1,2,3,4], title: "How many Points do I get?" },
      { id: 1, points: 3, histories: [1, 2], title: "Add 1 point if you like!" },
    ],
  };
  render() {
    return (
      <React.Fragment>
        {this.state.counters.map((counter) => (
          <Point
            key={counter.id}
            counter={counter}
            deletePointer={this.deletePointsCounter}
            incrementPoint={this.incrementPoints}
          />
        ))}
        <div className="container text-center">
          <button className="btn btn-secondary btn-large" onClick={() => this.resertPintersCounter()}>Reset All</button>
        </div>
      </React.Fragment>
    );
  }

  incrementPoints = (x) => {
    console.log("Pressed!", x);
    // this.setState({
    //   points: this.state.counters.points + 1,
    //   histories: [...this.state.counters.histories, this.state.counters.points],
    // });

    // clone current state 
    const newCount = [...this.state.counters];
    const index =newCount.indexOf(x);
    newCount[index] = {...x};
    // console.log(index)
    newCount[index].points++;
    // console.log(newCount);
    this.setState({newCount});
  };

  deletePointsCounter = (x) => {
    // console.log('Deleted', x);
    const newCounters = this.state.counters.filter(c => c.id !== x);
    this.setState({
        counters: newCounters
    })
  }

  resertPintersCounter() {
    const resCounter = this.state.counters.map(c => {
      c.points = 0;
      return c;
    })
    this.setState({resCounter})
  }
}

export default MyAction;
