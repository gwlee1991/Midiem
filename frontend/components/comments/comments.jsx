import React from 'react';

class Comments extends React.Component {
  constructor(props){
    super(props);
  }

  render () {
    console.log(this.props);
    return (
      <div>this is comments</div>
    )
  }
}

export default Comments;