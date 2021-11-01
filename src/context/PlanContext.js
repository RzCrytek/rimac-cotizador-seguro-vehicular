import React, { useContext, useState } from 'react';

const PlanContext = React.createContext();

export const PlanProvider = ({ children }) => {
  const [plan, setPlan] = useState();

  const value = {
    setPlan,
    plan,
  };

  return <PlanContext.Provider value={value}>{children}</PlanContext.Provider>;
};

export const usePlanContext = () => {
  const context = useContext(PlanContext);
  return context;
};
