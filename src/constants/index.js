import {
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    python,
    cpp,
    sql,
    nextjs,
    bootstrap,
    excel,
    vscode,
    dsa,
    oops,

    linkdin,
    gmail,

    youtube,
    weather,
    newsapp
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "skills",
      title: "Skills",
    },
    {
      id: "projects",
      title: "projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  
  const technologies = [
    {
      name: "Python",
      icon: python,
    },
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "SQL",
      icon: sql,
    },
    {
      name: "NextJS",
      icon: nextjs,
    },
    {
      name: "Bootstrap",
      icon: bootstrap,
    },
    {
      name: "MS Excel",
      icon: excel,
    },
    {
      name: "VS Code",
      icon: vscode,
    },
    {
      name: "DSA",
      icon: dsa,
    },
    {
      name: "OOPS Concept",
      icon: oops,
    },
  ];
  
  const experiences = [
    {
      title: "Jabalpur Engineering College",
      company_name: "Bachelor of Technology",
      iconBg: "#383E56",
      date: "2020-present",
      points: [
        "B.tech in Electrical Engineering",
        "CGPA : 7.8",
      ],
    },
    {
      title: "little Kingdom SR. SEC. School",
      company_name: "12th Marks",
      iconBg: "#E6DEDD",
      date: "2018-2019",
      points: [
        "12th Percentage : 83.2% ."
      ],
    },
    {
      title: "little Kingdom SR. SEC. School",
      company_name: "10th Marks",
      iconBg: "#383E56",
      date: "2016-2017",
      points: [
        "10th CGPA : 9 (out of 10).",
      ],
    },
  ];
  
 
  const projects = [
    {
      name: "Youtube Clone",
      description:
        "Fully responsive youtube web application.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
      ],
      image: youtube,
      source_code_link: "https://shishir50.github.io/YoutubeClone/",
    },
    {
      name: "Weather Site",
      description:
        "Web application that helps to check the climate conditions of any city in the world.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
        {
          name: "RapidAPI",
          color: "blue-text-gradient",
        },
      ],
      image: weather,
      source_code_link: "https://shishir50.github.io/WeatherApp/",
    },
    {
      name: "NewsDaily",
      description:
        "web application which shows all the latest news category wise and also with source of news.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "ReactJS",
          color: "pink-text-gradient",
        },
        {
          name: "NewsAPI",
          color: "blue-text-gradient",
        },
      ],
      image: newsapp,
      source_code_link: "https://github.com/Shishir50/NewsDaily",
    },
  ];

 const contact = [
  {
    link: 'https://www.linkedin.com/in/shishir-thakur-359289217/',
    name: 'Visit',
    icon: linkdin
  },
  {
    link: 'gmail',
    name: 'shishirthakur050@gmail.com',
    icon: gmail
  }
]  
  
  export { technologies, experiences, projects , contact};