/* eslint-disable react/no-danger */
import React from "react"
import PropTypes from "prop-types"
import StyledHeader from "./styles"

const Header = ({ headLine, standFirst }) => (
	<StyledHeader>
		<h1>{headLine}</h1>
		<p dangerouslySetInnerHTML={{ __html: standFirst }} />
	</StyledHeader>
)

export default Header

Header.propTypes = {
	headLine: PropTypes.string.isRequired,
	standFirst: PropTypes.string.isRequired,
}
