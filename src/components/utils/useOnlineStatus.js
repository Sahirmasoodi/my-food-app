import { useEffect, useState } from "react"

const useOnlineStatus = () => {
    const [onlineStatus,setOnlineStatus] = useState(true)
    useEffect(()=>{
        document.addEventListeners('online',()=>{
            setOnlineStatus(true)
        })
         window.addEventListeners('offline',()=>{
            setOnlineStatus(false)
        })

    },[])

    return onlineStatus
}

export default useOnlineStatus