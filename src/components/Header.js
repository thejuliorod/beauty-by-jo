import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import { add } from '../store/actions/schedule';
import { get, display_appointment_modal } from '../store/actions/auth';

import AppointmentModal from './AppointmentModal';

import Logo from '../assets/images/logo.jpg';

function Header({ access_token, add, get }) {
  const dispatch = useDispatch();
  const { show_appointment_modal, show_service_modal } = useSelector(
    (state) => state.auth
  );
  console.log('ModalState', show_appointment_modal);

  useEffect(async () => {
    await get();
  }, []);

  const handleSchedule = () => {
    dispatch(display_appointment_modal(true));

    console.log('HandleSchedule');
    add();
  };

  return (
    <>
      <div className="header">
        <div className="header-container">
          {access_token === null ? (
            <Link
              className="btn"
              to={{
                pathname: '/signin',
                state: {
                  btSchedule: true,
                },
              }}
            >
              Schedule an appointment-UNAUTHORIZED
            </Link>
          ) : (
            <button
              // disabled={access_token === null}
              className="btn"
              onClick={
                handleSchedule
                // setModalOpen(true);
              }
            >
              Schedule an appointment
            </button>
          )}
          <Link to="/" className="logo-btn">
            <img src={Logo} />
          </Link>

          <Link to="/contact" className="btn">
            Contact Us
          </Link>
        </div>
        {show_appointment_modal && (
          <AppointmentModal
            label="Pick a service to schedule your appointment"
            onClose={display_appointment_modal(false)}
          />
        )}
      </div>
    </>
  );
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ add, get, display_appointment_modal }, dispatch);

const mapStateToProps = (state) => ({
  access_token: state.auth.access_token,
  show_appointment_modal: state.auth.show_appointment_modal,
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
