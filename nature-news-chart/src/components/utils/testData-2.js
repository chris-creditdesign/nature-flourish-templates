// Mimic the shape of the data supplied by flourish
const myData = [
	{ key: "1995", values: ["6.3", "1.1", "0.7", "0.001"] },
	{ key: "2015", values: ["10.5", "2.1", "1.5", "1.5"] },
]

myData.column_names = {
	key: "Year",
	values: ["Coins", "Toys", "Jewelry", "Batteries"],
}

const data = {
	data: myData,
}

export default data
