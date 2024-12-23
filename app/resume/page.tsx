export default function Resume() {
  return (
    <>
      <section className='py-16 bg-gray-100'>
        <div className='container mx-auto px-6'>
          <h1 className='text-4xl font-bold text-gray-800 mb-6 text-center'>
            Resume
          </h1>

          {/* Summary */}
          <section className='mb-12'>
            <h2 className='text-2xl font-semibold text-gray-700 mb-4'>
              Summary
            </h2>
            <p className='text-gray-600'>
              Dynamic and experienced IT professional with 3+ years of expertise
              in web development, consultancy, and IT solutions. Proficient in
              creating SEO-friendly, high-performance websites using modern
              frameworks like Next.js, Tailwind CSS, and Sass. Skilled in
              delivering customized, scalable, and user-focused solutions while
              adhering to industry standards.
            </p>
          </section>

          {/* Skills */}
          <section className='mb-12'>
            <h2 className='text-2xl font-semibold text-gray-700 mb-4'>
              Skills
            </h2>
            <ul className='list-disc pl-5 text-gray-600 space-y-2'>
              <li>
                <strong>Frontend Development:</strong> React.js, Next.js, HTML5,
                CSS3, Tailwind CSS, Sass
              </li>
              <li>
                <strong>Backend Development:</strong> Node.js, Express.js
              </li>
              <li>
                <strong>DevOps:</strong> Docker, Git, CI/CD
              </li>
              <li>
                <strong>Database Management:</strong> MongoDB, MySQL
              </li>
              <li>
                <strong>Other Tools:</strong> Framer Motion, Redux, RESTful APIs
              </li>
              <li>
                <strong>Soft Skills:</strong> Problem-solving, communication,
                client collaboration
              </li>
            </ul>
          </section>

          {/* Experience */}
          <section className='mb-12'>
            <h2 className='text-2xl font-semibold text-gray-700 mb-4'>
              Experience
            </h2>
            <div className='space-y-6'>
              <div>
                <h3 className='text-xl font-bold text-gray-800'>
                  Freelance IT Consultant
                </h3>
                <p className='text-sm text-gray-500'>(2021 – Present)</p>
                <ul className='list-disc pl-5 text-gray-600 space-y-2'>
                  <li>
                    Delivered consultancy services to streamline client
                    workflows and improve IT infrastructure.
                  </li>
                  <li>
                    Designed and developed SEO-optimized websites for startups
                    and small businesses.
                  </li>
                  <li>
                    Integrated third-party services for enhanced functionality,
                    such as booking systems and email automation.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className='text-xl font-bold text-gray-800'>
                  Frontend Developer
                </h3>
                <p className='text-sm text-gray-500'>(2019 – 2021)</p>
                <ul className='list-disc pl-5 text-gray-600 space-y-2'>
                  <li>
                    Collaborated with cross-functional teams to build and
                    maintain responsive websites.
                  </li>
                  <li>
                    Utilized modern JavaScript frameworks like React.js and
                    Next.js to create high-performance web applications.
                  </li>
                  <li>
                    Improved site accessibility and performance metrics,
                    achieving scores above 90 on Google Lighthouse.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className='mb-12'>
            <h2 className='text-2xl font-semibold text-gray-700 mb-4'>
              Education
            </h2>
            <p className='text-gray-600'>
              <strong>Bachelor of Technology in Computer Science</strong> <br />
              (Graduated: YYYY) <br />
              XYZ University, [Your Location]
            </p>
          </section>

          {/* Certifications */}
          <section className='mb-12'>
            <h2 className='text-2xl font-semibold text-gray-700 mb-4'>
              Certifications
            </h2>
            <ul className='list-disc pl-5 text-gray-600 space-y-2'>
              <li>JavaScript Algorithms and Data Structures (freeCodeCamp)</li>
              <li>React Developer Certification ([Platform Name])</li>
              <li>SEO Foundations ([Platform Name])</li>
            </ul>
          </section>

          {/* Projects */}
          <section className='mb-12'>
            <h2 className='text-2xl font-semibold text-gray-700 mb-4'>
              Projects
            </h2>
            <ul className='list-disc pl-5 text-gray-600 space-y-2'>
              <li>
                <strong>Consultancy Service Website:</strong> Built a fully
                customized platform using Next.js, showcasing consultancy
                offerings, portfolio, and booking capabilities. Optimized for
                search engines and mobile responsiveness.
              </li>
              <li>
                <strong>Portfolio Website:</strong> Designed a personal
                portfolio website featuring dynamic sections for resume,
                projects, and contact. Implemented modern animations using
                Framer Motion and Tailwind CSS.
              </li>
              <li>
                <strong>E-commerce Platform:</strong> Developed a scalable
                e-commerce website with a secure payment gateway and an
                intuitive user interface.
              </li>
            </ul>
          </section>

          {/* Contact */}
          <section>
            <h2 className='text-2xl font-semibold text-gray-700 mb-4'>
              Contact
            </h2>
            <ul className='text-gray-600'>
              <li>
                <strong>Email:</strong> [Your Email]
              </li>
              <li>
                <strong>LinkedIn:</strong> [Your LinkedIn URL]
              </li>
              <li>
                <strong>GitHub:</strong> [Your GitHub URL]
              </li>
            </ul>
          </section>
        </div>
      </section>
    </>
  );
}
