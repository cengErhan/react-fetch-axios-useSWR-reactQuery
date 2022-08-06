import { useState, useEffect } from 'react';

const Fetch = () => {
    const [data, setData] = useState(null)

    useEffect(()=>{
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(resp => resp.json())
        .then(data => setData(data.message))
    },[])

    return (
        <div>
            <img width={500} src={data} alt="dog image" />
        </div>
    );
}

export default Fetch;
