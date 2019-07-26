import React from 'react'

interface Props {
    path: string
}

function Dashboard (props: Props) {
    const { path } = props;

    return (
        <div>
            Dashboard {path}
        </div>
    )
}

export default Dashboard