import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    // Initialize state
    this.state = {
      Person: {
        fullName: "Sarrah Michelle",
        bio: "A passionate software developer.",
        imgSrc: "https://thumbs.dreamstime.com/b/portrait-beautiful-young-girl-red-hair-blue-eyes-drinking-coffee-38404180.jpg", //  image
        profession: "Software Engineer",
      },
      show: false, // Boolean to toggle profile visibility
      elapsedTime: 0, // Time elapsed since component mounted
    };
  }

  componentDidMount() {
    // Start a timer when the component mounts
    this.timer = setInterval(() => {
      this.setState((prevState) => ({
        elapsedTime: prevState.elapsedTime + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    // Clear the timer when the component unmounts
    clearInterval(this.timer);
  }

  toggleShow = () => {
    // Toggle the 'show' state
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  render() {
    const { Person, show, elapsedTime } = this.state;

    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Person Profile</h1>
        <button onClick={this.toggleShow}>
          {show ? "Hide Profile" : "Show Profile"}
        </button>

        {/* Conditionally render the profile */}
        {show && (
          <div style={{ marginTop: "20px" }}>
            <img src={Person.imgSrc} alt={Person.fullName} />
            <h2>{Person.fullName}</h2>
            <p>{Person.bio}</p>
            <p>Profession: {Person.profession}</p>
          </div>
        )}

        {/* Display elapsed time */}
        <p style={{ marginTop: "20px" }}>
          Time since mounted: {elapsedTime} seconds
        </p>
      </div>
    );
  }
}

export default App;