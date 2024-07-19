import React from "react";
import { ItemsContainer, ItemsColumn, Text } from "./volunteerElements";

const Volunteer = () => {
    return (
        <ItemsContainer>
            <ItemsColumn>
                <Text>
                    <h1>Volunteers I attended</h1>
                    <p>
                        This is some text about me. Here, you can add more details about your
                        background, experience, and interests. Feel free to expand this section
                        with more information.
                    </p>
                </Text>
            </ItemsColumn>
        </ItemsContainer>
    );
};

export default Volunteer;
