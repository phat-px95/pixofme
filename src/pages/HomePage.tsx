import React, { useEffect } from 'react';
import Hero from '@components/Hero';
import { TECH_STACK_LANG } from '@constants/enConstants';
import { useMainPageLoaded } from '@hooks/useMainPageLoaded';
import { PROJECT_DATA } from '@constants/dataConstants';
import TechStackSection from '@components/TechStackSection';
import ProjectSection from '@components/ProjectSection';
import { TECH_STACK_DATA } from '@constants/dataConstants';
import WorkExperienceSection from '@components/WorkExperienceSection';

const HomePage = () => {
  const { setAppLoaded } = useMainPageLoaded();

  useEffect(() => {
    setAppLoaded(true);
  }, []);

  return (
    <main className='flex flex-col justify-center py-12 pt-24'>
      <Hero />
      
      <WorkExperienceSection />
      
      <TechStackSection
        title={TECH_STACK_LANG}
        data={TECH_STACK_DATA}
      />

      <ProjectSection
        sectionTitle={PROJECT_DATA.sectionTitle}
        data={PROJECT_DATA.data}
      />

    </main>
  );
};

export default HomePage;
