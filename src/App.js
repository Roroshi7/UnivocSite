import React from 'react';
import './App.css';
import Header from './components/Header';
import ProgramDetails from './components/ProgramDetails';
import Benefits from './components/Benefits';
import JobRoles from './components/JobRoles';
import ContactForm from './components/ContactForm';
import Footer from './components/footer'; // Ensure correct import path

function App() {
  return (
    <div className="App">
      <Header />
      <ProgramDetails />
      <Benefits />
      <JobRoles />
      <ContactForm />
      <Footer /> {/* Footer added here */}
    </div>
  );
}

export default App;
