import React from 'react';
import { Paper, Button } from '@material-ui/core';

const Intro = () => {

    return(
        <Paper
            style={{
                display: 'flex',
                width: '100vw',
                height: '650px',
                backgroundImage: `url('/img/Blue-Cube.jpg')`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                backgroundSize: 'cover',
            }}
        >
            <div
                style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.2)',
                    display: 'flex',
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <h1>Accelerate your Digital Transformation</h1>
                <p style={{maxWidth: '90%'}}>We provice NLP-based AI solutions to accompany your business on the journey to digital transformation.</p>
                <Button variant='contained' color='primary'>LEARN MORE</Button>
            </div>
        </Paper>
    )
}

export default Intro;
