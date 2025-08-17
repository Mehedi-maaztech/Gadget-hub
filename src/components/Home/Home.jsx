import React, { useEffect } from 'react';
import Banner from '../Banner/Banner';
import Accesories from '../Accesories/Accesories';

const Home = () => {
    useEffect(()=> {
        document.title = "Awesome Gadgets - Home"
    },[])
    return (
        <div>
            <Banner></Banner>
            <Accesories></Accesories>
        </div>
    );
};

export default Home;