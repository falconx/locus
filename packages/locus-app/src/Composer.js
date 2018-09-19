import React, { Component } from "react";
import Composer from "composer";

// pull in graphing/waveform lib
export default class ComposerWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.composer = new Composer();
  }

  viewPatterns() {
    console.log(this.composer.patterns);
  }

  render() {
    return (
      <div>
        <button
          name="make pattern"
          alt="make pattern"
          onClick={this.composer.makePattern(8, 5, "up", "8n")}
        >
          make a pattern
        </button>
        <button
          name="view patterns"
          alt="view patterns"
          onClick={this.composer.viewPatterns}
        >
          view patterns
        </button>
        <pre />
      </div>
    );
  }
}
