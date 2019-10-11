import React, { Component } from 'react';
import marked from 'marked';
import ExampleData from '../data/example'

class Example extends Component {
  constructor() {
    super();
    this.state = {
      arr: []
    }
  }

  componentDidMount() {
    this.setState({arr: ExampleData})
  }

  getMarkdownText() {
    var arrayLength = this.state.arr.length
    var rawMakeup = ""
    for (var i = 0; i<arrayLength; i++){
      rawMakeup += marked(this.state.arr[i])
    }
    return { __html: rawMakeup}
  }
  
  render() {
    return (
      <div dangerouslySetInnerHTML={this.getMarkdownText()}/>
    );
  }
}

export default Example;
