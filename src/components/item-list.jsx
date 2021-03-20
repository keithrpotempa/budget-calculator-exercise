import React, { useEffect, useState } from "react"
import ItemCard from "./item-card"
import Grid from '@material-ui/core/Grid';

const ItemList = ({
	items, 
	handleAddSelected, 
	handleRemoveSelected, 
	selectedItems
}) => {

	const [typeOptionSelected, setTypeOptionSelected] = useState(false);

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
			<Grid container spacing={3}>
				{items.map(item => (
					<Grid key={item.id} xs={6} item>
						<ItemCard 
							item={item} 
							handleAddSelected={handleAddSelected}
							handleRemoveSelected={handleRemoveSelected}
							selected={selectedItems.includes(item.id)}
							typeOptionSelected={typeOptionSelected}
						/>
					</Grid>
				))}
			</Grid>
		</>
	)
}

export default ItemList