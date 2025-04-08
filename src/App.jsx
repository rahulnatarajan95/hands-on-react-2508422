import React, {Component} from 'react';

class Welcome extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h1>Hello {this.props.name}</h1>
  }
}

const Greeting = (props) => {
  return <h1>Hello {props.name}</h1>
}

function App() {
  const name = 'StarGazers'
  return (
    <div className="container">
      <article>
        <hgroup>
          <img src="images/group.svg" alt="StarGazers Group" />
          <Welcome name="Rahul"></Welcome>
          <Greeting name="Natarajan"></Greeting>
          <p>Members of an <b>intergalactic alliance</b><br />
            paving the way for peace and benevolence among all species. They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
          <button className="outline" onClick={() => alert('Hi there')}>Click Me</button>
        </hgroup>
      </article>
    </div>
  )
}
export default App
