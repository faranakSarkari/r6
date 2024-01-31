import React from 'react'

export default function Notes({title,content}) {
  return (
    <li>
        <a href='#'>
            <h2>{title}</h2>
            <p>{content}</p>
        </a>
    </li>
  )
}
