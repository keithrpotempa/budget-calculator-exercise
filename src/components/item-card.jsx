import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        width: 325,
    },
    selected: {
        border: "10px solid red",
    },
  });

const ItemCard = ({item, onAdd, onRemove, selected}) => {
    const classes = useStyles();
    
    const formatCurrency = (amount) => {
        // TODO:
        // NOTE: "The last two digits of each number are cents, meaning 60000 is equal to $600.00."

        return new Intl.NumberFormat('en-US',
            { 
                style: 'currency', 
                currency: 'USD', 
                minimumFractionDigits: 0,
            }
        ).format(amount);
    }

    return (
        <Card className={`${classes.root} ${selected ? classes.selected : ""}`}>
            <CardContent>
                <Typography variant="h5">
                    {item.name}
                </Typography>
                <Typography>
                    {item.type}
                </Typography>
                <Typography>
                    {formatCurrency(item.lowPrice)} - {formatCurrency(item.highPrice)}
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant="contained" onClick={() => onAdd(item)}>Add</Button>
                <Button variant="contained" onClick={() => onRemove(item)}>Remove</Button>
            </CardActions>
        </Card>
    )
}

export default ItemCard;