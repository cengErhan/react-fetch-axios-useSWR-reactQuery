import React from 'react';
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((resp)=>resp.json());
const Swr = () => {
    const { data, error } = useSWR('https://dog.ceo/api/breeds/image/random', fetcher, {
        suspense: true,
    });

    if(error){
        return <h1>You make a mistake</h1>
    }

    return (
        <div>
            <img width={500} src={data.message} alt="dog image" />
        </div>
    );
}

export default Swr;
