import React,{ createContext,useMemo,useContext } from 'react'
import {io as socketIOClient} from 'socket.io-client'


const SocketContext = createContext(null)

export const useSocket = () => {
    const socket = useContext(SocketContext)
    return socket
}

export const SocketProvider = (props) =>{
    const socket = useMemo(()=>socketIOClient('localhost:8000'),[])
    return(
        <SocketContext.Provider value={socket}>
            {props.children}
        </SocketContext.Provider>
    )
}

