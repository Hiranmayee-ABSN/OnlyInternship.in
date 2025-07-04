import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex items-center justify-center">
        <h1 className="text-4xl font-bold text-center">Welcome to TalentForge</h1>
      </main>
      <Footer />
    </div>
  );
};

export default App;
