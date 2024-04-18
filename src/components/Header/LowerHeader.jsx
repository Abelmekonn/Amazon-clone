import React from 'react'
import classes from './Header.module.css'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
function LowerHeader() {
    return (
        <div className={classes.lower_container}>
            <ul>
                <li><MenuOutlinedIcon /><p>All</p></li>
                <li>Today`s Deals</li>
                <li>Customer Service</li>
                <li>Registry</li>
                <li>Gift CardS</li>
                <li>Sell</li>
            </ul>
        </div>
    )
}

export default LowerHeader
 