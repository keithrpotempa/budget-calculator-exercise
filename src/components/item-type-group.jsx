import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";
import { Column, Row } from '@mui-treasury/components/flex';

import ItemList from "./item-list";

const useStyles = makeStyles(() => ({
	card: {
		width: '100%',
		borderRadius: 16,
		boxShadow: '0 8px 16px 0 #BDC9D7',
		overflow: 'hidden',
	},
}));

const ItemTypeGroup = ({
	type,
	items, 
	handleAddSelected, 
	handleRemoveSelected, 
	selectedItems
}) => {
	const styles = useStyles();

	const formatTypeName = () => {
		const typeNameWords = type.split("_");
		const formattedWords = typeNameWords.map(word => {
		  return word[0].toUpperCase() + word.substr(1).toLowerCase()
		})
		return formattedWords.join(" ")
	}

	return (
		<>
			<Column p={0} m={0} gap={0} className={styles.card}>
				<Row wrap p={2} alignItems={'baseline'} className={styles.header}>					
					<Typography variant="h5">
						{formatTypeName(type)}
					</Typography>
				</Row>
				<ItemList 
					items={items} 
					handleAddSelected={handleAddSelected}
					handleRemoveSelected={handleRemoveSelected}
					selectedItems={selectedItems}
				/>
			</Column>
		</>
	)
}

export default ItemTypeGroup