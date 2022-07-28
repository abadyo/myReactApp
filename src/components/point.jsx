import React, { Component } from "react";

class Point extends Component {
  // state = {
  //   title: this.props.counter.title,
  //   points: this.props.counter.points,
  //   histories: this.props.counter.histories,
  // };

  render() {
    return (
      <React.Fragment>
        <div className=" container text-center my-5">
          <h1>{this.props.counter.title}</h1>
          <h2 className={this.isPointZero()}>{this.getPoint()}</h2>
          <button
            className="btn btn-primary my-1"
            onClick={() => this.props.incrementPoint(this.props.counter)}
          >
            Add +1
          </button>
          <button className="btn btn-danger mx-3" onClick={() => this.props.deletePointer(this.props.counter.id)}>
            Delete this counter please
          </button>
          {this.emptyHistories()}
        </div>
      </React.Fragment>
    );
  }

  getPoint() {
    const { points } = this.props.counter;
    return points === 0 ? "Empty" : points;
  }

  isPointZero() {
    const { points } = this.props.counter;
    let classses = "my-5 text-";
    return (classses += points === 0 ? "danger" : "success");
  }

  emptyHistories() {
    if (this.props.counter.histories.length === 0)
      return <p className="lead my-5">No Histories yet</p>;
    else
      return (
        <ul className="my-5 list-group">
          {this.props.counter.histories.map((history) => (
            <li key={history.toString()} className="list-group-item">
              {history}
            </li>
          ))}
        </ul>
      );
  }

  // this is event handler
  
}

export default Point;
