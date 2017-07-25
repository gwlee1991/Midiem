import React from 'react';

class Search extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchAllPosts();
  }

  render(){
    return (
      <div>Joey is Awesome</div>
    )
  }
}

export default Search;