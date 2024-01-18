import React, { createContext, useState } from 'react'


// context should be needed to create before function then only it can access globally
// using createContext() method create a context and store to the variable
export const registerContext=createContext()


// children are components to which the data to be shared
function Contextshare({children}) {

    // to share value

    const [registerData,setregisterData]=useState("")


  return (
    <>
    {/*to give the data to the components here the component is children */}
             {/* where we want registerContext we get the state and value to share date. to share data from components to components */}
             {/* provider to share */}
        <registerContext.Provider value={{registerData,setregisterData}}>
            {children}
        </registerContext.Provider>
    </>
  )
}

export default Contextshare