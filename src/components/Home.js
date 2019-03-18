import React, { Component } from 'react'
import '../App.css'
import {
    Row,
    Col,
    Container
} from 'reactstrap'
import Carousel from './Carousel'

    
class Home extends Component {
        
    render() {
    
        return (

            <div className="carousel-container">
                <Carousel/>
            </div>
            
        )

    }
        
}
                
export default Home