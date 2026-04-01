import React from 'react'

const ListItem = ({name, text, image, style}) => {
  return (
    <div className='row' style={style}>
        <div className="image">
            <img src={image} alt={name} />
        </div>
        <div className='content'>
            <div>{name}</div>
            <div>
                {text}
            </div>
        </div>
    </div>
  )
}

export default ListItem;