import { ProjectSectionProps } from '@components/ProjectSection';

import {
	BUCKZY_LOGO_IMAGE,
	COC_COC_LOGO_IMAGE,
	SVMC_LOGO_IMAGE,
	VEEM_LOGO_IMAGE,
} from './imageConstants';

export const TECH_STACK_DATA = [
  { name: 'HTML', icon: '🌐' },
  { name: 'CSS', icon: '🎨' },
  { name: 'JavaScript', icon: '⚡' },
  { name: 'Angular', icon: 'Ⓐ' },
  { name: 'React', icon: '⚛️' },
  { name: 'TypeScript', icon: '📘' },
  { name: 'Tailwind', icon: '🎨' },
  { name: 'Node.js', icon: '🟢' },
  //   { name: 'Python', icon: '🐍' },
  { name: 'AWS', icon: '☁️' },
  { name: 'Docker', icon: '🐳' },
  { name: 'Git', icon: '📦' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'MongoDB', icon: '🍃' },
  //   { name: 'Redis', icon: '🔴' },
  //   { name: 'GraphQL', icon: '◆' },
  { name: 'REST API', icon: '🔗' },
  { name: 'Jest', icon: '🃏' },
  { name: 'Webpack', icon: '📦' },
];

export const EXPERIENCE_DATA = [
	{
	  year: 2024,
	  period: '2024 - Current',
	  companyName: 'Veem Inc.',
	  companyTitle: 'Veem Inc. - Payment processing platform',
	  companyLogo: VEEM_LOGO_IMAGE,
	  role: 'Software Developer',
	  current: true,
	  type: 'payment',
	  description: 'Shaping an exciting future for Fintech.',
	  achievements: [
		'Improved customer trust and transaction efficiency by strengthening core features on a system processing millions of transactions daily.',
		'Reduced cross-team bottlenecks by building intuitive internal tools that streamlined workflows and cut manual effort.',
		'Strengthened team capability by mentoring developers and leading Agile practices, raising overall delivery speed and cohesion.',
	  ],
	},
	{
	  year: 2022,
	  period: '2022 - 2024',
	  companyName: 'Buckzy Payment Inc',
	  companyTitle: 'Buckzy Payment Inc. - Payment processing platform',
	  companyLogo: BUCKZY_LOGO_IMAGE,
	  companyIcon: '',
	  role: 'Software Developer',
	  current: false,
	  description: 'Building a money transfer machine.',
	  achievements: [
		'Leading integration of new customer-facing platforms that enhanced UX and directly improved transaction success rates and customer satisfaction metrics.',
		'Elevated code quality and reliability by introducing Test-Driven Development (TDD) in Angular and Spring Boot, enabling frequent, stable releases for a global payments platform.',
	  ],
	},
	{
	  year: 2019,
	  period: '2029 - 2022',
	  companyName: 'Coc Coc Company Limited',
	  companyTitle: 'Coc Coc Company Limited - Web Browser and Search Engine',
	  companyLogo: COC_COC_LOGO_IMAGE,
	  role: 'Tech Lead',
	  current: false,
	  description: 'Searching a better furture for humanity >>>',
	  achievements: [
		'Directed the development of critical browser extensions, including Savior (used by millions daily for video/audio downloads) and Coc Coc Adblock (protecting 2M+ daily users\' privacy and enhancing Browse speed).',
		'Collaborated with cross-functional teams to improve Search Engine Results Pages (SERP), significantly enhancing the user experience for over 2 million daily active users.',
		'Responsible for training junior developers, cultivating strong team and cross-team dynamics, and ensuring the delivery of high-performance code to advance company products.',
	  ],
	},
	{
	  year: 2018,
	  period: '2018 - 2019',
	  companyName: 'Samsung Vietnam Mobile R&D Center',
	  companyTitle:
		'Samsung Vietnam Mobile R&D Center - Mobile software research and development',
	  companyLogo: SVMC_LOGO_IMAGE,
	  role: 'Software Developer',
	  current: false,
	  description: 'Joinning a Uptopia...',
	  achievements: [
		'Designed strategies and developed internal web projects, building user-centric web pages based on detailed software requirements specifications to meet diverse user needs.',
	  ],
	},
  ];

  export const PROJECT_DATA: ProjectSectionProps = {
  sectionTitle: 'My Recent Projects',
  data: [
    {
      thumbnailImage: '',
      cardTitle: 'My Recent Projects',
      cardDescription:
        ' A full-stack e-commerce solution with real-time inventory management and secure payment processing.',
      cardExtraInfo: [
        {
          label: 'Demo',
          url: 'https://phat-px95.github.io/pixofme/',
        },
        {
          label: 'Source',
          url: 'https://github.com/phat-px95/pixofme',
        },
      ],
    },
    {
      thumbnailImage: '',
      cardTitle: 'My Recent Projects',
      cardDescription:
        ' A full-stack e-commerce solution with real-time inventory management and secure payment processing.',
      cardExtraInfo: [
        {
          label: 'Demo',
          url: 'https://phat-px95.github.io/pixofme/',
        },
        {
          label: 'Source',
          url: 'https://github.com/phat-px95/pixofme',
        },
      ],
    },
  ],
};