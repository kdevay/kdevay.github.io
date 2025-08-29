import React from 'react';
// components
import JobHeader from './JobHeader';
import JobList from './JobList';
import whereWeGoList from '../../Data/whereWeGoList';
import budgetSimpleList from '../../Data/budgetSimpleList';

export default function Resume() {
  const skills = [
    'JavaScript',
    'C',
    'Python',
    'TypeScript',
    'React',
    'Mongoose',
    'SQL',
    'HTML',
    'Jest',
    'Payload',
    'NextJs',
    'Storybook',
    'Nest',
    'Flask',
    'MongoDB',
    'Tailwind',
    'CSS',
    'SCSS',
    'ShadCN',
    'Material UI',
    'Git',
    'NPM',
    'PNPM',
    'Yarn',
    'VSCode',
    'Cursor',
  ];

  return (
    <div id='resumeDiv'>
      <div>
        <h2 className='resSubDiv'>LANGUAGES + TOOLS</h2>
        <h3 className='resBody'>{skills.join(' • ')}</h3>
      </div>

      <div>
        <h2 className='resSubDiv'>EXPERIENCE</h2>
        <JobHeader
          companyName='WhereWeGo'
          title='Software Engineer'
          location='New Orleans, LA'
          startDate='JUL 2023'
          endDate='PRESENT'
        />
        <JobList list={whereWeGoList} companyName='WhereWeGo' />
        <JobHeader
          companyName='BudgetSimple'
          title='Contract Web Developer'
          location='New Orleans, LA'
          startDate='APR 2023'
          endDate='JUL 2023'
        />
        <JobList list={budgetSimpleList} companyName='BudgetSimple' />
      </div>
      <div>
        <h2 className='resSubDiv'>EDUCATION</h2>
        <h3 className='resBody'>
          Louisiana State University ｜ Baton Rouge, LA ｜ December 2020
        </h3>
        <h4 className='resBody'>B.A. English, Sociology Minor</h4>
      </div>
    </div>
  );
}
