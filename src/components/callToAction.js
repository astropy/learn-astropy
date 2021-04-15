import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Button = styled.div`
  background-color: #fa743b;
  border-color: #fa743b;
  cursor: pointer;
  text-decoration: none;
  color: #ffffff;
  text-align: center;
  vertical-align: middle;
  padding: 0.375rem 0.75rem;
  font-size: 0.875rem;
  border-radius: 0.25rem;
  display: inline-block;
`;

/*
 * A call-to-action button that is a link to an internal page (using the
 * Gatsby Link API).
 */
export default function CallToActionLink({ children, to }) {
  return (
    <Link to={to}>
      <Button>{children}</Button>
    </Link>
  );
}

CallToActionLink.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string.isRequired,
};
