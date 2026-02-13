function Education() {
  return (
    <section className="bg-slate-950 text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 border-l-4 border-blue-500 pl-4">
          Education
        </h2>

        {/* Education Card */}
        <div className="bg-slate-900 p-8 rounded-xl shadow-lg shadow-blue-900/10 hover:shadow-blue-500/20 transition duration-300">

          {/* Top Row */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">

            <div>
              <h3 className="text-xl font-semibold text-white">
                Lakshmi Narain College of Technology
              </h3>
              <p className="text-slate-400 text-sm mt-1">
                Bhopal, Madhya Pradesh, India
              </p>
            </div>

            <div className="mt-3 sm:mt-0 text-slate-400 text-sm">
              <time>Aug 2023</time> → <time>Jul 2027</time>
            </div>

          </div>

          {/* Degree Info */}
          <div className="mt-6">
            <p className="text-lg font-medium">
              Bachelor of Technology
            </p>
            <p className="text-blue-400 font-semibold">
              Computer Science and Engineering
            </p>
            <p className="text-slate-400 text-sm mt-1">
              Grade: 8.01/10 (Cumulative GPA upto 4th semester)
            </p>
          </div>

          {/* Courses */}
          <div className="mt-6">
            <h4 className="font-semibold mb-3 text-white">
              Relevant Coursework
            </h4>

            <div className="flex flex-wrap gap-3">
              {[
                "Data Structures",
                "Algorithms",
                "Object Oriented Programming",
                "Database Management Systems",
                "Communication Skills"
              ].map((course, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm border border-slate-700"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Education;
