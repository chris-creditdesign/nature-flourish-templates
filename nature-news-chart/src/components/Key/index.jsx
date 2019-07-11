import React from "react"
import PropTypes from "prop-types"
import StyledList from "./styles"

const Key = ({ columnNames }) => {
	const listItems = columnNames.map(elem => <li key={elem}>{elem}</li>)

	return <StyledList>{listItems}</StyledList>
}

export default Key

Key.propTypes = {
	columnNames: PropTypes.arrayOf(PropTypes.string).isRequired,
}
