import React, { Component } from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { ProductConsumer } from '../context';

export default class Product extends Component {
    render() {
        const {id, title, img, inCart, price} = this.props.product;
        return (
            <ProductWrapper className="col-9 mx-auto col-md col-lg-3 my-3">
                <div className="card">
                    <div className="img-container p-5" onClick={() => console.log("clicked here")}>
                        <Link to="/details">
                            <img src={img} alt="product" className="card-img-top"></img>
                        </Link> 
                        <button className="cart-btn" disabled={inCart ? true:false} onClick={()=>{console.log('added to cart')}}>
                            {inCart?(
                            <p className="text-capitalize mb-0" disabled>{""} In cart</p>):(<i className="fas fa-cart-plus" />)}
                        </button>
                        
                    </div>
                    {/* card footer*/}
                    <div className="card-footer d-flex jusitfy-content-between">
                        <p className="align-self-center mb-0">
                            {title}
                        </p>
                        <h5 className="text-blue font-italic mb-0">
                            <span>$</span>
                            {price}
                        </h5>
                    </div>
                </div>
            </ProductWrapper>
        );
    }
}

const ProductWrapper = styled.div`

`