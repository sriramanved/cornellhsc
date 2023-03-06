import React from 'react';
import { Heading, Text, Container, Box, Stack } from '@chakra-ui/react';
import Head from 'next/head';

const ChaplaincyPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Chaplaincy Services | My Club Name</title>
        <meta name="description" content="Learn about the chaplaincy services provided by our club." />
      </Head>
      <Container maxW="container.lg" py={16}>
        <Stack spacing={8}>
          <Box>
            <Heading as="h1" size="2xl" mb={4}>
              Chaplaincy Services
            </Heading>
            <Text fontSize="xl">
              Our club provides chaplaincy services for all members who need spiritual guidance and support. We understand that life can be challenging and we are here to help you navigate your way through the ups and downs.
            </Text>
          </Box>
          <Box>
            <Heading as="h2" size="xl" mb={4}>
              What is a Chaplain?
            </Heading>
            <Text fontSize="xl">
              A chaplain is a spiritual leader who provides emotional and religious support to individuals in various settings, including hospitals, schools, military bases, and other organizations. Our chaplains are trained to provide compassionate care and support to anyone in need, regardless of their faith or beliefs.
            </Text>
          </Box>
          <Box>
            <Heading as="h2" size="xl" mb={4}>
              Our Chaplaincy Services
            </Heading>
            <Text fontSize="xl">
              Our chaplaincy services include one-on-one counseling, group sessions, and spiritual guidance for individuals and families. We also offer prayer services and support during times of crisis or bereavement. Our chaplains are available to all members of our club and we respect your privacy and confidentiality.
            </Text>
          </Box>
          <Box>
            <Heading as="h2" size="xl" mb={4}>
              Contact Us
            </Heading>
            <Text fontSize="xl">
              If you would like to speak with one of our chaplains, please contact us to schedule an appointment. We are here to support you and provide spiritual guidance during your time with our club.
            </Text>
          </Box>
        </Stack>
      </Container>
    </>
  );
};

export default ChaplaincyPage;
