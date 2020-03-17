import React, { useState, useEffect } from 'react';
import Jokes from './Jokes';
import axios from 'axios';

const JokesCont = () => {

    const [joke, setJoke ] = useState([]);
    const [next, setNext] = useState(false);

    useEffect(() => {
        axios
            .get(`https://official-joke-api.appspot.com/jokes/programming/random`)
            .then(res => {
                console.log('this is res', res.data);
                setJoke(res.data)
            })
            .catch(err => console.log('this is err', err))

    }, [next]);

    const toggleNext = () => {
        setNext(!next);
        punchline();
    } 

    const punchline = () => {
        const myVar = document.getElementById("punchline");
        myVar.classList.toggle("hide-punch");
    }



    return (
        <div>
        {joke.map(item => (
            <div className="jokes">
            <div>
                <h1>{item.setup}</h1>
                <h2 id="punchline" className="hide-punch">{item.punchline}</h2>
            </div>
            <div className="btn-cont">
                <button onClick={()=>{punchline()}}>Punchline</button>
                <button onClick={()=>{toggleNext()}}>Next</button>
            </div>
            </div>
        ))}
        
        </div>
    )
}

export default JokesCont;