import React from "react";
import { ItemsContainer, RowContainer, ColumnContainer, Image, Text } from "./indexElements";

const Volunteer = () => {
    return (
        <ItemsContainer>
            <Text>
                <h1>Others</h1>
            </Text>
            <RowContainer>
                <ColumnContainer>
                    <Text>
                        <h3>Edusave Award, 2023</h3>
                    </Text>
                    <Image
                        src="/images/others/edusaveAward.jpeg"
                        alt="Edusave Award"
                    />
                    <Text>
                        <p>
                            2 Edusave Award that I received in 2023.
                        </p>
                        <p>
                            Certificates: 
                            <ul>
                                <li>Left: Edusave Good Progress Award</li>
                                <li>Right: Edusave Award for Achievement. Good Leadership and Service (EAGLES)</li>
                            </ul>
                        </p>
                    </Text>
                </ColumnContainer>
                <ColumnContainer>
                    <Text>
                        <h3>Outward Bound Singapore(OBS), 2021</h3>
                    </Text>
                    <Image
                        src="/images/others/OBS.jpeg"
                        alt="Outward Bound Singapore"
                    />
                    <Text>
                        <p>
                            I participated in OBS 2021, where we were grouped to concur obstacles and challenges.
                        </p>
                        <p>
                            Skills Achieved:
                            <ul>
                                <li>Teamwork and Collaboration</li>
                                <li>Problem Solving</li>
                                <li>Leadership and Resilience</li>
                            </ul>
                        </p>
                    </Text>
                </ColumnContainer>
            </RowContainer>
            <RowContainer>
                <ColumnContainer>
                    <Text>
                        <h3>Recital Competition, 2021</h3>
                    </Text>
                    <Image
                        src="/images/others/RecitalComp.jpeg"
                        alt="Chinese Recital Competition"
                    />
                    <Text>
                        <p>
                            This was a Chinese Recital Competition where along with my other 2 friends, we recited a chinese 
                            poem with intonations and expressions.
                        </p>
                        <p>
                            Skills Achieved: 
                            <ul>
                                <li>Coordination and Synchronization</li>
                                <li>Cultural Appreciation</li>
                            </ul>
                        </p>
                    </Text>
                </ColumnContainer>
                <ColumnContainer>
                    <Text>
                        <h3>Distinction in Grade 5 Piano, 2020</h3>
                    </Text>
                    <Image
                        src="/images/others/ABRSM.jpeg"
                        alt="ABRSM Certificate"
                    />
                    <Text>
                        <p>
                            Aside from piano CCA, I also learn piano outside to which i achieved a distinction for my grade 5 piano theory exam.
                        </p>
                        <p>
                            Skills Achieved: 
                            <ul>
                                <li>Musical Theory Proficiency</li>
                                <li>Self Discipline and Commitment</li>
                                <li>Time Management</li>
                            </ul>
                        </p>
                    </Text>
                </ColumnContainer>
            </RowContainer>
        </ItemsContainer>
    );
};

export default Volunteer;
