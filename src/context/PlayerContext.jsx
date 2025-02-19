import { createContext, useEffect } from 'react'
import { useRef } from 'react'
import { songsData } from '../assets/frontend-assets/assets'
import { useState } from 'react'

export const PlayerContext = createContext()


 const PlayerContextProvider = (props) => {

    const audioRef = useRef()
    const seekbg = useRef()
    const seekbar = useRef()

    const [track, setTrack] = useState(songsData[0])
    const [playStatus, setPlayStatus] = useState(false)
    const [time,setTime] = useState({
        currentTime:{
            secend:0,
            minute:0
        },    
        totalTime:{
            secend:0,
            minute:0
        }
    })


    const previous = async () => {
        if (track.id>0) {

            await setTrack (songsData[track.id-1])
            await audioRef.current.play();
            setPlayStatus(true);
        }
    }

    const next = async () => {
        if (track.id< songsData.length-1) {

            await setTrack (songsData[track.id+1])
            await audioRef.current.play();
            setPlayStatus(true);
        }
    }

    const seeksong = async (e) => {
        audioRef.current.currentTime = ((e.nativeEvent.offsetX / seekbg.current.offsetWidth)* audioRef.current.duration) 
    }

    useEffect(()=>{
        setTimeout(() => {
            audioRef.current.ontimeupdate = ()=> {
                seekbar.current.style.width = `${(audioRef.current.currentTime / audioRef.current.duration) * 100}%`
                setTime({
                    currentTime:{
                        secend:Math.floor(audioRef.current.currentTime % 60),
                        minute:Math.floor(audioRef.current.currentTime / 60)
                    },    
                    totalTime:{
                        secend:Math.floor(audioRef.current.duration % 60),
                        minute:Math.floor(audioRef.current.duration / 60)
                    }
                })
            }
        }, 1000);
    },[audioRef])

    const play = () => {
        audioRef.current.play()
        setPlayStatus(true)
        console.log('play')
    }
    const pause = () => {
        audioRef.current.pause()
        setPlayStatus(false)
        console.log('pause')
    }

    const playwithId = async (id) => {
        await setTrack(songsData[id])
        await audioRef.current.play()
        setPlayStatus(true)
    }

    const contextValue = {
        audioRef,
        seekbg,
        seekbar,
        track,setTrack,
        playStatus,setPlayStatus,
        time,setTime,
        play,
        pause,
        playwithId,
        previous,
        next,
        seeksong
       
        
        
    }
    
    return(
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    )
}


export default PlayerContextProvider