import React from 'react';
import { ItemsContainer, Image, Text } from './homeElements';

const Home = () => {
    return (
        <ItemsContainer>
            <Image
                src="./mePhoto.png"
                alt="picture of me"
            />
            <Text>
                <h1>A Little About Me</h1>
                <p>
                    This is some text about me. Here, you can add more details about your
                    background, experience, and interests. Feel free to expand this section
                    with more information.
                </p>
            </Text>
        </ItemsContainer>
    );
};

export default Home;
