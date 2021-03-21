import React, { useEffect, useState } from "react"

import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

import ItemRow from "./item-row"

const useStyles = makeStyles(() => ({
	divider: {
		backgroundColor: '#d9e2ee',
		margin: '0 20px',
	}
}));

const ItemList = ({
	items, 
	handleAddSelected, 
	handleRemoveSelected, 
	selectedItems
}) => {

	const [typeOptionSelected, setTypeOptionSelected] = useState(false);

	const styles = useStyles();

	const isTypeOptionSelected = () => {
		if (selectedItems.length > 0) {
			const selected = items.filter(item => selectedItems.includes(item.id))
			return selected.length > 0
		} else {
			return false
		}
	} 

	useEffect(() => {
    setTypeOptionSelected(isTypeOptionSelected());
  }, [selectedItems]) 

	return (
		<>
			{/* <Grid container spacing={3}> */}
				{items.map(item => (
					<>
						<Divider variant={'middle'} className={styles.divider} />
						<ItemRow 
							item={item} 
							handleAddSelected={handleAddSelected}
							handleRemoveSelected={handleRemoveSelected}
							selected={selectedItems.includes(item.id)}
							typeOptionSelected={typeOptionSelected}
						/>
					</>
				))}
			{/* </Grid> */}
		</>
	)
}

export default ItemList