import React from "react";
import { ItemsContainer, RowContainer, ColumnContainer, Text } from "./indexElements";

const Volunteer = () => {
    return (
        <ItemsContainer>
            <Text>
                <h1>My Projects</h1>
            </Text>
            <RowContainer>
                <ColumnContainer style={{ height: '400px', overflowY: 'auto' }}>
                    <Text>
                        <h3>Gamified Sustainability Website</h3>
                    </Text>
                    <Text>
                        <p>
                            <a href="https://github.com/TrinaLim/Gamified-Sustainability-BED" target="_blank" rel="noopener noreferrer">
                                GitHub link to project
                            </a>
                        </p>
                        <p>
                            This is a gamified sustainability game where users are encouraged to completed tasks and 
                            earn points. With these points, users are able to purchase weapons, embark on quests and 
                            win pets.
                        </p>
                        <p>
                            Coding Languages Used: 
                            <ul>
                                <li>JavaScript</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>MySQL</li>
                            </ul>
                        </p>
                    </Text>
                </ColumnContainer>
                <ColumnContainer style={{ height: '400px', overflowY: 'auto' }}>
                    <Text>
                        <h3>Python Web Scraping</h3>
                    </Text>
                    <Text>
                        <p>
                            <a href="https://github.com/TrinaLim/pythonWebScraping" target="_blank" rel="noopener noreferrer">
                                GitHub link to project
                            </a>
                        </p>
                        <p>
                            This was a simple web scraping in Python where it is able to 
                            extract text and display it in table format in csv file.
                        </p>
                        <p>
                            Coding Languages Used:
                            <ul>
                                <li>Python</li>
                            </ul>
                        </p>
                    </Text>
                </ColumnContainer>
            </RowContainer>
            <RowContainer>
                <ColumnContainer style={{ height: '400px', overflowY: 'auto' }}>
                    <Text>
                        <h3>Ping Pong Game in Python</h3>
                    </Text>
                    <Text>
                        <p>
                            <a href="https://github.com/TrinaLim/pythonPong" target="_blank" rel="noopener noreferrer">
                                GitHub link to project
                            </a>
                        </p>
                        <p>
                            This is a mini project where it is a game against a bot. There is rectangular box for the
                            player to move up and down and hit the ball back to the bot. If the ball passes the reactangular 
                            box, the player loses. 
                        </p>
                        <p>
                            Coding Languages Used: 
                            <ul>
                                <li>Python</li>
                            </ul>
                        </p>
                    </Text>
                </ColumnContainer>
                <ColumnContainer style={{ height: '400px', overflowY: 'auto' }}>
                    <Text>
                        <h3>Ping Pong Game in Java</h3>
                    </Text>
                    <Text>
                        <p>
                            <a href="https://github.com/TrinaLim/javaPong" target="_blank" rel="noopener noreferrer">
                                GitHub link to project
                            </a>
                        </p>
                        <p>
                            The same ping pong game, instead it is in Java this time. 
                        </p>
                        <p>
                            Coding Languages Used 
                            <ul>
                                <li>Java</li>
                            </ul>
                        </p>
                    </Text>
                </ColumnContainer>
            </RowContainer>
        </ItemsContainer>
    );
};

export default Volunteer;
