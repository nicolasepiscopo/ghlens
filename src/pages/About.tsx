import React from 'react'

interface Props {
    path: string
}

function About (props: Props) {
    const { path } = props;
    
    return (
        <div>
            About {path}
        </div>
    )
}

export default About