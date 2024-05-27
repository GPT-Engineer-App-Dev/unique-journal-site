import { Box, Container, Flex, Heading, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const posts = [
  {
    title: "First Blog Post",
    date: "October 1, 2023",
    excerpt: "This is a short excerpt of the first blog post. It gives a brief overview of the content.",
  },
  {
    title: "Second Blog Post",
    date: "October 5, 2023",
    excerpt: "This is a short excerpt of the second blog post. It gives a brief overview of the content.",
  },
];

const Index = () => {
  return (
    <Container maxW="container.lg" p={4}>
      <Flex as="nav" bg="gray.100" p={4} mb={8} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">My Blog</Heading>
        <Stack direction="row" spacing={4}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </Stack>
      </Flex>

      <Flex direction={{ base: "column", md: "row" }} justifyContent="space-between">
        <Box flex="3">
          {posts.map((post, index) => (
            <Box key={index} mb={8} p={4} borderWidth="1px" borderRadius="md">
              <Heading as="h2" size="md" mb={2}>{post.title}</Heading>
              <Text fontSize="sm" color="gray.500" mb={2}>{post.date}</Text>
              <Text>{post.excerpt}</Text>
            </Box>
          ))}
        </Box>

        <Box flex="1" ml={{ md: 8 }} mt={{ base: 8, md: 0 }}>
          <Heading as="h3" size="md" mb={4}>Follow Me</Heading>
          <Stack direction="row" spacing={4}>
            <Link href="https://twitter.com" isExternal>
              <FaTwitter size="24px" />
            </Link>
            <Link href="https://linkedin.com" isExternal>
              <FaLinkedin size="24px" />
            </Link>
            <Link href="https://github.com" isExternal>
              <FaGithub size="24px" />
            </Link>
          </Stack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;