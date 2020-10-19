import React, { useState, useEffect } from 'react';
import Header from '../components/Header/index';
import Footer from '../components/Footer/index';
import api from '../services/api';

const Dashboard: React.FC = () => {
  const [allUsers, setAllUsers] = useState({});
  const [allOpportunities, setAllOpportunities] = useState({});

  useEffect(() => {
    async function loadAll(): Promise<void> {
      const response = await api.get('/');
      const { users, opportunities } = response.data;
      setAllUsers(users);
      setAllOpportunities(opportunities);
    }

    loadAll();
  }, []);
  return (
    <>
      <Header />
      <Footer />
    </>
  );
};

export default Dashboard;