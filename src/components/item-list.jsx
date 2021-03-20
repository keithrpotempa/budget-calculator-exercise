import React from "react"
import ItemCard from "./item-card"
import Grid from '@material-ui/core/Grid';

const ItemList = ({items, handleAddSelected, handleRemoveSelected, selectedItems}) => {

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
						/>
					</Grid>
				))}
			</Grid>
		</>
	)
}

export default ItemList