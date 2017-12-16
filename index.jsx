import React from 'react';
import PropTypes from 'prop-types';


const Compo = ({ a, b }) => (
  <div>
    {a} {b}
  </div>
);

Compo.propTypes = {
  a: PropTypes.string.isRequired,
  b: PropTypes.string.isRequired,
};

export default Compo;
