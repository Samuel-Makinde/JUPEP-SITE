import React, { useContext, useState} from "react";

const UserContext = React.createContext();

// eslint-disable-next-line react/prop-types
const UserProvider = ({ children }) => {
  const [modalOpen, setIsModalOpen] = useState(false); 

  const openModal = () => {
    setIsModalOpen(true);
  }; 

  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  return (
    <UserContext.Provider
    value={{
      openModal,
      closeModal,
      modalOpen,
    }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(UserContext);
};

export { UserContext, UserProvider };
