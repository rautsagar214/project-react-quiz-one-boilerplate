import React, { Component } from 'react';

export default class Quiz extends Component{
    constructor(){
        super()
    }

    render(){
        return (
            <div className=' box flex-centered'>
                <div className='Quiz'>
                    <h2>Question</h2>
                    <div className='questionNumber'>
                        <p><span>1</span> of 15</p>
                    </div>
                    <p>Which is the only mammal that can jump?</p>
                    <div className='optionsDiv'>
                        <button className='option'>Dog</button>
                        <button className='option'>Elephant</button>
                        <button className='option'>Goat</button>
                        <button className='option'>Lion</button>
                    </div>
                    <div className='navigationOptions'>
                        <button className=' btncont  prev'>Previous</button>
                        <button className='btncont next'>Next</button>
                        <button className='btncont quit'>Quit</button>
                    </div>
                </div>
            </div>
        )
    }
} 