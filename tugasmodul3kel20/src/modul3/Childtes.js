import React, { Component } from "react"; 
 
class Childtes extends Component {     
    state = {         
        angka : 0  
    } 

    componentDidMount() { 
        alert(`Mount Triggered!`) 
    } 
    
    tambahAngka = () => { 
        this.setState((state) => { return {angka: state.angka + 1}}) 
    }  

    kurangAngka = () => { 
        this.setState((state) => { return {angka: state.angka - 1}}) 
    } 

    componentWillUnmount() { 
        alert(`Hilangkan Mahasiswa Kedua :(`) 
    } 

    render() {         
        return (             
            <div> 
                <h3>Mahasiswa Kedua </h3> 
         <button
            onClick={this.tambahAngka}> Tambah </button>
        <button onClick={this.kurangAngka}> Kurang</button>
        <br/>
        <span>{this.state.angka}</span>
        </div>

        )
    }
}
export default Childtes;



