import React from 'react';

const styles = {
    container: {
        minHeight: 'calc(100vh - 50px)',
        display: 'flex',        
        justifyContent: 'center',
        
    },
    title: {
        fontWeight: 900,
        color:'#E84A5F',
        fontSize: 48,        
    },
};

const HomePage = () => (
    <div style={styles.container}>
        <h1 style={styles.title}>To be always there. </h1>
    </div>
);

export default HomePage;