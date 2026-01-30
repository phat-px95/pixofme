import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <main className='flex-1 right-0 left-0 relative'>
      <Outlet />
    </main>
  );
};

export default MainLayout;
