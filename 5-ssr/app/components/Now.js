'use client';

import classes from './now.module.css';
import { useEffect, useState } from 'react';

export default function Now() {

    const serverSideNow = new Date();
    console.log(`executing Now component | ${serverSideNow.toString()}`);

    const [now, setNow] = useState(serverSideNow);

    useEffect(() => {
        setTimeout(() => {
            setNow(new Date());
        }, 3000);
      }, []);

    return (
        <div className={classes.now}>
            Changing timestamp client side after 3s : {now.toString()}
        </div>
    );
}