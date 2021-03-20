import { Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react"
import formatCurrency from '../helpers/format-currency';

const PriceRange = ({selectedItems, allItems}) => {
	const [lowPriceRange, setLowPriceRange] = useState(0);
	const [highPriceRange, setHighPriceRange] = useState(0);

	const calculatePriceRange = () => {
		let newLowPriceRange = 0;
		let newHighPriceRange = 0; 
		const selected = allItems.filter(items => selectedItems.includes(items.id))
		selected.forEach(item => {
			newLowPriceRange += item.lowPrice
			newHighPriceRange += item.highPrice
		})
		setLowPriceRange(formatCurrency(newLowPriceRange));
		setHighPriceRange(formatCurrency(newHighPriceRange));
	}

	useEffect(() => {
		calculatePriceRange()
	}, [selectedItems]) 

	return (
		<Typography>
			{lowPriceRange} - {highPriceRange}
		</Typography>
	)
}

export default PriceRange