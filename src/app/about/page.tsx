import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center justify-center">
      
      <h1 className="text-4xl font-bold mb-6">About Me</h1>
      
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 max-w-5xl">
        
      
        <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg">
          <img
            src="/ehsanimg.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

      
        <div className="flex flex-col gap-4 text-gray-700">
          <p>
            Hi! Im a web developer with experience in building modern and high-quality web applications.
            I love creating engaging user experiences and simple, practical user interfaces.
          </p>
          <p>
            My goal is to develop projects using the best standards and latest technologies,
            delivering a valuable experience for users.
          </p>
          <p>
            I specialize in <span className="font-semibold text-blue-600">Next.js, TypeScript, and Tailwind CSS</span>,
            and I enjoy solving challenging problems with clean and efficient code.
          </p>
        </div>
      </div>

    
      <div className="mt-12 w-full max-w-4xl flex flex-wrap gap-4 justify-center">
        <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">Web Development</span>
        <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full">UI/UX Design</span>
        <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full">Performance & SEO</span>
        <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full">Problem Solving</span>
      </div>

    </div>
  );
}
