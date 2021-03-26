import React from 'react';
import Carousel from 'react-material-ui-carousel'
import {Paper} from '@material-ui/core'

function ItemsCarusel(props)
{
    var items = props.images

    return (
        <Carousel className="carusel">
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{

    return (
        <Paper>
            <img src={props.item} className="ImageCenter" height="780" alt="photos"/>
        </Paper>
    )
}

export default ItemsCarusel;