import React, { Component } from 'react';
import { connect } from 'react-redux'

class Home extends Component{
    render(){
        let itemList = this.props.items.map(item=>{
            return(
                <div className="card" key={item.id}>
                    <div className="card-image">
                        <img src={item.img} alt={item.title}/>
                        <span className="card-title">{item.title}</span>
                        <span to="/" className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></span>
                    </div>
                </div>
            )
export default connect(mapStateToProps)(Home)