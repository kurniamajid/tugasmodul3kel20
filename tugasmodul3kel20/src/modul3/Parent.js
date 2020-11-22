import { Component } from "react";
import React from "react";
import Child from "./Child";
import Childtes from "./Childtes";

class Parent extends Component {
    state = {
        komponen1: false,
        komponen2: false
 }

 componentDidUpdate(prevProps, prevState, snapshot) {
    alert(`komponen berhasil di update! prevState Child:
        ${prevState.komponen1} -- prevState Childtes :
        ${prevState.komponen2}`)
    }

 shouldComponentUpdate(nextProps, nextState, nextContext) {
     return window.confirm(`YAKIN???`);
 }

 ubahkomponen1 = () => {
    this.setState((state) => {
    return { komponen1: !this.state.komponen1}
    })
 }

 ubahkomponen2 = () => {
        this.setState((state) => {
            return { komponen2: !this.state.komponen2}
        })
 }

 render() {
        return (
            <div>
        {this.state.komponen1 ? <Child/> : ''}
         <button
        onClick={this.ubahkomponen1}>{this.state.komponen1 ? 'SEMBUNYI' :
        'MUNCUL'} Mahasiswa Pertama!</button>
    <br/>
        {this.state.komponen2 ? <Childtes/> : ''}
        <button
        onClick={this.ubahkomponen2}>{this.state.komponen2 ? 'SEMBUNYI' :
        'MUNCUL'} Mahasiswa Kedua!</button>
    </div>
 );
 }
}
export default Parent;