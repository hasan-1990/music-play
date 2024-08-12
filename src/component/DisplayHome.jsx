import React from 'react'
import Navbar from './Navbar'
import { albumsData } from '../assets/frontend-assets/assets'
import { songsData } from '../assets/frontend-assets/assets'
import SongItem from '../songItem'
import Albumiteme from './Albumiteme'
const DisplayHome = () => {
  return (
    <>
      <Navbar/>
      <div className='m-4'>
        <h1 className='my-5 font-bold text-2xl'>جدید ترین البوم ها</h1>
        <div className='flex overflow-auto '>
      {albumsData.map((item,index)=>(<Albumiteme key={index} name={item.name} desc={item.desc} id={item.id} imge={item.image}/>))}
        </div>
      </div>
      <div className='m-4'>
        <h1 className='my-5 font-bold text-2xl'>موزیک هایه پربازدید</h1>
        <div className='flex overflow-auto '>
        {songsData.map((item,index)=>(<SongItem key={index} name={item.name} desc={item.desc} id={item.id} imge={item.image}/>))}
        </div>
      </div>
    </>
  )
}

export default DisplayHome
