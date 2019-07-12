import React from "react"
import PropTypes from "prop-types"
import StyledList from "./styles"

import KeyColorBox from "../KeyColorBox/index"
import KeyColorLine from "../KeyColorLine/index"
import KeyColorDot from "../KeyColorDot/index"

const Key = ({ columnNames, type }) => {
	const listItems = columnNames.map((elem, i) => {
		let symbol = <KeyColorBox index={i} />

		if (type === "line") {
			symbol = <KeyColorLine index={i} />
		}

		if (type === "dot") {
			symbol = <KeyColorDot index={i} />
		}

		return (
			<li key={elem}>
				{symbol}
				{elem}
			</li>
		)
	})

	return <StyledList aria-hidden>{listItems}</StyledList>
}

export default Key

Key.propTypes = {
	columnNames: PropTypes.arrayOf(PropTypes.string).isRequired,
	type: PropTypes.oneOf(["box", "line", "dot"]).isRequired,
}
