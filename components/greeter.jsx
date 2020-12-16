import React, { useState } from 'react'

export default () => {
  const [name, setName] = useState('')

  return (
    <div className="form">
      <div className="intro">To whom do I have the pleasure of speaking to today?</div>
      <input type="text" name="name" onChange={event => setName(event.target.value)} value={name} />
      <div className="greeting">
        {name ? `It's a pleasure to meet you ${name}` : null}
      </div>
    </div>
  )
}
