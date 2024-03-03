// Re-Entry Mobile Application Main Page Component
import { Box, Container, Heading, SimpleGrid, Text, Button, VStack, HStack, Icon, Image, Input, Stack } from "@chakra-ui/react";
import { FaHome, FaSuitcase, FaUserMd, FaGavel, FaUsers, FaBook, FaRegLifeRing, FaGraduationCap, FaLock } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      <VStack spacing={8}>
        <Box p={4}>
          <Heading as="h1" size="xl" textAlign="center">
            Welcome to the Re-Entry Mobile Application
          </Heading>
          <Text mt={4} fontSize="md" textAlign="center">
            Providing the resources and support you need for a successful re-entry into society.
          </Text>
        </Box>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          <ResourceCard icon={FaHome} title="Housing Assistance" description="Find stable housing with our assistance programs." />
          <ResourceCard icon={FaSuitcase} title="Employment Services" description="Secure employment with our job listings and training workshops." />
          <ResourceCard icon={FaUserMd} title="Healthcare Access" description="Access essential healthcare services for your well-being." />
          <ResourceCard icon={FaGavel} title="Legal Assistance" description="Navigate the legal system and understand your rights." />
          <ResourceCard icon={FaUsers} title="Community Support" description="Connect with peers and mentors for encouragement." />
          <ResourceCard icon={FaBook} title="Educational Resources" description="Pursue learning opportunities and personal development." />
          <ResourceCard icon={FaRegLifeRing} title="Crisis Support" description="Get immediate assistance in urgent situations." />
          <ResourceCard icon={FaGraduationCap} title="Skill Development" description="Build your skills with vocational training programs." />
          <ResourceCard icon={FaLock} title="Privacy & Security" description="Your information is protected with our security measures." />
        </SimpleGrid>
        <Box w="full">
          <Heading size="md" mb={4}>
            Search for Resources
          </Heading>
          <SearchResources />
        </Box>
      </VStack>
    </Container>
  );
};

const ResourceCard = ({ icon, title, description }) => (
  <VStack p={5} boxShadow="md" borderRadius="md" align="center" bgColor="gray.100">
    <Icon as={icon} w={10} h={10} mb={3} color="blue.500" />
    <Heading as="h3" size="md">
      {title}
    </Heading>
    <Text textAlign="center" px={3}>
      {description}
    </Text>
  </VStack>
);

const SearchResources = () => (
  <Stack direction={{ base: "column", md: "row" }} spacing={4}>
    <Input placeholder="Enter your location" />
    <Input placeholder="Type of service" />
    <Button leftIcon={<FaSearch />} colorScheme="blue" px={10}>
      Search
    </Button>
  </Stack>
);

// Placeholder icon for search button
const FaSearch = () => <FaSuitcase />;

export default Index;
