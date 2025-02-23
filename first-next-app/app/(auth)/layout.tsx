import React from "react";

export default function signinLayout ({children}: {
    children : React.ReactNode
} ) {
    return (
        <div>
            <div className="border-b text-center font-bold">
                20% off till two days
            </div>
            {children}
        </div>
    )
}