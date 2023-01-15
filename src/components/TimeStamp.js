import React from 'react';
import { DateTime } from 'luxon';
import PropTypes from 'prop-types';

const timeStamp = (props) => {
  const time = DateTime.fromISO(props.time);
  const absolute = time.toFormat('MMMM Do YYYY, h:mm:ss a');
  const relative = time.toRelative();

  return <span title={absolute}>{relative}</span>;
};

timeStamp.propTypes = {
  timeStampmessage: PropTypes.arrayOf(
    PropTypes.shape({
      messageContent: PropTypes.number,
    })
  ),
};
export default timeStamp;
