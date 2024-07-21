import React from "react";
import { ItemsContainer, RowContainer, ColumnContainer, Image, Text } from "./indexElements";

const Volunteer = () => {
    return (
        <ItemsContainer>
            <Text>
                <h1>My CCAs</h1>
            </Text>
            <RowContainer>
                <ColumnContainer>
                    <Text>
                        <h3>Piano Ensemble, 2024</h3>
                    </Text>
                    <Image
                        src="/images/CCA/pianoEnsemble.jpeg"
                        alt="Piano Ensemble"
                    />
                    <Text>
                        <p>
                            This is my current CCA where we learn all about piano from the theory to the types of music 
                            and background of it. We also have "Internal recycling competition" where every year we'd choose a duet partner 
                            to work on a piece together and play.
                        </p>
                        <p>
                            Skills Achieved:
                            <ul>
                                <li>Musical Theory and Practice</li>
                                <li>Collaboration and Teamwork</li>
                                <li>Performance Skills</li>
                            </ul>
                        </p>
                    </Text>
                </ColumnContainer>
                <ColumnContainer>
                    <Text>
                        <h3>Choir SYF, 2021</h3>
                    </Text>
                    <Image
                        src="/images/CCA/choirSYF.jpeg"
                        alt="Choir SYF"
                    />
                    <Text>
                        <p>
                            This was my CCA back in secondary school which I participated in 2021 SYF and performed.
                        </p>
                        <p>
                            Skills Achieved:
                            <ul>
                                <li>Stage Presence</li>
                                <li>Discipline and Commitment</li>
                                <li>Team Coordination</li>
                            </ul>
                        </p>
                    </Text>
                </ColumnContainer>
            </RowContainer>
            <RowContainer>
                <ColumnContainer>
                    <Text>
                        <h3>CNY performance, 2021</h3>
                    </Text>
                    <Image
                        src="/images/CCA/CNY.png"
                        alt="CNY choir performance"
                    />
                    <Text>
                        <p>
                            This was also part of my CCA where I performed during CNY 2021 for the school.
                        </p>
                        <p>
                            Skills Achieved:
                            <ul>
                                <li>Event Preparation</li>
                                <li>Public Performance</li>
                            </ul>
                        </p>
                    </Text>
                </ColumnContainer>
                <ColumnContainer>
                    <p></p>                        
                </ColumnContainer>
            </RowContainer>
        </ItemsContainer>
    );
};

export default Volunteer;
