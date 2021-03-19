import React, { useState } from "react"
import ItemCard from "./item-card"
import Grid from '@material-ui/core/Grid';

const ItemList = ({items}) => {
    const [selected, setSelected] = useState([]);

    const handleAddSelected = (item) => {
        const newSelected = [...selected];
        newSelected.push(item.id);
        setSelected(newSelected);
    }
    
    const handleRemoveSelected = (item) => {
        const newSelected = [...selected].filter(selected => selected !== item.id);
        setSelected(newSelected);
    }

    return (
        <>
            <Grid container spacing={3}>
                {items.map(item => (
                    <Grid key={item.id} xs={6} item>
                        <ItemCard 
                            item={item} 
                            onAdd={handleAddSelected}
                            onRemove={handleRemoveSelected}
                            selected={selected.includes(item.id)}
                        />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default ItemList