import React, { Component } from 'react'
import { glassesArr } from './data'

export default class renderWithMap extends Component {
    
    renderGlassesList=()=>{
       return glassesArr.map((item)=>{
            return <div>
                <p>{item.id}</p>
                <p>{item.price}</p>
                <p>{item.name}</p>
                <p>{item.url}</p>
                <p>{item.desc}</p>
            </div>
        })
    }
  render() {
    console.log(glassesArr.length)
    return (
      <div>{this.renderGlassesList}</div>
    )
  }
}
