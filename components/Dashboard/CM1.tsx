import React from 'react';
import LearnerAccess from '../../components/LearnerAccess/LearnerAccess'

const CM1 = ({ currentUser }:any) => {
  const cm1Content = [
    {
      title: 'Loreal',
      query: '*'
    }
  ]

  return (
    <>
      <h1>This is CM1 Dashboard</h1>
      {
        cm1Content.map((item, index) => {
          return <LearnerAccess key={index} currentUser={currentUser} query={item.query} title={item.title}/>
        })
      }
    </>
  );
};

export default CM1;
