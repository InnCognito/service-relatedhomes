import React from 'react';
import axios from 'axios';
import ListOfHomes from './ListOfHomes.jsx';

class MoreHomes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      height: window.innerHeight,
      width: window.innerWidth,
      data: [],
    }

    this.handleResize = this.handleResize.bind(this);
  }

  handleResize() {
    this.setState({
      height: window.innerHeight,
      width: window.innerWidth
    });
  }

  componentDidMount(e) {
    window.addEventListener("resize", this.handleResize);
    // TODO: modify the following lines to not use search params (just use endpoint for id)
    const search = window.location.search;
    console.log(window.location);
    let id = new URLSearchParams(search).get('id');
    // id = id ? id : Math.floor((Math.random() * 10000000) + 1);
    axios.get(`/api/morehomes/${id}`)
      .then((response) => {
        this.setState({ data: response.data })
      })
      .catch((error) => {
        console.log(error)
      });
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  render() {
    return (
      <div className="module">
        <div className="moduleTitle">
          <span>More homes you may like</span>
        </div>
        <ListOfHomes data={this.state.data}
          height={this.state.height}
          width={this.state.width}
        />
      </div>
    )
  }
}

export default MoreHomes;
