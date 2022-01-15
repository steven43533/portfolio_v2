import React from 'react'
import Typewriter from 'typewriter-effect'

function Home() {
    
    return (
        <div>
            <h1>Steven Lopez</h1>
            <Typewriter 
                options={{
                    strings: ['Web Developer', 'Always Learning', 'Self-Driven'],
                    autoStart: true,
                    loop: true,
                }}
                />
        </div>
    )
}

export default Home
