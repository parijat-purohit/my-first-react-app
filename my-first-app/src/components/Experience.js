import React, { useState } from 'react';
import '../styles/Experience.css';

const Experience = () => {
  const [activeCompany, setActiveCompany] = useState(null);

  const handleCompanyClick = (companyIndex) => {
    setActiveCompany(companyIndex === activeCompany ? null : companyIndex);
  };

  const experienceData = [
    {
      company: 'Farmers Edge Inc.',
      location: 'Remote - Winnipeg, MB, Canada',
      title: 'Senior Software Developer (Mar 2023 - May 2024)',
      description: [
        'Pioneered and standardized documentation for environment setup and docstring guidelines; overcame complex architectural challenges and drove cost-saving strategy implementation, enhancing business value',
        'Mentored interns and junior developers in problem-solving and leadership, tracking their progress with rigorous code reviews and scrutinizing product requirement implementations',
        'Led the design and implementation of APIs and automated cron jobs for a specialized lab testing project derived from a larger agricultural product, ensuring accurate and efficient generation of soil test results'
      ]
    },
    {
      company: 'Jonah Group Inc.',
      location: 'Remote - Toronto, ON, Canada',
      title: 'Intermediate Technical Developer (May 2022 - Feb 2023)',
      description: [
        'Developed a scalable backend with Docker and Django multitenancy, streamlining data management and reinforcing security with JWT tokens and permission controls',
        'Fabricated backend APIs for real-time messaging and video appointments, utilizing Websocket protocol and Redis, and integrated Twilio APIs for video communication and scheduling',
        'Innovated in the creation of the Equifax Identity Verification Microservice using Flask, and engineered a Plaid-integrated service for financial reporting and account management'
      ]
    },
    {
      company: 'Farmers Edge Inc.',
      location: 'Onsite - Lethbridge, AB, Canada',
      title: 'Software Developer (Jan 2018 - May 2022)',
      description: [
        "Spearheaded the deployment of RESTful APIs using Django for cutting-edge digital farming solutions, coordinating team efforts from design to launch",
        "Extracted and synthesized weather data using a Flask-based microservice from IBM Weather APIs, optimizing insurance claim processes through accurate geo-data integration",
        "Established a user-centric notification system using Celery and asynchronous programming for consistent delivery of timely alerts"
      ]
    },
    {
      company: 'University of Lethbridge',
      location: 'Lethbridge, AB, Canada',
      title: 'Graduate Teaching and Research Assistant (Sept 2015 - August 2017)',
      description: [
        "Successfully defended a Master's Thesis on 'Parameterized Query Complexity in Quantum Computation'",
        "Awarded the GSA (Graduate Students' Association) Volunteer Award for my involvement in voluntary work",
      ]
    },
    {
      company: 'Chittagong University of Engineering & Technology',
      location: 'Chittagong, Bangladesh',
      title: 'Undergraduate Student (2010 - 2014)',
      description: [
        "Secured the position of second-highest performer in my class with a cumulative grade point average of 3.90",
        "Contributed to OpenStreetMap updates, implemented a mobile app for spatial oriented messaging, and other projects"
      ]
    },
  ];

  return (
    <div className="experience">
      <div className="experience-container">
        <div className="company-list">
          <div className='exp-header'>Experience & Education</div>
          {experienceData.map((company, index) => (
            <div
              key={index}
              className={`company-item ${activeCompany === index ? 'active' : ''}`}
              onClick={() => handleCompanyClick(index)}
            >
              {company.company}
            </div>
          ))}
        </div>
        <div className="description-container">
          {activeCompany !== null && (
            <div className="description">
              <h2>{experienceData[activeCompany].title}</h2>
              <ul className="description-list">
            {experienceData[activeCompany].description.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Experience;