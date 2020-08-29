import React from 'react'

export default function Button(resetAction) {

    const refreshPage = () => {
         
       resetAction();

      }
    return (
        <>
            <button className="btn" onClick={refreshPage}>Rejouer</button>;
        </>
    )
}
