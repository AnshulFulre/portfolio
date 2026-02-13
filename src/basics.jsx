import dp from"./assets/Me.jpeg";

function Basics(){
    return(
        <>
            <section className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-4">
                <div className="w-full max-w-4xl text-center">
                    <div className="mb-6 flex justify-center">
                        <img src={dp} alt="DP" className="w-40 h-40 rounded-full border-4 border-blue-500 shadow-lg object-cover"
          />
                    </div>
                    <div>
                        <div className="space-y-3">
                            <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text">Anshul Fulre</h1>
                            <h6 className="text-lg sm:text-xl text-slate-300 font-medium">Full Stack Developer | Computer Science Student</h6>
                            <address className="not-italic text-slate-400 text-sm">"Bhopal, IN."</address>
                        </div>
                        <div className="mt-8">
                            <a href="https://leetcode.com/u/anshul_737/" target="_blank"><div><button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 transition duration-300 rounded-lg font-semibold shadow-md hover:shadow-blue-500/50">Leetcode</button></div></a></div>
                        <div className="mt-6 flex justify-center gap-6">
                            <a href="https://www.linkedin.com/in/anshul-fulre/" target="_blank"><button className="p-3 bg-slate-800 rounded-full hover:bg-blue-600 transition duration-300 shadow-md"><svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="currentColor"
  className="w-6 h-6"
>
  <path d="M20.447 20.452H16.89v-5.569c0-1.328-.027-3.037-1.851-3.037-1.853 0-2.136 1.445-2.136 2.941v5.665H9.347V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.368-1.85 3.6 0 4.268 2.369 4.268 5.455v6.286zM5.337 7.433a1.98 1.98 0 110-3.96 1.98 1.98 0 010 3.96zM6.978 20.452H3.693V9h3.285v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.728v20.543C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.728C24 .774 23.2 0 22.222 0z" />
</svg>
</button></a>
                            
                            <a href="https://github.com/AnshulFulre" target="_blank"><button className="p-3 bg-slate-800 rounded-full hover:bg-white hover:text-black transition duration-300 shadow-md"><svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="currentColor"
  className="w-6 h-6"
>
  <path d="M12 .297a12 12 0 00-3.794 23.403c.6.113.82-.258.82-.577v-2.04c-3.338.726-4.033-1.61-4.033-1.61-.546-1.386-1.333-1.756-1.333-1.756-1.089-.744.084-.729.084-.729 1.205.084 1.84 1.238 1.84 1.238 1.07 1.835 2.807 1.305 3.492.998.108-.776.418-1.305.762-1.605-2.665-.303-5.467-1.333-5.467-5.93 0-1.31.469-2.382 1.236-3.222-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 016.002 0c2.291-1.552 3.297-1.23 3.297-1.23.655 1.653.243 2.873.119 3.176.77.84 1.235 1.912 1.235 3.222 0 4.609-2.807 5.625-5.479 5.921.43.37.823 1.102.823 2.222v3.293c0 .322.216.694.825.576A12.002 12.002 0 0012 .297z" />
</svg>
</button></a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Basics;