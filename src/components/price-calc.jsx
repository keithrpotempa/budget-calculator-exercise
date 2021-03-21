import React, { useState, useEffect } from "react"

import { makeStyles } from '@material-ui/core/styles';
import { Typography, TextField } from "@material-ui/core";
import Alert from '@material-ui/lab/Alert';
import { Column, Row, Item } from '@mui-treasury/components/flex';

import formatCurrency from '../helpers/format-currency';

const useStyles = makeStyles(() => ({
	card: {
		width: '100%',
		borderRadius: 16,
		boxShadow: '0 8px 16px 0 #BDC9D7',
		overflow: 'hidden',
	},
	alert: {
		borderRadius: 16,
		width: 170,
	}
}));

const PriceCalc = ({selectedItems, allItems, budget, setBudget}) => {
	const [lowPriceRange, setLowPriceRange] = useState(0);
	const [highPriceRange, setHighPriceRange] = useState(0);

	const styles = useStyles();

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

	const handleBudgetChange = (e) => {
		setBudget(e.target.value);
	  }

	const getBudgetAssessmentMessage = () => {
		// NOTE: Price ranges from DB have two trailing digits
		// that must be removed if we're to compare it to the budget input
		const lowPrice = lowPriceRange / 100
		const highPrice = highPriceRange / 100

		if (budget > lowPrice && budget > highPrice) {
			return <Alert className={styles.alert} severity="info">Under Budget</Alert>
		} else if (budget >= lowPrice && budget <= highPrice) {
			return <Alert className={styles.alert} severity="success">Within Budget</Alert>
		} else {
			return <Alert className={styles.alert} severity="error">Over Budget</Alert>
		}
	}

	useEffect(() => {
		calculatePriceRange()
	}, [selectedItems, budget]) 

	return (
		<Column p={2} gap={0} className={styles.card}>
			<Row>
				<Item grow>
					<TextField 
						id="budget-input" 
						label="Budget" 
						variant="outlined"
						type="number"
						onChange={handleBudgetChange} 
					/>
				</Item>
				<Item position={'middle'}>
					<Typography>
						Selected Range: {formatCurrency(lowPriceRange)} - {formatCurrency(highPriceRange)}
					</Typography>
				</Item>
			</Row>
			<Row>
				<Item position={'right'}>
					<Typography>
						{getBudgetAssessmentMessage()}
					</Typography>
				</Item>
			</Row>
		</Column>
	)
}

export default PriceCalc