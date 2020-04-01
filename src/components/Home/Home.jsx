import React from 'react';
import Button from '../Button/Button';

const Home = ({ history }) => {
    return (
        <div>
            <h1>Home</h1>
            <Button
                onClickHandler={ () => {
                    history.push('/quiz');
                }}
            >
                クイズページへ移動
            </Button>
        </div>
    );
};

export default Home;