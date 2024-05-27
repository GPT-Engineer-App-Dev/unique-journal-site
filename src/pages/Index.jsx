import { Box, Container, Flex, Heading, Link, Stack, Text, VStack, Button } from "@chakra-ui/react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(storedPosts);
  }, []);

  return (
    <Container maxW="container.lg" p={4}>
      <Flex as="nav" bg="gray.100" p={4} mb={8} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">My Blog</Heading>
        <Stack direction="row" spacing={4}>
          <Link as={RouterLink} to="/">Home</Link>
          <Link as={RouterLink} to="/about">About</Link>
          <Link as={RouterLink} to="/contact">Contact</Link>
        </Stack>
      </Flex>

      <Button as={RouterLink} to="/new-post" colorScheme="blue" mb={8}>Add New Post</Button>

      <Flex direction={{ base: "column", md: "row" }} justifyContent="space-between">
        <Box flex="3">
          {posts.map((post, index) => (
            <Box key={index} mb={8} p={4} borderWidth="1px" borderRadius="md">
              <Heading as="h2" size="md" mb={2}>{post.title}</Heading>
              <Text fontSize="sm" color="gray.500" mb={2}>{post.date}</Text>
              <Text>{post.content}</Text>
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