import React, { Component } from "react"; 
 class Child extends Component {     
     state = { 
        nama: "Fransiska" 
    } 
    componentDidMount() { 
        alert(`Mount triggered!`) 
    } 

    ChangeName = () => {         
        this.setState((state) => {             
        if (state.nama === "Fransiska"){                 
            return {nama : "Majid"} 
            }  else { 
            return { nama: "Fransiska"} 
            } 
        }) 
    } 
    
    componentWillUnmount() {
        alert(`hilangkan :(`)
    }

    render(){
        return (
        <div>
        <h3>Mahasiswa Kedua</h3>
        <button onClick={this.ChangeName}>ChangeName!</button>
        <br/>
        <h3>{this.state.nama}</h3>
        </div>
        );
    }
}
       
export default Child;
