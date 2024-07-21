import React from "react";
import { ItemsContainer, RowContainer, ColumnContainer, Image, Text } from "./workshopElements";

const Volunteer = () => {
    return (
        <ItemsContainer>
            <Text>
                <h1>Workshops I attended</h1>
            </Text>
            <RowContainer>
                <ColumnContainer>
                    <Text>
                        <h3>SEED code league, 2023</h3>
                    </Text>
                    <Image
                        src="/images/workshops/SEEDcert.png"
                        alt="SEED code league"
                    />
                    <Text>
                        <p>
                            This was a coding challenge in JavaScript in groups of 5 where we had to solve a variety of JavaScript questions
                            in order to earn points and win.
                        </p>
                        <p>
                            Skills Achieved:
                            <ul>
                                <li>Teamwork</li>
                                <li>Critical Thinking</li>
                                <li>Problem Solving</li>
                            </ul>
                        </p>
                    </Text>
                </ColumnContainer>
                <ColumnContainer>
                    <Text>
                        <h3>IOS DevScout, 2024</h3>
                    </Text>
                    <Image
                        src="/images/workshops/iosDevScout.jpeg"
                        alt="IOS DevScout Event"
                    />
                    <Text>
                        <p>
                            I attended an IOS devscout workshop where I learned about SwiftUI and students experiences as well
                            as networking with the others attendees.
                        </p>
                        <p>
                            Skills Achieved:
                            <ul>
                                <li>Active Listening</li>
                                <li>Networking</li>
                                <li>Communication</li>
                            </ul>
                        </p>
                    </Text>
                </ColumnContainer>
            </RowContainer>
            <RowContainer>
                <ColumnContainer>
                    <Text>
                        <h3>Computer Science Workshop, 2024</h3>
                    </Text>
                    <Image
                        src="/images/workshops/compSci.jpeg"
                        alt="Computer Science Workshop"
                    />
                    <Text>
                        <p>
                            This was organized by AUG Singapore where we looked at some fundamental concepts of Cybersecurity 
                            with hands-on exercises.
                        </p>
                        <p>
                            Skills Achieved:
                            <ul>
                                <li>Critical Thinking</li>
                                <li>Security</li>
                            </ul>
                        </p>
                    </Text>
                </ColumnContainer>
                <ColumnContainer>
                    <Text>
                        <h3>Talk Series On How To Ace Your FOP, 2023</h3>
                        <p> - No Image - </p>
                        <p>
                            This was an online workshop during my year 1 on Fundamentals Of Programming(FOP). Where 
                            the seniors shared about ways of achieving high grades for the module.
                        </p>
                        <p>
                            Skills Achieved: 
                            <ul>
                                <li>Time Management</li>
                                <li>Study Techniques</li>
                                <li>Resource Utilization</li>
                            </ul>
                        </p>
                    </Text>
                </ColumnContainer>
            </RowContainer>
            <RowContainer>
                <ColumnContainer>
                    <Text>
                        <h3>Leadership Development Programme, 2023</h3>
                        <p> - No Image - </p>
                        <p>
                            This was a programme where we were taught the 7 habits of leadership.
                        </p>
                        <p>
                            Skills Achieved: 
                            <ul>
                                <li>Decision Making</li>
                                <li>Conflict Resolution</li>
                                <li>Effective Communication</li>
                            </ul>
                        </p>
                    </Text>
                </ColumnContainer>
                <ColumnContainer>
                    <Text>
                        <h3>Graphing Impact Data Visualisation Workshop, 2023</h3>
                        <p> - No Image - </p>
                        <p>
                            This was an online workshop, where we were introduced Python, Python's Numpy and Pandas Library.
                        </p>
                        <p>
                            Skills Achieved: 
                            <ul>
                                <li>Data Analysis</li>
                                <li>Visualisation</li>
                                <li>Programming</li>
                            </ul>
                        </p>
                    </Text>
                </ColumnContainer>
            </RowContainer>
        </ItemsContainer>
    );
};

export default Volunteer;
