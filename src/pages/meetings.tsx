import { Container, Heading, Text } from "@chakra-ui/react";
import EventCarousel from "../components/EventCarousel";

const events = [
  {
    title: "Bhajan",
    date: "Sat Mar 12 2022 18:00:00 GMT-0500",
    description:
      "Join us for a night of devotional singing as we sing hymns in praise of the Divine.",
    images: ["/bhajan-1.jpg", "/bhajan-2.jpg", "/bhajan-3.jpg"],
  },
  {
    title: "Puja",
    date: "Sun Mar 13 2022 10:00:00 GMT-0500",
    description:
      "Come together as a community to offer worship to the Divine in the form of a beautiful puja ceremony.",
    images: ["/puja-1.jpg", "/puja-2.jpg", "/puja-3.jpg"],
  },
];

const MeetingsPage = () => {
  return (
    <Container maxW="container.lg" my={16}>
      <Heading as="h1" size="2xl" mb={8}>
        Meetings
      </Heading>
      {events.map((event) => (
        <EventCarousel
          title={event.title}
          date={event.date}
          description={event.description}
          images={event.images}
        />
      ))}
      <Text mt={16}>
        The club meets regularly to sing devotional hymns, or bhajans, as a form
        of worship and devotion. Our bhajans range from traditional hymns to
        contemporary devotional music. We believe that singing together as a
        community creates a sense of unity and upliftment, and we welcome anyone
        who wishes to participate.
      </Text>
      <iframe
        src="https://calendar.google.com/calendar/embed?src=c_2sorve6s4no93vk9ef4p43gv5k%40group.calendar.google.com&ctz=America%2FNew_York"
        width="800"
        height="600"
      ></iframe>
    </Container>
  );
};

export default MeetingsPage;
