import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { DateTime } from "luxon";

import { verifyAvailability } from "../store/actions/service";

function TimeList({ onSelectTime, availability }) {
  console.log(availability);
  return (
    <div className="time-list">
      <div className="time-list-button">
        {availability.map(({ Date, available }) => {
          return (
            <button
              disable={available == "0"}
              className="time"
              onClick={() => {
                onSelectTime(DateTime.fromISO(Date).toFormat("hh:mma"));
              }}
            >
              {DateTime.fromISO(Date).toFormat("h:mma")}
            </button>
          );
        })}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  availability: state.service.availability,
  errors: state.service.errors,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ verifyAvailability }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TimeList);
