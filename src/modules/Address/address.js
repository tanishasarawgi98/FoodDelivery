import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Address extends Component {
    render(){
        return <div className="cart-container" style={{marginTop: "10px"}}>
            <div className="card-title">
                {'Address'}
            </div>
        <form>
            Name: <input type="text" placeholder="Jane Doe" className="inputBox"/><br/>
            Address: <input type="text" placeholder="Flat No,Street Name" className="inputBox"/><br/>
            Pin code: <input type="text" placeholder="723193" className="inputBox"/><br/>
            Phone No. <input type="text" placeholder="9999999999" className="inputBox"/><br/>
            <br/>
            <button onClick={this.props.onCheckout}>CHECKOUT</button>
        </form>
        </div>
    }
}

Address.propTypes = {
    onCheckout: PropTypes.func
};