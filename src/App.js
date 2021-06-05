import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    name: "",
  };

  componentDidMount() {
    if (this.state.initialLoad) {
      navigator.geolocation.getCurrentPosition((position) => {
        const pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        let geocoder = new google.maps.Geocoder();

        let latlng = pos;
        geocoder.geocode(
          {
            latLng: latlng,
          },
          (results, status) => {
            // Convert this also to an Arrow Function
            if (status === google.maps.GeocoderStatus.OK) {
              console.log(results);
              if (results[1]) {
                let addressObject = results[1].address_components;

                const cityType = "locality";
                const stateType = "administrative_area_level_1";

                let city = "";
                let state = "";

                for (let i = 0; i < addressObject.length; i++) {
                  console.log(addressObject[i]);
                  if (addressObject[i].types.includes(cityType)) {
                    city = addressObject[i].long_name;
                  } else if (addressObject[i].types.includes(stateType)) {
                    state = addressObject[i].short_name;
                  }
                }

                let isCityStateFound = city != "" && state != "";

                if (isCityStateFound) {
                  jQuery("#city-search-ready-status").val("true");
                }

                let query = isCityStateFound ? city + ", " + state : EmptyStr;

                console.log(query);

                jQuery(".tab-panel").find(".input-text input").val(query);

                this.setState({
                  searchValueCity: city,
                  searchValueState: state,
                });

                this.performProviderSearch();
                this.performLocationSearch();
              } else {
                console.log("No results found");
              }
            } else {
              console.log("Geocoder failed due to: " + status);
            }
          }
        );
      });
    }
  }

  performProviderSearch = () => {
    // Do whatever you want here
    this.setState({
      // Update the state
    });
  };

  performLocationSearch = () => {
    // Do whatever you want here
    this.setState({
      // Update the state
    });
  };

  render() {
    return <div className="App">{/* Your HTML Structure */}</div>;
  }
}

export default App;
