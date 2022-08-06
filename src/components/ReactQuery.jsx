import {useState, useEffect} from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import Dog1 from '../helper-components/Dog1';
import Dog2 from '../helper-components/Dog2';

const client = new QueryClient();

const ReactQuery = () => {

    return (
        <QueryClientProvider client={client}>
            <Dog1/>
            <Dog2/>
        </QueryClientProvider>
    );
}

export default ReactQuery;
