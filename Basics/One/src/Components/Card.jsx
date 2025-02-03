import React from 'react'

const Card = ({name,Desc,btnTxt="Visit here"}) => {
  return (
    <>
  <div className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden">
      <img
        className="w-full h-48 object-cover"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQABqQIdskCD9BK0I81EbVfV9tTz320XvJ35A&s"
        alt="Card Image"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-600 mt-2">
         {Desc}
        </p>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
         {btnTxt}
        </button>
      </div>
    </div>
    
    </>
  )
}

export default Card