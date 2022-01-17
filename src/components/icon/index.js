import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ type }) => {
	return <span className={`fa fa-${type}`} aria-hidden="true" data-test="icon"></span>;
};

Icon.propTypes = {
	type: PropTypes.string.isRequired,
};

export default Icon;
