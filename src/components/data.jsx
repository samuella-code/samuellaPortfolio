import React from 'react'

import { MdOutlineWeb } from "react-icons/md";
import { FaLaptopCode, FaMobileAlt, FaCamera   } from "react-icons/fa";
import testimonial1 from "../assets/girl.png"
import testimonial2 from "../assets/boy.png"
import Digital from "../assets/Digital.png"
import Clothify from "../assets/screenshot 2025-05-27 224312.png"
import SweetManns from "../assets/Screenshot 2025-05-27 221826.png"



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBriefcase,
  faSchool,
  faStar,
} from '@fortawesome/free-solid-svg-icons';

const workIcon = {
  icon: <FontAwesomeIcon icon={faBriefcase} />,
  iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
};
const schoolIcon = {
  icon: <FontAwesomeIcon icon={faSchool} />,
  iconStyle: { background: 'rgb(233, 30, 99)', color: '#fff' },
};
const starIcon = {
  icon: <FontAwesomeIcon icon={faStar} />,
  iconStyle: { background: 'rgb(16, 204, 82)', color: '#fff' },
};

export const service = [
    {
        title:"Web Design",
        desc:"The most modern and high-quality design made at a professional level.",
        logo: <MdOutlineWeb/>
    },
    {
        title:"Web Development",
        desc:"The most modern and high-quality design made at a professional level.",
        logo: <FaLaptopCode/>
    },
    {
        title:"Mobile Apps",
        desc:"The most modern and high-quality design made at a professional level.",
        logo: <FaMobileAlt/>
    },
    {
        title:"Modelling",
        desc:"The most modern and high-quality design made at a professional level.",
        logo: <FaCamera/>
    },
]

export const testimonials = [
    {
        name:"Tola A.",
        para: "Working with Samuella was a dream! She turned my rough idea into a fully functional app with an elegant, intuitive design. Her attention to detail and creative eye truly sets her apart.",
        img: testimonial1
    },
    {
        name:"Chidi E.",
        para:"Samuella brings a unique blend of technical skill and style. As a model and a developer, her work is always polished, modern, and on-brand. She’s a true creative force.",
        img: testimonial2
    },
   
]

export const timeline = [
    {
      icon: workIcon,
      date: '2011 - present',
      title: 'Creative Director',
      subtitle: 'Miami, FL',
      desc: 'Creative Direction, User Experience, Visual Design, Project Management, Team Leading',
    },
    {
      icon: workIcon,
      date: '2010 - 2011',
      title: 'Art Director',
      subtitle: 'San Francisco, CA',
      desc: 'Creative Direction, User Experience, Visual Design, SEO, Online Marketing',
    },
    {
      icon: workIcon,
      date: '2008 - 2010',
      title: 'Web Designer',
      subtitle: 'Los Angeles, CA',
      desc: 'User Experience, Visual Design',
    },
    {
      icon: workIcon,
      date: '2021 - 2023',
      title: 'Customer Support Executive',
      subtitle: 'Lyfesolve Marketing Service',
      desc: 'User Experience, Visual Design',
    },
    {
      icon: schoolIcon,
      date: '2018-2021',
      title: 'Bachelor of Science (BSC)',
      subtitle: 'Bangabasi Morning College',
      desc: 'Strategy, Social Media',
    },
    {
      icon: schoolIcon,
      date: '2016-2018',
      title: 'Higher Secondary (HS)',
      subtitle: 'Adarsh Madhyamik Vidhyalaya',
      desc: 'Creative Direction, User Experience, Visual Design',
    },
    {
      icon: schoolIcon,
      date: '2016',
      title: 'Madhyamik (10th)',
      subtitle: 'A.R.N.C Vidhyalaya',
      desc: 'Creative Direction, Visual Design',
    },
    { icon: starIcon },
  ];

export const projects = [
    {
      title: "Jewerly E-commerce Website",
      description:
        "✨ Welcome to Grandeur Sparkle ✨ Where timeless elegance meets modern design. Each piece in our collection is thoughtfully handcrafted to highlight your inner sparkle. From dainty everyday pieces to bold statement gems, we create jewelry that celebrates confidence, beauty, and individuality. Let your shine speak for itself.",
      techStack: ["Next.js", "React", "node.js", "Tailwind"],
      link: "https://gs-code.netlify.app/",
      github: 'https://grandeur-sparkle-code.netlify.app/',
      image: Digital, // Replace with your project screenshot
    },
    {
      title: "SweetManns Clothing Brand",
      description:
        "SweetManns Clothing Brand is a celebration of individuality and timeless fashion. Aim is to craft high-quality, stylish, and comfortable clothing that empowers people to express their unique personalities. From casual wear to bold statement pieces, SweetManns combines modern trends with classic designs to create a versatile wardrobe for every occasion. With a commitment to sustainability and innovation, we ensure that every piece is crafted with care, using premium materials and ethical practices. Step into the world of SweetManns and redefine your style with confidence and elegance.",
      techStack: ["React", "Node.js", "MongoDB", "shadcn UI"],
      link: "https://sweetmanns.vercel.app/",
      github: 'https://github.com/samuella-code/sweetManns-clothing-brand',
      image: SweetManns, // Replace with your project screenshot
    },
    {
      title: "Fitness Website",
      description:
        "Welcome to FitLife, your ultimate destination for all things fitness! Whether you're a seasoned athlete or just starting your fitness journey, FitLife is here to inspire, motivate, and guide you every step of the way. Our platform offers a wide range of resources, including workout plans, nutrition tips, and expert advice to help you achieve your health and wellness goals. Join our community of fitness enthusiasts and discover the power of a healthy lifestyle with FitLife.",
      techStack: ["Next.js", "React", "Tailwind CSS", "Node.js"],
      link: "https://clothify-two.vercel.app/",
      github: 'https://github.com/rohitsingh93300/',
      image: Clothify, // Replace with your project screenshot
    },
  ];