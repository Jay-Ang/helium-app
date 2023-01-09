import React from 'react';
import { gql, useQuery } from '@apollo/client';
import CVS from '../../components/Dashboard/CVS';
import CM1 from '../../components/Dashboard/CM1';

export { Page };
export { documentProps };

const documentProps = {
  title: 'Dashboard',
  description: 'Dashboard page'
};

function Page({ currentUser }:any) {

  let { data } = useQuery(gql`
    query {
      CurrentUser {
        client {
          panorama
          name
          slug
        }
        activeLicense {
          id
          label
          name
          sku
        }
      }
    }
  `);

  const userClient = data?.CurrentUser?.client;
  const userLicense = data?.CurrentUser?.activeLicense;

  const dashboardContent = () => {
    switch (userLicense?.sku) {
      case 'cm':
        return <CVS/>
      case 'certified-marketer-standard-demo-sublicense':
      case 'certified-marketer-standard-sublicense':
      case 'mori-building-da1-assessment':
      case 'loreal-cm1-2022':
        return <CM1/>
      default:
        return <></>;
    }
  }

  return (
    <>

      <h1 className="text-4xl font-bold">User Profile</h1>
      <table className='border-collapse border border-slate-500'>
        <tbody>
          <tr>
            <td className='border border-slate-500 p-1'>ID</td>
            <td className='border border-slate-500 p-1'>{currentUser.id}</td>
          </tr>
          <tr>
            <td className='border border-slate-500 p-1'>Email</td>
            <td className='border border-slate-500 p-1'>{currentUser.email}</td>
          </tr>
          <tr>
            <td className='border border-slate-500 p-1'>First Name</td>
            <td className='border border-slate-500 p-1'>{currentUser.firstName}</td>
          </tr>
          <tr>
            <td className='border border-slate-500 p-1'>Last Name</td>
            <td className='border border-slate-500 p-1'>{currentUser.lastName}</td>
          </tr>
          <tr>
            <td className='border border-slate-500 p-1'>Role</td>
            <td className='border border-slate-500 p-1'>{currentUser.roleKey}</td>
          </tr>
          <tr>
            <td className='border border-slate-500 p-1'>Panorama Slug</td>
            <td className='border border-slate-500 p-1'>{userClient?.slug}</td>
          </tr>
          <tr>
            <td className='border border-slate-500 p-1'>Sublicense SKU</td>
            <td className='border border-slate-500 p-1'>{userLicense?.sku}</td>
          </tr>
        </tbody>
      </table>
      {userLicense && dashboardContent()}
    </>
  );
}
