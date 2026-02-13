function About(){
  return(
    <>
    <section className="bg-slate-950 text-white py-20 px-6">

    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 border-l-4 border-blue-500 pl-4">
        About
      </h2>
      <div className="bg-slate-900 p-8 rounded-xl shadow-lg shadow-blue-900/10">

      <p className="text-lg text-slate-300 leading-relaxed">
        Highly motivated Computer Science student with a <span>8.01 GPA</span> and hands-on experience in <span>full-stack development</span>.</p>
        <p className="mt-4 text-lg text-slate-300 leading-relaxed">
            Skilled in building scalable web applications using 
            <span className="text-blue-400 font-semibold"> React</span>, 
            <span className="text-blue-400 font-semibold"> Spring Boot</span>, and 
            <span className="text-blue-400 font-semibold"> MongoDB</span>.
          </p>

          <p className="mt-4 text-lg text-slate-300 leading-relaxed">
            Strong foundation in data structures, REST APIs, and backend architecture. 
            Passionate about writing clean, maintainable code and solving real-world problems.
          </p>
      </div>
    </div>
    </section>
    </>
  )
}

export default About;