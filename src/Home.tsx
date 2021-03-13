import React from 'react'
import { Link } from 'react-router-dom'
import Typewriter from 'typewriter-effect';

const Home = () => {
    return (
        <div style={{ textAlign: 'center', fontSize: '40px' }}>

            <h3>Quiz App</h3>
            <Typewriter
                options={{
                    autoStart: true,
                    loop: true,
                }}
                onInit={(typewriter) => {
                    typewriter.typeString('Welcome To Quiz App!')
                        .pauseFor(100)
                        .deleteAll()
                        .callFunction(() => {
                            console.log('All strings were deleted');
                        })
                        .start();

                }}
            />
            <Link to='/quiz'>
                <button className={'start'}>Get Start</button>
            </Link>

        </div>
    )
}

export default Home
