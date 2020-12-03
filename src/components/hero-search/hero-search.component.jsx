import React, { Component } from "react";
import "./hero-search.styles.scss";

import moment from "moment";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { DateRangePicker } from "react-dates";

import { BiMap, BiCalendar, BiGroup } from "react-icons/bi";

class HeroSearch extends Component {

  BLOCKED_DATES = [
    moment().add(10, 'days'), 
    moment().add(11, 'days'),
    moment().add(12, 'days'), 
  ];

  constructor() {
    super();
    this.state = {
      focusedInput: null,
      startDate: moment(),
      endDate: moment().add(7, "days"),
      fullscreen: false,
      direction: "left",
      dateFormat: "MM/DD/YYYY",
      small: false,
      block: false,
      orientation: "horizontal",
      numMonths: 2,
      minimumNights: 7
    };
    this.handleDatesChange = this.handleDatesChange.bind(this);
    this.handleFocusChange = this.handleFocusChange.bind(this);
    this.handleChangeFullscreen = this.handleChangeFullscreen.bind(this);
    this.handleChangeDirection = this.handleChangeDirection.bind(this);
    this.handleChangeDateFormat = this.handleChangeDateFormat.bind(this);
    this.handleIsDayBlocked = this.handleIsDayBlocked.bind(this);
  }

  handleDatesChange({ startDate, endDate }) {
    this.setState({ startDate, endDate });
  }

  handleFocusChange(focusedInput) {
    this.setState({ focusedInput });
  }

  handleChangeFullscreen() {
    this.setState({ fullscreen: !this.state.fullscreen });
  }

  handleChangeDirection(e) {
    this.setState({ direction: e.target.value });
  }

  handleChangeDateFormat(e) {
    this.setState({ dateFormat: e.target.value });
  }

  handleIsDayBlocked(day) {
    return this.BLOCKED_DATES.filter(d => d.isSame(day, "day")).length > 0;
  }

  render() {
    return (
      <div className="hero">
        <img
          className="hero__background"
          src="https://farm66.staticflickr.com/65535/50611879577_0d9b97d62e_b.jpg"
        />
        <div className="search">
          <h2>The Authority on the Snow</h2>
          <p>
            Compare thousands of prices from the best resorts across the world
          </p>
          <form className="search__form">
            <div className="search__form-field">
              <BiMap />
              <input
                className="search__form-input"
                type="text"
                placeholder='Try "Les Arcs" or "Levi"'
              />
            </div>
            <div className="search__form-field">
              <BiCalendar />
              <DateRangePicker
                startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                startDateId="unique_start_date_id" // PropTypes.string.isRequired,
                endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                endDateId="unique_end_date_id" // PropTypes.string.isRequired,
                onDatesChange={this.handleDatesChange} // PropTypes.func.isRequired,
                focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                onFocusChange={this.handleFocusChange} // PropTypes.func.isRequired,
                displayFormat={this.state.dateFormat}
                hideKeyboardShortcutsPanel={true}
                numberOfMonths={this.state.numMonths || 2}
                block={this.state.block}
                small={this.state.small}
                withFullScreenPortal={this.state.fullscreen}
                anchorDirection={this.state.direction}
                orientation={this.state.orientation}
                minimumNights={this.state.minimumNights}
                isDayBlocked={this.handleIsDayBlocked}
              />
            </div>
            <div className="search__form-field">
              <BiGroup />
              <input
                className="search__form-input"
                type="text"
                placeholder="Guests"
              />
            </div>
            <button className="search__form-submit">Search</button>
          </form>
        </div>
      </div>
    );
  }
}

export default HeroSearch;

// <input
//   className="search__form-input"
//   type="text"
//   placeholder="Select your dates"
// />
