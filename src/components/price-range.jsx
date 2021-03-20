import { Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react"
import formatCurrency from '../helpers/format-currency';

const PriceRange = ({selectedItems, allItems, budget}) => {
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
		setLowPriceRange(newLowPriceRange);
		setHighPriceRange(newHighPriceRange);
	}

	const getBudgetAssessmentMessage = () => {
		// NOTE: Price ranges from DB have two trailing digits
		// that must be removed if we're to compare it to the budget input
		const lowPrice = lowPriceRange / 100
		const highPrice = highPriceRange / 100

		if (budget > lowPrice && budget > highPrice) {
			return "Under Budget"
		} else if (budget >= lowPrice && budget <= highPrice) {
			return "Within Budget"
		} else {
			return "Over Budget"
		}
	}

	useEffect(() => {
		calculatePriceRange()
	}, [selectedItems, budget]) 

	return (
		<>
			<Typography>
				Current Selected Price Range: {formatCurrency(lowPriceRange)} - {formatCurrency(highPriceRange)}
			</Typography>
			<Typography>
				{getBudgetAssessmentMessage()}
			</Typography>
		</>
	)
}

export default PriceRange