import React from 'react'

function MyCvWeb() {
  return (
    <>
      <header>
        <picture>
          <img src="../assets/profile.jpg" alt="This is the profile photo of the cv" />
        </picture>
      </header>

      <main>
        <h1 className="text-3xl font-bold underline m-6">
          Hello world!
        </h1>
        <div className="m-4 text-red-500">Red</div>
      </main>

    {/* <footer>

    </footer> */}
    </>
  )
}

export default MyCvWeb