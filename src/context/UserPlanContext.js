import React, { useContext, useState } from 'react';

const UserPlanContext = React.createContext();

export const UserPlanProvider = ({ children }) => {
  const [userPlan, setUserPlan] = useState({});

  console.log('userPlan:', userPlan);

  const value = {
    userPlan,
    setUserPlan,
  };

  return (
    <UserPlanContext.Provider value={value}>
      {children}
    </UserPlanContext.Provider>
  );
};

export const useUserPlanContext = () => {
  const context = useContext(UserPlanContext);
  return context;
};
