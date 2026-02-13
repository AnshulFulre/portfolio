function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "JavaScript", "HTML", "CSS"],
    },
    {
      title: "Frontend Frameworks",
      skills: ["React", "Tailwind CSS", "Bootstrap"],
    },
    {
      title: "Backend Frameworks",
      skills: ["Spring", "Spring Boot"],
    },
    {
      title: "Databases",
      skills: ["MongoDB", "MySQL"],
    },
    {
      title: "Developer Tools & Platforms",
      skills: ["IntelliJ IDEA", "Git", "GitHub", "Postman"],
    },
  ];

  return (
    <section className="bg-slate-950 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 border-l-4 border-blue-500 pl-4">
          Technical Skills
        </h2>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-8">

          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-900 p-6 rounded-xl shadow-md hover:shadow-blue-500/20 transition duration-300"
            >
              <h3 className="text-lg font-semibold mb-4 text-blue-400">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-sm text-slate-300 hover:bg-blue-600 hover:text-white transition duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;
