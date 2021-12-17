import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom'
import Header from '../../Common/Wedgets/header';
import Badcrumble from '../../Common/Elements/badcrumble';
import Sidemenu from '../../Common/Wedgets/sidemenu';

export default function DashMainPage(props) {
  const location = useLocation();

  useEffect(() => {
    // console.log("state", location?.state);
    // console.log("props", props);
    // props?.fetchData({ page:2 });
  }, [])

  return (
    <>
      <div className="min-h-full text-sm">
        {/* Header */}
        <Header />
        <div className="flex overflow-auto" style={{ height: '92vh' }}>
          <Sidemenu />
          <div className='flex-auto bg-indigo-300 relative overflow-y-auto'>
            <Badcrumble />
            <Outlet />
          </div>
        </div>
      </div>
    </>);
}