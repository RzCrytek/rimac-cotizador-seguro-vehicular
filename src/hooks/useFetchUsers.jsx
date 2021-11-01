import { useEffect, useState } from 'react';

const useFetchUsers = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) console.log('algo falló');

        const data = await response.json();

        setData(data);
      } catch (error) {
        console.error('error:', error);
      }
    };

    fetchUsers();
  }, [url]);

  return data;
};

export default useFetchUsers;
