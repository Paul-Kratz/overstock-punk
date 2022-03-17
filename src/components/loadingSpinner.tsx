import React from 'react'

export const LoadingSpinner = () => {
    return (
        <div className="w-100 text-center mt-3">
            <i className="fa fa-spinner fa-spin" style={{
                fontSize: '2em', textAlign: 'center'
            }} />
        </div>
    )
}