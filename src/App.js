import { Component } from 'react';
import './App.css';
import Me from "./Image/Tomiwa.jpg"

// Transforming the App.js into a class-based component


class App extends Component {
  //Implementing a state for this class containing a Person ={ fullName,bio, imgSrc, profession} and a boolean shows.
  constructor(props) {
    super(props);
    this.state = {
      Person: {
        fullName: 'Oloyede Olatomiwa',
        bio: 'A Tech enthusiast diving into the world of code and innovation',
        imgSrc: Me,
        profession: 'Junior FullStack Developer'
      },
      shows: false,
      seconds: 0
    };
  }

    //Create a field that shows the time interval since the last component was mounted using the component lifecycle.
    componentDidMount() {
      this.interval = setInterval(() => {
        this.setState({ seconds: this.state.seconds + 1 });
      }, 1000);
    }

    componentWillUnmount() {
      clearInterval(this.interval);
    }
  
      toggleShows = () => {
        this.setState({ shows: !this.state.shows });
      }

      render() {
        return (
          <div className="App">
    
            {/* Adding a button that toggles the show state. When the show state is true, the person's profile will appear */}
            <button onClick={this.toggleShows}>
              Toggle Profile
            </button>
            {this.state.shows && (
              <div>
                <h2>{this.state.Person.fullName}</h2>
                <p>{this.state.Person.bio}</p>
                <img src={this.state.Person.imgSrc} alt="Profile" className="img"/>
                <p>{this.state.Person.profession}</p>
              </div>
            )}
            <p>Time since mount {this.state.seconds} seconds.</p>
          </div>
        );
      }
    }
  

export default App;
