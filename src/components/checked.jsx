import { useState } from "react"
import Link from "next/link"

let style = {
    width: 'min(320px, 90%)',
    padding: '1rem',
    background: '#FFF',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    gap: '1rem',
}

let containerStyle = {
    position: 'fixed',
    top: '0',
    zIndex: '200',
    bottom: "0",
    left: "0",
    right: "0",
    background: "#33333356",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
}


let btnStyle = {
    width: '100%',
    padding: '0.5rem',
    border: 'none',
    borderRadius: '.25rem'
}


function Success(){

    const [show, setShow] = useState(true)


    function hide(){
        setShow(false)
    }
    
    return (
        show ? (<div className="container" style={containerStyle}>
            <div className="container popup" style={style}>
                <img src="./tick.png" alt="" />
                <h1>
                    Thank you for shopping with us!
                </h1>
                <p>
                    Your order #3210582 has been confirmed!
                </p>
                <button style={btnStyle} onClick={hide}>Close</button>
                <Link href='/' className="greenBtn" style={btnStyle}>Go back home</Link>
            </div>
        </div>) : null
    )
}

export default Success