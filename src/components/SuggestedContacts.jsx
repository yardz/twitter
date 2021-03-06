import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Contact from './Contact';

const SuggestedContacts = ({ contacts }) => (
  <div className="suggested-contacts-container">
    <h3>Who to follow</h3>
    {(contacts || []).map(contact => <Contact key={`contact-${contact.id}`} contact={contact} />)}
  </div>
);

SuggestedContacts.propTypes = {
  contacts: PropTypes.array.isRequired,
};

const mapStateToProps = ({ contacts }) => ({ contacts });
export default connect(mapStateToProps)(SuggestedContacts);
