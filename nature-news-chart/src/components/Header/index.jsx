import React from "react"
import PropTypes from "prop-types"
import StyledHeader from "./styles"

const Header = ({ headLine, standFirst }) => (
	<StyledHeader>
		<h1>{headLine}</h1>
		<p>{standFirst}</p>
	</StyledHeader>
)

export default Header

Header.propTypes = {
	headLine: PropTypes.string.isRequired,
	standFirst: PropTypes.string.isRequired,
}
