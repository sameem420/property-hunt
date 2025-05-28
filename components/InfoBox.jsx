import { Button, Paper, Text, Title } from "@mantine/core";
import React from "react";

function InfoBox({
  heading,
  backgroundColor = "gray",
  textColor = "gray.9",
  buttonInfo,
  children,
}) {
  return (
    <Paper shadow="lg" radius="md" p="xl" bg={backgroundColor}>
      <Title c={textColor} size="h3">
        {heading}
      </Title>
      <Text c={textColor} my={5}>
        {children}
      </Text>
      <Button
        component="a"
        href={buttonInfo.link}
        bg={buttonInfo.backgroundColor}
      >
        {buttonInfo.text}
      </Button>
    </Paper>
  );
}

export default InfoBox;
