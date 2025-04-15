import React from 'react'
import Navbar from './Navbar'
import { Briefcase, GraduationCap } from 'lucide-react';
 import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
 import 'react-vertical-timeline-component/style.min.css';
// import { timeline } from './data';


const timeline = [
  {
    type: 'work',
    title: 'Frontend Developer',
    subtitle: 'Freelance',
    date: '2023 - Present',
    desc: 'Designed and developed responsive websites and web applications using React, Vite, and Tailwind CSS. Focused on providing user-friendly, accessible UI and optimizing performance for various platforms.',
    icon: <Briefcase />,
  },
  {
    type: 'work',
    title: 'Frontend Developer traniee',
    subtitle: 'Tech Bridge',
    date: '2024 - Present',
    desc: '',
    icon: <Briefcase />,
  },
  {
    type: 'work',
    title: 'Mobile App Developer',
    subtitle: 'Freelance',
    date: '2023 - Present',
    desc: 'Built cross-platform mobile apps using kotlin and Cordova. Focused on delivering high-quality user experiences, implementing custom animations, and integrating APIs for real-time data.',
    icon: <Briefcase />,
  },
  {
    type: 'education',
    title: 'BSc in Computer Science',
    subtitle: 'National Open University Of Nigeria',
    date: '2023 - present',
    desc: ' focus on software engineering, UI/UX design, mobile app development, and machine learning.',
    icon: <GraduationCap />,
  },
  {
    type: 'work',
    title: 'Software Development Traniee',
    subtitle: 'INITS',
    date: '2024',
    desc: 'Gained hands-on experience in Kotlin, and API integration',
    icon: <Briefcase />,
  },
  {
    type: 'work',
    title: 'Mobile App Dev (Intern)',
    subtitle: 'Bimcom',
    date: '2024',
    desc: '',
    icon: <Briefcase />,
  },
];

const Resume = () => {
  return (
    <div className="md:rounded-xl bg-orange-600 md:m-7 flex-1 p-7">
      <Navbar />
      <div className="mt-7">
        <h1 className="text-white font-bold text-3xl mb-2">Resume</h1>
        <hr className="border-3 text-yellow-500 w-12 rounded-4xl mb-7" />
        <VerticalTimeline>
          {timeline.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              date={item.date}
              iconStyle={{
                background: item.type === 'work' ? '#4f46e5' : '#10b981',
                color: 'orange',
              }}
              icon={item.icon}
              contentStyle={{ background: 'orange', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid #1f2937' }}
            >
              <h3 className="vertical-timeline-element-title text-xl font-semibold">{item.title}</h3>
              <h4 className="vertical-timeline-element-subtitle text-sm text-white-300">{item.subtitle}</h4>
              <p className="text-sm mt-3">{item.desc}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Resume;