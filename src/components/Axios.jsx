import {useEffect,useState} from 'react';
import axios from 'axios';

const Axios = () => {
    const [data, setData] = useState(null)

    useEffect(()=>{
        axios.get('https://dog.ceo/api/breeds/image/random').then((resp)=>{
            setData(resp.data.message)
        })
    },[])

    return (
        <div>
            <img width={500} src={data} alt="dog image"/>
        </div>
    );
}

export default Axios;
