import React, { Component } from 'react';
import {Button, TextField } from '@material-ui/core'
import axios from 'axios';

const api = {
    key: 'd8fb25d83fd416945983b4e5445ce3c0',
    url1: 'https://api.openweathermap.org/data/2.5/weather?q',
    url2: '&units=metric&appid'
}


class TestMui extends Component {

    constructor(){
        super()
        this.state={
            info: [],
            cityname : 'Faridpur'
        }
    }

    componentDidMount(){
        axios.get(`${api.url1}=${this.state.cityname}${api.url2}=${api.key}`)
        .then(response=>{
            console.log(response.data.main)
            this.setState({info: response.data.main})
        })
        .catch(error=>{
            console.log(error)
        })  
    }

  
    render() {
        return (
            <div>
                <Button variant='contained'>siam</Button>
                
                <form>
                <TextField id="outlined-basic"  onChange={this.onChangename = (e) =>{
                        this.setState({cityname : e.target.value})
                    }}  label="Enter Input" variant="outlined" type='text'></TextField>
                   
                    
                </form>
                <h1>City: {this.state.cityname}</h1>
                <p>Temp: {this.state.info.temp}°C</p>
                    <p>Feel Like: {this.state.info.feels_like}°C</p>
                    <div style={{display: 'inline-flex', textAlign: 'center'}}>
                        <p>Max: {this.state.info.temp}°C</p> <p> | </p> 
                        <p>Min: {this.state.info.feels_like}°C</p>
                    </div>
                
                
            </div>
            
        );
    }
}

export default TestMui;