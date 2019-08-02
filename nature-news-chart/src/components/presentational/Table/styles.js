import styled from "@emotion/styled"

const StyledTable = styled.div`
	overflow-x: auto;

	table {
		max-width: max-content;
		min-width: 100%;
		white-space: nowrap;
		border-collapse: collapse;
		margin: ${props => props.theme.margin.below.s};
	}

	tbody tr:nth-of-type(even) {
		background: ${props => props.theme.backgroundColor.light};
	}

	thead tr {
		border-bottom: ${props => props.theme.border};
		background: ${props => props.theme.backgroundColor.light};
	}

	caption {
		font-weight: ${props => props.theme.fontWeight.bold};
		padding: 0;
		margin: ${props => props.theme.margin.below.s};
		text-align: left;
	}

	td,
	th {
		padding: ${props => props.theme.padding.allAround.s};
		/* border: 1px solid #ccc;  */
		text-align: left;
	}
`

export default StyledTable
