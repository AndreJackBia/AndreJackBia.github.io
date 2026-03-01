import { resumeData } from "./data";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 font-sans p-6 md:p-16">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Header & Contact Section */}
        <header className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          
          {/* Top Row: Image + Identity */}
          <div className="flex flex-col md:flex-row items-center md:items-center gap-6 text-center md:text-left">
            {/* Profile Picture */}
            <div className="flex-shrink-0">
              <img 
                src="/profile.jpg" 
                alt={resumeData.personal.name} 
                className="w-32 h-32 md:w-36 md:h-36 rounded-full object-cover border-4 border-gray-50 shadow-sm"
              />
            </div>

            {/* Name, Role, and Contact */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
                {resumeData.personal.name}
              </h1>
              <h2 className="text-2xl text-blue-600 mt-2 font-medium">
                {resumeData.personal.role}
              </h2>
              
              {/* Contact Links Moved Under Role */}
              <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-sm text-gray-500 font-medium">
                <span className="flex items-center gap-1">📍 {resumeData.personal.location}</span>
                <a href={`mailto:${resumeData.personal.email}`} className="flex items-center gap-1 hover:text-blue-600 transition-colors">
                  ✉️ {resumeData.personal.email}
                </a>
                <a href={`tel:${resumeData.personal.phone.replace(/\s+/g, '')}`} className="flex items-center gap-1 hover:text-blue-600 transition-colors">
                  📱 {resumeData.personal.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Row: Bio */}
          <div className="mt-8 pt-6 border-t border-gray-100">
            <p className="text-gray-600 leading-relaxed text-lg">
              {resumeData.personal.bio}
            </p>
          </div>
          
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Main Content Column (Left Side - 2/3 width) */}
          <div className="md:col-span-2 space-y-12">
            
            {/* Experience Section */}
            <section>
              <h3 className="text-2xl font-bold mb-6 border-b border-gray-200 pb-2">Experience</h3>
              <div className="space-y-6">
                {resumeData.experience.map((job) => (
                  <div key={job.id} className="relative pl-4 border-l-2 border-blue-100 hover:border-blue-500 transition-colors">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-1">
                      <h4 className="text-lg font-bold text-gray-900">{job.position}</h4>
                      <span className="text-sm text-gray-500 font-mono mt-1 md:mt-0">{job.duration}</span>
                    </div>
                    <p className="text-blue-600 font-medium mb-3">{job.company}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{job.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Publications Section */}
            <section>
              <h3 className="text-2xl font-bold mb-6 border-b border-gray-200 pb-2">Publications</h3>
              <div className="space-y-4">
                {resumeData.publications.map((pub) => (
                  <div key={pub.id} className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
                    
                    {/* Top Row: Date Tag & Link Icon */}
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xs font-bold text-blue-600 tracking-wider uppercase">
                        Published • {pub.year}
                      </span>
                      
                      {/* External Link Moved to Top Right */}
                      {pub.link && (
                        <a 
                          href={pub.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          title="View Publication"
                          className="text-gray-400 hover:text-blue-600 transition-colors ml-4"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                          </svg>
                        </a>
                      )}
                    </div>

                    {/* Title and Authors */}
                    <h4 className="font-semibold text-gray-900 mb-2 pr-6">{pub.title}</h4>
                    <p className="text-sm text-gray-500">{pub.authors}</p>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Sidebar Column (Right Side - 1/3 width) */}
          <div className="space-y-12">
            
            {/* Skills Section */}
            <section>
              <h3 className="text-xl font-bold mb-6 border-b border-gray-200 pb-2">Core Skills</h3>
              <div className="flex flex-wrap gap-2">
                {resumeData.skills.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full border border-blue-100">
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            {/* Education Section */}
            <section>
              <h3 className="text-xl font-bold mb-6 border-b border-gray-200 pb-2">Education</h3>
              <div className="space-y-6">
                {resumeData.education.map((edu) => (
                  <div key={edu.id}>
                    <h4 className="font-bold text-gray-900">{edu.degree}</h4>
                    <p className="text-blue-600 text-sm mb-1">{edu.institution}</p>
                    <p className="text-xs text-gray-500 font-mono mb-2">{edu.duration}</p>
                    {edu.details && <p className="text-sm text-gray-600">{edu.details}</p>}
                  </div>
                ))}
              </div>
            </section>

            {/* Languages Section */}
            <section>
              <h3 className="text-xl font-bold mb-6 border-b border-gray-200 pb-2">Languages</h3>
              <ul className="space-y-3">
                {resumeData.languages.map((lang, index) => (
                  <li key={index} className="flex justify-between items-center border-b border-gray-50 pb-2 last:border-0">
                    <span className="font-medium text-gray-800">{lang.language}</span>
                    <span className="text-sm text-gray-500">{lang.proficiency}</span>
                  </li>
                ))}
              </ul>
            </section>

          </div>
        </div>
        
      </div>
    </main>
  );
}