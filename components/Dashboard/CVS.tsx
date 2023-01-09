import React from 'react';
import LearnerAccess from '../../components/LearnerAccess/LearnerAccess'

const CVS = ({ currentUser }:any) => {
  const cvsContent = [
    {
      title: 'FOUNDATIONAL PREP',
      query: 'tags:"cm premium level setting"'
    },
    {
      title: 'DATA LITERACY',
      query: 'tags:"cm premium level 1 data literacy"'
    },
    {
      title: 'CUSTOMER INSIGHTS',
      query: 'tags:"cm premium level 1 customer insights"'
    },
    {
      title: 'CREATIVE DEVELOPMENT',
      query: 'tags:"cm premium level 1 creative development"'
    },
    {
      title: 'MARKETING CHANNELS',
      query: 'tags:"cm premium level 1 marketing channels"'
    },
    {
      title: 'MEASUREMENT AND ANALYTICS',
      query: 'tags:"cm premium level 1 measurement and analytics"'
    }
  ]

  return (
    <>
      <h1>This is CVS Dashboard</h1>
      {
        cvsContent.map((item, index) => {
          return <LearnerAccess key={index} currentUser={currentUser} query={item.query} title={item.title}/>
        })
      }
    </>
  );
};

export default CVS;
