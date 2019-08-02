import React from "react"
import PropTypes from "prop-types"
import StyledFootnote from "./styles"

const Header = ({ footnoteText }) => (
	<StyledFootnote>{footnoteText}</StyledFootnote>
)

export default Header

Header.propTypes = {
	footnoteText: PropTypes.string.isRequired,
}
