import React from "react"
import PropTypes from "prop-types"
import StyledSmallText from "./styles"

const Header = ({ text }) => (
	<StyledSmallText dangerouslySetInnerHTML={{ __html: text }} />
)

export default Header

Header.propTypes = {
	text: PropTypes.string.isRequired,
}
