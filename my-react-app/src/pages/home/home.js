import React from 'react';
import { ItemsContainer, Image, Text } from './homeElements';

const Home = () => {
    return (
        <ItemsContainer>
            <Image
                src="/images/photoOfMe.png"
                alt="picture of me"
            />
            <Text>
                <h1>A Little About Me</h1>
                <p>
                Before entering polytechnic, I had <mark>no coding experience.</mark> However, upon starting my Information Technology diploma at Singapore Polytechnic, 
                I discovered my <mark>passion</mark> for it. Coding feels like unraveling puzzles and solving problems, 
                and witnessing everything converge is truly captivating. My dedication to studying and my interest in the diploma is <mark>evident in my grades.</mark>
                Coding has taught me to <mark>approach problems systematically</mark>, breaking them down into smaller, more manageable components. 
                <mark>This skill translates beyond coding</mark>, proving invaluable in tackling various challenges in both academic and real-world scenarios. 
                Additionally, coding requires a logical mindset, where every line of code follows a precise sequence and serves a specific purpose. 
                This logical approach has enhanced my ability to <mark>analyze situations, identify patterns, and make sound decisions</mark>.
                In programming, even minor errors can lead to significant issues. Thus, always ensured to meticulously review code to ensure its accuracy and efficiency. 
                This <mark>attention to detail</mark> extends to other aspects of my life, fostering a mindset of <mark>thoroughness and precision.</mark> Lastly,
                I've learned to think outside the box, exploring unconventional approaches to coding challenges and discovering new ways to optimize code performance.
                <p>
                <strong>My goal is to leverage my passion for coding and problem-solving to become proficient in my future job, 
                actively contributing to the advancement of technology and driving positive change in the digital landscape.</strong> 
                </p>
                </p>
            </Text>
        </ItemsContainer>
    );
};

export default Home;
