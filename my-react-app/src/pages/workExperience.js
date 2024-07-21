import React from "react";
import { ItemsContainer, RowContainer, ColumnContainer, Image, Text } from "./indexElements";

const Volunteer = () => {
    return (
        <ItemsContainer>
            <Text>
                <h1>My Work Experiences</h1>
            </Text>
            <RowContainer>
                <ColumnContainer>
                    <Text>
                        <h3>Primarius Agency, 2024</h3>
                    </Text>
                    <Image
                        src="/images/workExperience/primariusAgency.jpeg"
                        alt="Primarius Agency"
                    />
                    <Text>
                        <p>
                            I was under an agency where we have this "Guild" thing to encourage employees 
                            to work more, accumulate points and earn gifts. Our Guild came second in place as 
                            each of us worked a lot between banquets and restaurents. I also learned the different 
                            dining styles and their etiquettes.
                        </p>
                        <p>
                            Skills Achieved: 
                            <ul>
                                <li>Customer Service</li>
                                <li>Teamwork</li>
                                <li>Cultural and Etiquette Knowledge</li>
                            </ul>
                        </p>
                    </Text>
                </ColumnContainer>
                <ColumnContainer>
                    <Text>
                        <h3>Yakun, 2021 - 2022</h3>
                    </Text>
                    <Image
                        src="/images/workExperience/yakun.jpeg"
                        alt="Porridge Distribution Event"
                    />
                    <Text>
                        <p>
                            I worked part time at Yakun from June 2021 to July 2021
                        </p>
                        <p>
                            <strong>Responsibilities:</strong> 
                            <ul>
                                <li>
                                    Expertly preparing and assembling kaya toast, soft-boiled eggs, and other 
                                    menu items with precision and care, ensuring each dish met our high standards 
                                    of quality and flavor.
                                </li>
                                <li>
                                    Providing efficient and accurate cashiering services, processing orders, 
                                    handling payments, and issuing receipts with a friendly and welcoming demeanor.
                                </li>
                                <li>
                                    Skillfully packing orders for takeaway and delivery, ensuring that each item 
                                    was neatly arranged and properly sealed to maintain freshness during transport.
                                </li>
                                <li>Dealt with customer complaints</li>
                            </ul>
                        </p>
                        <p>
                            <strong>Skills Achieved:</strong>
                            <ul>
                                <li>Customer Service</li>
                                <li>Cashiering</li>
                                <li>Attention to Detail</li>
                                <li>Time Management</li>
                            </ul>
                        </p>
                    </Text>
                </ColumnContainer>
            </RowContainer>
            <RowContainer>
                <ColumnContainer>
                    <Text>
                        <h3>Seoul Garden, 2022 - 2023</h3>
                    </Text>
                    <Text>
                        <p>- No Image -</p>
                        <p>
                            I was a part time food server at Seoul Garden, Yishun, from December 2022 to March 2023.
                        </p>
                        <p>
                            <strong>Responsibilities:</strong> 
                            <ul>
                                <li>
                                    Provided friendly and attentive service, answering customer inquiries, and 
                                    ensuring their comfort throughout their dining experience.
                                </li>
                                <li>
                                    Mixing and serving a variety of beverages, including seasonal specials and 
                                    refreshing fruit punches, to complement the hotpot experience.
                                </li>
                                <li>
                                    Handling transactions accurately and efficiently, processing payments, 
                                    and providing customers with receipts and change as needed.
                                </li>
                                <li>Dealt with customer complaints</li>
                            </ul>
                        </p>
                        <p>
                            <strong>Skills Achieved:</strong> 
                            <ul>
                                <li>Customer Service</li>
                                <li>Time Management</li>
                                <li>Adaptation</li>
                                <li>Multi Tasking</li>
                            </ul>
                        </p>
                    </Text>
                </ColumnContainer>
                <ColumnContainer>
                    <Text>
                        <p></p>
                    </Text>
                </ColumnContainer>
            </RowContainer>
        </ItemsContainer>
    );
};

export default Volunteer;
