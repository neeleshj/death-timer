import { Box, Flex, Heading } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

export default function Home() {
  const endDate = Date.parse('10 June 2022 00:12:34 GMT');

  const [countDown, setCountDown] = useState(endDate - new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      const value = endDate - new Date().getTime();
      setCountDown(value);
    }, 150);

    return () => clearInterval(interval);
  }, [endDate]);

  function formatMilliseconds(milliseconds, padStart) {
    function pad(num) {
      return `${num}`.padStart(2, '0');
    }
    const asSeconds = milliseconds / 1000;

    let hours = undefined;
    let minutes = Math.floor(asSeconds / 60);
    const seconds = Math.floor(asSeconds % 60);

    if (minutes > 59) {
      hours = Math.floor(minutes / 60);
      minutes %= 60;
    }

    return hours
      ? `${padStart ? pad(hours) : hours}:${pad(minutes)}:${pad(seconds)}`
      : `${padStart ? pad(minutes) : minutes}:${pad(seconds)}`;
  }

  return (
    <Flex
      w="full"
      height={100}
      justifyContent="center"
      alignItems="center"
      backgroundColor="black"
      flex={1}
    >
      <Box width={{ base: 'full', md: '750px' }} textAlign={{ base: 'center' }}>
        <Heading
          color="gold"
          fontSize={{ base: 'xl', md: '2xl', lg: '5xl', xl: '8xl' }}
        >
          {formatMilliseconds(countDown, true)}:
          {countDown
            .toString()
            .slice(
              countDown.toString().length - 3,
              countDown.toString().length
            )}
        </Heading>
      </Box>
    </Flex>
  );
}
