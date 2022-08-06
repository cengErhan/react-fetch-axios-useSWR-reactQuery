import React from 'react';
import { useQuery } from 'react-query';
import { getDog } from '../Fetchers';



function Dog2() {
  const { data, status } = useQuery(['dog'], getDog);

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'error') return <p>Error !!!</p>;

  return (
    <div>
      <img width={100} src={data?.url} alt='dog image' />
    </div>
  );
}

export default Dog2;
