import React, { useContext } from 'react'
import classes from './Header.module.css'
import {Link } from "react-router-dom";
import usaFlag from '../../assets/images/united-states.png'
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LowerHeader from './LowerHeader';
import {DataContext} from '../DataProvider/DataProvider'

function Header() {
    const [{basket},dispatch]=useContext(DataContext)
    const totalItem=basket?.reduce((amount,item)=>{
        return  amount+ item.count
    },0)
    return (
        <>
            <section className={classes.fixed}>
                <section>
                    <div className={classes.header_container}>
                        {/* logo section */}
                        <div className={classes.logo_container}>
                            <Link to="/">
                                <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" />
                            </Link>
                            <Link className={classes.delivery}>
                                <span className={classes.location}>
                                    <LocationOnIcon />
                                </span>
                                <div>
                                    <p>Delivered to</p>
                                    <span>Ethiopia</span>
                                </div>
                            </Link>
                        </div>
                        <Link className={classes.search}>
                            {/* search */}
                            <select name="" id="">
                                <option value="">All</option>
                            </select>
                            <input type="text" placeholder='search product' />
                            <SearchIcon />
                        </Link>
                        <div className={classes.order_container}>
                            <Link className={classes.flag_container}>
                                <img src={usaFlag} alt="" />
                                <select>
                                    <option value="">EN</option>
                                </select>
                            </Link>
                            <Link to="/signin" className={classes.account}>
                                <p> Hell, Sign In</p>
                                <select name="" id="">
                                    <option value="">Account & Lists</option>
                                </select>
                            </Link>
                            <Link to="/order" className={classes.return}>
                                <p>Returns</p>
                                <span>& Orders</span>
                            </Link>
                            {/* cart */}
                            <Link to="/cart" className={classes.cart}>
                                <ShoppingCartOutlinedIcon />
                                <span>{basket.length}</span>
                                <p>cart</p>
                            </Link>
                        </div>
                    </div>
                </section>
                <LowerHeader />
            </section>
        </>
    )
}

export default Header
