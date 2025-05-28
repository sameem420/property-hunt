"use client";
import React from "react";
import InfoBox from "../InfoBox";
import { SimpleGrid, useMantineTheme } from "@mantine/core";

function InfoBoxes() {
  const theme = useMantineTheme();

  return (
    <SimpleGrid cols={2} spacing="lg" verticalSpacing="sm" mx={50} my={25}>
      <InfoBox
        heading="For Renters"
        backgroundColor={theme.colors.gray[3]}
        buttonInfo={{
          text: "Browse Properties",
          link: "/properties",
          backgroundColor: theme.colors.dark[6],
        }}
      >
        Find your dream rental property. Bookmark properties and contact owners.
      </InfoBox>
      <InfoBox
        heading="For Property Owners"
        backgroundColor={theme.colors.blue[3]}
        buttonInfo={{
          text: "Add Property",
          link: "/properties/add",
          backgroundColor: theme.colors.blue[6],
        }}
      >
        List your properties and reach potential tenants. Rent short or long
        term.
      </InfoBox>
    </SimpleGrid>
  );
}

export default InfoBoxes;
