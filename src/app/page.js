import React from 'react';
import Intro from '../components/intro';
import "../styles/globals.css";
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import ChatPage from '../components/chatPage';
import PopularExpressions from '../components/popularExpressions';

export default function Home() {
  return ( <div>
     <Navbar />
     <Intro />
     <PopularExpressions />
     <ChatPage />
     <Footer />
  </div>
  );
}
