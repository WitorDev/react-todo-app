import React, { useState } from 'react'

export default function InputBar({ setThoughtsSaved}) {
  const [thoughtContent, setThoughtContent] = useState('')

  function handleClick() {
    if (thoughtContent != '') {
      let currentId = localStorage.getItem('currentId')
      currentId = localStorage.getItem('currentId') ? parseInt(currentId) : 0

      let storedThoughts = localStorage.getItem('thoughts')
      let existingThoughts = storedThoughts ? JSON.parse(storedThoughts) : []

      const newThought = {
        id: currentId,
        text: thoughtContent,
        done: false
      }
      
      const updatedThoughtsList = [...existingThoughts, newThought]
      
      localStorage.setItem('thoughts', JSON.stringify(updatedThoughtsList))
      localStorage.setItem('currentId', currentId + 1)

      setThoughtsSaved(updatedThoughtsList)
    } else {
      alert(
        'Insert text in the input box...'
      )
    }
  }
 
  return (
    <form className='transition-all sm:w-7/12 w-full flex items-center justify-center bg-slate-300 rounded-xl p-2'>
        <input
          value={thoughtContent}
          onChange={e => setThoughtContent(e.target.value)}
          type="text"
          className='transition-all rounded-full caret-blue-600 outline-blue-600 w-11/12 text-black px-2 h-10 text-xl' />
        <button
          type='submit'
          onClick={handleClick}
          className='rounded-full transition-all flex justify-center items-center bg-blue-700 mx-2 min-w-10 min-h-10 hover:bg-blue-500'><i className="fa-solid fa-plus fa-2x"></i></button>
    </form>
  )
}

