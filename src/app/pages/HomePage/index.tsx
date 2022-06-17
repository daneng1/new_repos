import * as React from 'react';
import Features from './Features/';
import NavBar from './Features/Colors/components/NavBar';
// import { PageWrapper } from 'app/components/PageWrapper';

export function HomePage() {
  return (
    <>
      <div className="h-100 bg-slate-100 flex m-auto w-full items-center flex-col box-border w-full">
        <NavBar />
        <Features />
      </div>
    </>
  );
}
