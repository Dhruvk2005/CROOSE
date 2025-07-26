import React from 'react'
import Link from 'next/link'

const Forgotcard = () => {
  return (
    <div className="min-h-screen flex flex-col">

      <div className="flex justify-between items-center w-full border-b border-[#EAECF0] py-4 px-5">
        <img
          className="w-36 sm:w-44 md:w-[173px] mt-2"
          src="Vector.png"
          alt="crooselogo"
        />
        <p className="text-sm sm:text-base">Sign Up</p>
      </div>


      <div className="flex justify-center items-center flex-1 px-4 py-10">
        <div className="w-full max-w-sm flex flex-col gap-6">
          <h1 className="text-3xl font-bold text-[#201E1F]">
            Forgot Password?
          </h1>

          <form className="space-y-4" action="#">

            <div className="flex flex-col">
              <label
                htmlFor="password"
                className="text-[#344054] text-sm font-medium mb-1"
              >
                New Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter Password"
                className="h-11 px-4 text-sm text-[#98A2B3] border border-gray-300 rounded-xl outline-none"
                required
              />
            </div>


            <div className="flex flex-col">
              <label
                htmlFor="confirm-password"
                className="text-[#344054] text-sm font-medium mb-1"
              >
                Confirm New Password
              </label>
              <input
                type="password"
                name="confirm-password"
                id="confirm-password"
                placeholder="Enter Password"
                className="h-11 px-4 text-sm text-[#98A2B3] border border-gray-300 rounded-xl outline-none"
                required
              />
            </div>


            <div className="mt-6">
              <button
                type="submit"
                className="w-full h-11 bg-[#685BC71F] text-white text-sm font-medium rounded-xl"
              >
                Reset Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Forgotcard
