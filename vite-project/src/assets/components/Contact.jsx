import React from 'react'

const Contact = () => {
  return (
    <section>
      <div className="flex-col h-screen w-full bg-blue-100">
        <div className="flex justify-between mx-30 bg-slate-400 p-3">
          <h1 className="text-4xl  font-bold p-4">Contact</h1>
          <div className="flex items-center p-6 max-w-sm  bg-slate-500 rounded-xl shadow-lg space-x-4">
            <div className="shrink-0">
              <img
                src="your-image-path.jpg"
                className="h-12 w-12"
                alt="User Avatar"
              />
            </div>
            <div>
              <h4 className="text-xl font-medium text-white">username</h4>
              <p className="text-white">theuseremail@gmail.com</p>
            </div>
            <button className="bg-black  text-white p-2 rounded">
            sign out
          </button>
          </div>
        </div>

        <div className="flex justify-between mt-3 p-3">
          <p>Welcome to your contact</p>
          <button className="bg-pink-500 border border-gray-200 p-2 rounded">
            Add contact
          </button>
        </div>
      </div>
    </section>
  )
}

export default Contact