import { Component } from 'react';
import PropTypes from 'prop-types';

export class ContactList extends Component {
  render() {
    const filterContacts = this.props.filterList;
    const contactDelete = this.props.onDelete;
    return (
      <ul>
        {filterContacts.map(filterContact => (
          <li key={filterContact.id}>
            {filterContact.name}: {filterContact.number}
            <button onClick={() => contactDelete(filterContact.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

ContactList.propTypes = {
  filterList: PropTypes.array.isRequired,
};
