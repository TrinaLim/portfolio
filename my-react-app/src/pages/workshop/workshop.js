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
                        <h3>Japanese Inbound Programme, 2024</h3>
                    </Text>
                    <Image
                        src="/images/workshops/iosDevScout.jpeg"
                        alt="Japanese Inbound Programme"
                    />
                    <Text>
                        <p>
                            I was a language partner for this 1 week programme where Japanese students 
                            came to Singapore Polytechnic to learn English. 
                        </p>
                        <p>
                            <ul>Skills Achieved: </ul>
                            <ul>- Cross-Cultural Communication</ul>
                            <ul>- Mentoring</ul>
                            <ul>- Language Tutoring</ul>
                        </p>
                    </Text>
                </ColumnContainer>
                <ColumnContainer>
                    <Text>
                        <h3>Porridge Distribution Event, 2022</h3>
                    </Text>
                    <Image
                        src="/images/volunteer/porridge.png"
                        alt="Porridge Distribution Event"
                    />
                    <Text>
                        <p>
                            I was a volunteer under North West Youth Assembly for this 1 day event 
                            to pack porridge and work in groups to distribute around the block units accordingly.
                        </p>
                        <p>
                            <ul>Skills Achieved: </ul>
                            <ul>- Community Engagement</ul>
                            <ul>- Teamwork</ul>
                            <ul>- Interpersonal Communication</ul>
                        </p>
                    </Text>
                </ColumnContainer>
            </RowContainer>
            <RowContainer>
                <ColumnContainer>
                    <Text>
                        <h3>OGL, 2022</h3>
                    </Text>
                    <Image
                        src="/images/volunteer/ogl2022.png"
                        alt="Secondary School OGL"
                    />
                    <Text>
                        <p>
                            I was an Orientation Camp Leader for the Secondary 1 newcomers
                            where we had to plan activities and work with the other leaders to carry out this 1 week camp.
                        </p>
                        <p>
                            <ul>Skills Achieved: </ul>
                            <ul>- Leadership</ul>
                            <ul>- Teamwork</ul>
                            <ul>- Management</ul>
                        </p>
                    </Text>
                </ColumnContainer>
                <ColumnContainer>
                    <Text>
                        <h3>Donation Drive for Migrant Workers, 2024</h3>
                    </Text>
                    <Image
                        src="/images/volunteer/bloomingRaincoats.jpeg"
                        alt="Donation Drive for Migrant Workers"
                    />
                    <Text>
                        <p>
                            This was a one-time project where we packed reusable items neatly for the 
                            migrant workers such as water bottles and analgesic remedies. We then distributed 
                            the items to the migrant workers. 
                        </p>
                        <p>
                            <ul>Skills Achieved: </ul>
                            <ul>- Organization</ul>
                            <ul>- Teamwork</ul>
                            <ul>- Community Service</ul>
                        </p>
                    </Text>
                </ColumnContainer>
            </RowContainer>
            <RowContainer>
                <ColumnContainer>
                    <Text>
                        <h3>Student Volunteer for Year 1 DIT/DAAA/DISM, 2024</h3>
                        <p> - No Image - </p>
                        <p>
                            This program was to mainly help out with the setting up and assist the year 1 students 
                            taking common program to explore the different fields of their course. I worked with 
                            other student helpers and assisted the year 1 students to the different venues available 
                            and guided them through the tutorials should they need any help, also ensuring that their 
                            engaged and learning effectively.
                        </p>
                        <p>
                            <ul>Skills Achieved: </ul>
                            <ul>- Leadership</ul>
                            <ul>- Teamwork</ul>
                            <ul>- Patience</ul>
                        </p>
                    </Text>
                </ColumnContainer>
                <ColumnContainer>
                    <Text>
                        <p>
                            
                        </p>
                    </Text>
                </ColumnContainer>
            </RowContainer>
        </ItemsContainer>
    );
};

export default Volunteer;
