


class ComponentName extends React.Component {
    render() {
      return (
        <h1>This is the content of the  component</h1>
      );
    }
  }

export default ComponentName



class ComponentName extends React.Component {

    constructor(props) {
        super(props);
        this.state = {firstState: "state value"};
      }

    componentDidMount() {
      setTimeout(() => {
        this.setState({firstState: "the values of this state is changed"})
      }, 1000)
    }
    render() {
      return (
        <h1>Print out the state value:  {this.state.firstState}</h1>
      );
    }
  }

export default ComponentName



  
ReactDOM.render(<Header />, document.getElementById('root'));


  class ComponentName extends React.Component {

  constructor(props) {
    super(props);
    this.state = {firstState: "state value"};
  }

  static getDerivedStateFromProps(props, state) {
    return {firstState: props.firstProps };
  }

  render() {
    return (
      <h1>Print out the state value: {this.state.firstState}</h1>
    );
  }
}

export default ComponentName