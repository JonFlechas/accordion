import React from 'react'
import { HiMinusCircle, HiPlusCircle } from 'react-icons/hi'
import { useState } from 'react'

const QA = (props) => {
  const { title, info } = props
  const [hidden, setHidden] = useState(true)
  const toggleQuestion = () => {
    setHidden(!hidden)
  }
  return (
    <article className='q-container'>
      <p className='question'>
        <h4>{title}</h4>
        {hidden ? (
          <HiPlusCircle className='btn' onClick={() => toggleQuestion()} />
        ) : (
          <HiMinusCircle className='btn' onClick={() => toggleQuestion()} />
        )}
      </p>
      {hidden ? <></> : <p className='info'>{info}</p>}
    </article>
  )
}

export default QA
