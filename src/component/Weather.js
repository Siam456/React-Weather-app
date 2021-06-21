import React, { Component } from 'react';
import {Button, TextField, Card ,Typography} from '@material-ui/core'
import axios from 'axios';
import { Link  , Route , BrowserRouter as Router} from 'react-router-dom';
import Wapp from './Wapp';

const api = {
    key: 'd8fb25d83fd416945983b4e5445ce3c0',
    url1: 'https://api.openweathermap.org/data/2.5/weather?q',
    url2: '&units=metric&appid'
}


class Weather extends Component {

    constructor(){
        super()
        this.state={
            info: [],
            cityname : '',
            country: '',
            w: {}
        }
    }


    onChangename = (e) =>{
        var city = e.target.value
        this.setState({cityname : e.target.value})
        axios.get(`${api.url1}=${city}${api.url2}=${api.key}`)
        .then(response=>{
            console.log(response)
            this.setState({info: response.data.main})
            this.setState({country: response.data.sys.country})
            this.setState({w: response.data.weather[0]})
            console.log(this.state.w)
            
            
        })
        .catch(error=>{
            console.log(error)
        }) 
    }
    render() {
        let www;
        if(this.state.w.main === 'Clouds'){
            www = 'https://preview.pixlr.com/images/800wm/100/1/1001487100.jpg'
        }
        else if(this.state.w.main === 'Haze'){
            www = 'https://cdn.dribbble.com/users/1003944/screenshots/7056265/media/6f044dfc26d1a6ab9be53e37da6c5799.gif'
        }
        else if(this.state.w.main === 'Clear'){
            www = 'https://image.shutterstock.com/image-vector/weather-icon-clear-sky-hot-260nw-474680191.jpg'
        }

        
        return (
            
            <div style={{justifyContent: 'center', marginTop: '0'}}>
                <Router>
                    <Button variant='contained' color='primary' style={{position: 'absolute' , right: '20px' , top: '20px'}}><Link to = '/about' style={{ color: 'white' ,textDecoration: 'none'}}>About</Link></Button>
                    <Route path='/about' component={Wapp}></Route>
                </Router>
                <Card style={{marginTop: '50px' , paddingTop: '10px'}}>
                <form>
                    <TextField id="outlined-basic"  onChange={this.onChangename}  label="Enter Input" variant="outlined" type='text'></TextField>   
                </form>
                <img src={www} alt='' height='100px' width='100px' style={{marginTop: '5px'}} />
                <Typography variant='h5' style={{height: '10px' , marginTop: '5px'}}>{this.state.w.main}</Typography>
                <div className='temp-st'><Typography variant='h3' color='primary'>{this.state.info.temp}°C</Typography></div>
                <Typography  variant='h5' color='primary'>{this.state.cityname}, {this.state.country}</Typography>
                
                    <p>Feel Like: {this.state.info.feels_like}°C</p>
                    <div style={{display: 'inline-flex', textAlign: 'center'}}>
                        <p>Max: {this.state.info.temp}°C</p> <p> | </p> 
                        <p>Min: {this.state.info.feels_like}°C</p>
                    </div>
                
                
            </Card>
            </div>
            
        );
    }
}

export default Weather;