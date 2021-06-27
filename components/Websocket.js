const EventEmitter = require('events');

class MyEmitter extends EventEmitter {};

const myEmitter = new MyEmitter();

// var wsClient = new WebSocket('ws://192.168.0.4:3000/', 'echo-protocol');
var wsClient;
var wsStatus = false;
let temperature, humidity, windSpeed;

function connect(){
    wsClient = new WebSocket('ws://192.168.0.4:3000/', 'echo-protocol');

    wsClient.onopen = function(event){
        // console.log(event);
        console.log('websocket connected');
        wsStatus = true;
        // wsConnection.send('Ping');
    }
    
    wsClient.addEventListener('message', function(event){
        let message = JSON.parse(event.data);
        console.log("Añadiendo listener de websocket");
        // console.log(message.temperature);
        if(message.action == 'update' && message.screen == 'header'  && message.name== 'sensor'){
            // console.log("Actualizar temperatura");
            temperature = message.temperature;
            humidity = message.humidity;
            windSpeed = message.windSpeed;
    
            let sensorRead = getWeatherReading();
    
            myEmitter.emit('newread', sensorRead);
        }
        else{
            console.log("El mensaje no era para mí")
        }
    })

    wsClient.onerror = function(event){
        // console.error("Retry connection with server");
        setTimeout(function(){
            connect();
        }, 5000);
        
    }

}

const getWSStatus = function(){
    return wsStatus;
}

const getWeatherReading = function(){
    let stationRead = {'temperature':temperature, 'humidity': humidity, 'windSpeed': windSpeed};
    return stationRead;
}

connect();

export { wsClient, getWSStatus, myEmitter, getWeatherReading };

