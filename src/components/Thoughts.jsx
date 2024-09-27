import React from 'react'
import InputBar from "./InputBar"
import ThoughtCards from './ThoughtCards'
import Footer from './Footer'
import { useState } from 'react'


export default function Thoughts() {
    const [thoughtsSaved, setThoughtsSaved] = useState([])
  return (
    <main className='transition-all px-2 sm-px-0 h-screen gap-4 flex flex-col items-center justify-center bg-slate-800 text-white'>
        <InputBar thoughtsSaved={thoughtsSaved} setThoughtsSaved={setThoughtsSaved} />
        <ThoughtCards thoughtsSaved={thoughtsSaved} setThoughtsSaved={setThoughtsSaved} />
        <Footer />
    </main>
  )
}
