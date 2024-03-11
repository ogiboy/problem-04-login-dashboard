'use client'

import { useState } from 'react'

// login'i ve dashboard + signout'u isAuthUser'a koşullu olarak görüntülemek için <></> fragment'ı kullanın
export default function Navbar() {
  // let isAuthUser = false
  const [isAuthUser, setIsAuthUser] = useState(false)

  function toggleLogin() {
    setIsAuthUser((p) => !p)
  }

  const linkStyles =
    'navbar-link w-4/5 text-center text-xl border-2 rounded-lg py-2 bg-blue-600 text-slate-100 hover:bg-blue-700'

  const h2Styles = 'font-bold text-2xl w-4/5 text-center'

  return (
    <header className="navbar-wrapper min-w-fit w-3/4 lg:w-3/5 xl:w-2/5 min-h-80 mx-auto my-20 border-2 rounded-lg">
      <nav className="navbar">
        <Logo />
        <div className="navbar-links min-h-52 min-w-56 flex flex-col justify-evenly items-center">
          {isAuthUser ? (
            <>
              <h2 className={h2Styles}>Hesabınız</h2>
              <a href="#" className={linkStyles}>
                Dashboard
              </a>
              <a href="#" className={linkStyles}>
                Sign out
              </a>
            </>
          ) : (
            <>
              <h2 className={h2Styles}>Hesabınıza giriş yapın</h2>
              <a href="#" className={linkStyles}>
                Login
              </a>
            </>
          )}
        </div>
      </nav>
      <button
        onClick={() => toggleLogin()}
        type="button"
        className="bg-blue-500 hover:bg-blue-300 text-white hover:text-black/70 rounded-md py-2 px-2"
      >
        Toggle Login
      </button>
    </header>
  )
}

function Logo() {
  return (
    <div className="w-full min-h-20 flex justify-center items-center">
      <a href="#" className="">
        <img
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
          alt="tailwindcss logo"
          width={50}
          height={50}
        />
      </a>
    </div>
  )
}
