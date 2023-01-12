import React from 'react';
import { usePageContext } from "../../renderer/usePageContext";
import { gql, useQuery } from '@apollo/client';

export { Page };
export { documentProps };

const documentProps = {
  title: 'Course',
  description: 'Course page'
};

function Page() {
  const pageContext = usePageContext();
  const { courseId } = pageContext.routeParams

  let { data, loading, error } = useQuery(gql`
    query($id: ID!) {
      CourseById(id: $id) {
        courseGroup {
          courses {
            id
            slug
            sku
            title
          }
          contentType {
            label
          }
        }
      }
    }
    `, { variables: { id: courseId }});

  const courseGroup = data?.CourseById?.courseGroup;

  return (
    <>
      <h1>This is Course page</h1>
      <table className='border-collapse border border-slate-500'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Slug</th>
            <th>SKU</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {
            courseGroup?.courses.map((course: any) => {
              return (
                <tr key={course.id}>
                  <td className='border border-slate-500 p-1'>{course.id}</td>
                  <td className='border border-slate-500 p-1'>{course.slug}</td>
                  <td className='border border-slate-500 p-1'>{course.sku}</td>
                  <td className='border border-slate-500 p-1'>{course.title}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </>
  )
}