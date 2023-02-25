import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = (props) => {
    const navigate=useNavigate();
    const gth=()=>{
        navigate('/');
    }
  return (
    <>
    <div className="d-flex align-items-center justify-content-center vh-100">
            <div className="text-center">
                <h1 className={`display-1 fw-bold text-${props.tcol}`}>404</h1>
                <p className={`text-${props.tcol}`}> <span class="text-danger">Opps!</span> Page not found.</p>
                <p className={`lead text-${props.tcol}`}>
                    The page you’re looking for doesn’t exist.
                  </p>
                <a onClick={gth} class="btn btn-primary">Go Home</a>
            </div>
        </div>
    </>
  )
}

export default Error
