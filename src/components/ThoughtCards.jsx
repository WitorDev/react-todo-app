import React from 'react'
import { useState, useEffect } from 'react'
import { jsx } from 'react/jsx-runtime'

export default function ThoughtCards({thoughtsSaved, setThoughtsSaved}) { 

    useEffect(() => {
      const data = JSON.parse(localStorage.getItem('thoughts'))
      if (data) {
        setThoughtsSaved(data)
      }
    }, [])

      function handleStatus(id) {
        let updatedThoughts = thoughtsSaved.map((thought) =>
          thought.id === id ? { ...thought, done: !thought.done } : thought
        );
      
        setThoughtsSaved(updatedThoughts);  // Trigger a re-render with the updated thoughts
        localStorage.setItem('thoughts', JSON.stringify(updatedThoughts));  // Save to localStorage
      }
      
    
    function removeThought(id) {
        let filteredThoughtsList = thoughtsSaved.filter((thought) => thought.id != id)
        localStorage.setItem('thoughts', JSON.stringify(filteredThoughtsList))
        setThoughtsSaved(filteredThoughtsList)
    }

  return (
    <div className='transition-all no-scrollbar overflow-y-scroll container mx-auto sm:w-7/12 gap-4 flex flex-col h-4/5'>
        {
            thoughtsSaved.map((thought) => {
                return (
                    <div key={thought.id} className='transition-all bg-white break-all gap-6 flex justify-between rounded-md text-black p-4 w-full'>
                        <input type='checkbox' checked={thought.done} onChange={() => handleStatus(thought.id)} className='transition-all max-w-8 min-w-8'></input>
                        <p className={`flex transition-all justify-center items-center ${thought.done ? 'line-through text-slate-500' : ''} `}>{thought.text}</p>
                        <button
                            onClick={() => removeThought(thought.id)} 
                            className='bg-slate-300 flex justify-center transition-all items-center hover:bg-slate-200 rounded-full min-w-10 max-h-10 min-h-10'>
                            
                            <i className='fas fa-trash text-red-600 transition-all'></i>
                        </button>
                    </div>
                )
            })
        }
    </div>
  )
}
