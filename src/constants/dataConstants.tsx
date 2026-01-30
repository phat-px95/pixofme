import { ProjectSectionProps } from '@components/ProjectSection';
import imageEditorProject from '@assets/images/image-editor-project.jpg';
import stockSimpleProject from '@assets/images/stock-simple.jpg';

import {
  BUCKZY_LOGO_IMAGE,
  COC_COC_LOGO_IMAGE,
  SVMC_LOGO_IMAGE,
  VEEM_LOGO_IMAGE,
} from './imageConstants';

export const TECH_STACK_DATA = [
  {
    name: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg',
  },
  {
    name: 'Angular',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original-wordmark.svg',
  },
  {
    name: 'TypeScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg',
  },
  {
    name: 'Node.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg',
  },
  {
    name: 'Java',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg',
  },
  {
    name: 'AWS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
  },
  {
    name: 'GCP',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg',
  },
  {
    name: 'MySQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg',
  },
  {
    name: 'MongoDB',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain-wordmark.svg',
  },
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
  sectionTitle: 'Recent Projects',
  data: [
    {
      thumbnailImage: imageEditorProject,
      cardTitle: 'Simple Image Editor',
      cardDescription:
        'A free and simple tool that actually works - made with Vanilla JS and canvas API',
      cardExtraInfo: [
        {
          label: 'Demo',
          url: 'https://phat-px95.github.io/sieditor/',
        },
        {
          label: 'Source',
          url: 'https://github.com/phat-px95/sieditor',
        },
      ],
    },
    {
      thumbnailImage: stockSimpleProject,
      cardTitle: 'Stock Simple',
      cardDescription:
        'Simplify the complexity of stock metrics and make comparisons easier.',
      cardExtraInfo: [
        {
          label: 'Demo',
          url: '',
        },
        {
          label: 'Source',
          url: '',
        },
      ],
      actionDisabled: true,
    },
  ],
};
