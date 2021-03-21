import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import { Row, Item } from '@mui-treasury/components/flex';

import formatCurrency from '../helpers/format-currency';

const useStyles = makeStyles({
	root: {
		width: 325,
	},
	selected: {
		backgroundColor: "#d9e2ee",
	},
	button: {
		marginRight: 20,
	}
});

const ItemRow = ({
	item,
	handleAddSelected,
	handleRemoveSelected,
	selected,
	typeOptionSelected,
}) => {
	const classes = useStyles();

	return (
		<Row gap={2} p={2.5} minHeight={110} className={selected ? classes.selected : ""}>
			<Item grow position={'middle'}>
				<Typography className={classes.title}>
					{item.name}
				</Typography>
			</Item>
			<Item grow position={'middle'}>
				<Typography>
					{formatCurrency(item.lowPrice)} - {formatCurrency(item.highPrice)}
				</Typography>
			</Item>
			<Item position={'middle'} width={40} className={classes.button}>
				{/* If card is selected, show the remove button */}
				{selected
					? (
						<IconButton
							variant="contained"
							onClick={() => handleRemoveSelected(item)}
						>
							<DeleteForeverIcon />
						</IconButton>
					)
					/* If the type's one choice has already been selected, show no button */
					/* Otherwise, show the add button */
					: typeOptionSelected
						? null
						: (
							<IconButton
								variant="contained"
								onClick={() => handleAddSelected(item)}
							>
								<AddIcon />
							</IconButton>
						)
				}
			</Item>
		</Row>
	)
}

export default ItemRow;