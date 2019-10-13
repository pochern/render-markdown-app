import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import marked from 'marked';
import Typography from '@material-ui/core/Typography';
import ExampleData from '../data/example'

class Example extends Component {
  constructor() {
    super();
    this.state = {
      arr: [],
      dict: {},
    }
  }
  
  componentDidMount() {
    this.setState({arr: ExampleData})
  }
  /**
   * this function should return an obj
   * the keys should be the html tag
   * the values should be a list of the markdown that corressponds to those tags
   * 
   * input = [
        "# Locate Fire Stations",
        "- one",
        "- two",
    ]
   * 1. pass the arr elements to marked method
   * 2. parse HTML to separate tags and text to key and values
   * 
   */
  getMarkdownText() {
    const input = [
      "# Locate Fire Stations",
      "- one",
      "- two",
    ]
    const markedArr = input.map(function(ma){
      return marked(ma);
    });
    return [{
      tag: 'h1',
      values: ['Hello World']
    },
    {
      tag: 'li',
      values: ['one', 'two']
    }]
  }
  
  render() {
    /**
     * 1. call function and get result
     * 2. assign key from result to typography variant
     * 
     */
    const markd = this.getMarkdownText();
    const variantMapping = { h1: 'h1', h2: 'h2', h3: 'h3', h4: 'h4', h5: 'h5', h6: 'h6', subtitle1: 'h6', subtitle2: 'h6', body1: 'li', body2: 'p',}
    const markTags = markd.map(function (m) {
      let variant = null;
      if (m.tag == 'h1'){
        variant = 'h1'
      }else if(m.tag == 'li'){
        variant = 'body1'
      }
      const tag = m.values.map(function (v, i){
        return <Typography key={i} variant={variant} variantMapping={variantMapping}>{v}</Typography>;
      });
      if (m.tag == 'li') {
        // what is tag - list of typography jsx
        return <ul>{tag}</ul>
      } else {
        return tag;
      }
    });
    return (
      <div>
        {markTags}
        <ReactMarkdown source={this.state.arr.join('\n')}></ReactMarkdown>
        <Typography variant="h1">h1. Heading</Typography> 
      </div>
    );
  }
}

export default Example;
