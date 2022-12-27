import { Container, Text, Center, SimpleGrid, useMantineTheme, Card, Flex } from '@mantine/core';
import { Link } from 'react-router-dom'

export default function Subgrid() {
  const theme = useMantineTheme();
  return (
    <Container my="xl" >
    <Flex
      justify={{ sm: 'center' }}
    >
      <a href="users">
        <Container my="xl">
        <Card shadow="sm" p="lg" radius="xl" withBorder>
          <Center>
            <Text size="xl" color="dark">
                Users
            </Text>
          </Center>
        </Card>
        </Container>
        <Container my="xl">
        <Card shadow="sm" p="lg" radius="xl" withBorder>
          <Center>
            <Text size="xl" color="dark">
                Users
            </Text>
          </Center>
        </Card>
        </Container>
        <Container my="xl">
        <Card shadow="sm" p="lg" radius="xl" withBorder>
          <Center>
            <Text size="xl" color="dark" >
                Users
            </Text>
          </Center>
        </Card>
        </Container>
        <Container my="xl">
        <Card shadow="sm" p="lg" radius="xl" withBorder>
          <Center>
            <Text size="xl" color="dark">
                Users
            </Text>
          </Center>
        </Card>
        </Container>
      </a>
    </Flex>
    </Container> 
  );
}
