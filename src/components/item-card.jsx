import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import formatCurrency from '../helpers/format-currency';

const useStyles = makeStyles({
    root: {
        width: 325,
    },
    selected: {
        border: "10px solid red",
    },
  });

const ItemCard = ({
	item, 
	handleAddSelected, 
	handleRemoveSelected, 
	selected,
	typeOptionSelected,
}) => {
	const classes = useStyles();

	return (
		<Card className={`${classes.root} ${selected ? classes.selected : ""}`}>
			<CardContent>
				<Typography variant="h5">
					{item.name}
				</Typography>
				<Typography>
					{formatCurrency(item.lowPrice)} - {formatCurrency(item.highPrice)}
				</Typography>
			</CardContent>
			<CardActions>
				{/* If card is selected, show the remove button */}
				{selected 
					? (
						<Button 
						variant="contained" 
						onClick={() => handleRemoveSelected(item)}
						>
							Remove
						</Button>
					)
					/* If the type's one choice has already been selected, show no button */
					/* Otherwise, show the add button */
					: typeOptionSelected
						? null
						: (
							<Button 
								variant="contained" 
								onClick={() => handleAddSelected(item)}
							>
								Add
							</Button>
						)
				}
			</CardActions>
		</Card>
	)
}

export default ItemCard;