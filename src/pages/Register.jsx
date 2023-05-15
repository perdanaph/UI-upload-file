import {
  TextInput,
  PasswordInput,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Button,
} from '@mantine/core';

export default function Register() {
  return (
    <>
      <Container size={420} my={40}>
        <Title
          align="center"
          sx={() => ({
            fontFamily: `'Nunito', sans-serif`,
            fontWeight: 'bold',
          })}
        >
          Hello! Let Go Sign Up
        </Title>
        <Text color="dimmed" size="sm" align="center" mt={5}>
          Do you have an account ?{' '}
          <Anchor size="sm" component="button">
            Login
          </Anchor>
        </Text>

        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <TextInput
            label="First Name"
            placeholder="your first name"
            mb="sm"
            required
          />
          <TextInput
            label="Last Name"
            mb="sm"
            placeholder="your last name"
            required
          />
          <TextInput label="Username" mb="sm" placeholder="username" required />
          <TextInput
            label="email"
            mb="sm"
            placeholder="yourmail@mail.com"
            required
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            required
            mt="md"
          />
          <Button fullWidth mt="xl" color="cyan">
            Register
          </Button>
        </Paper>
      </Container>
    </>
  );
}
