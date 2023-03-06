// Events Page: This page should display all the events that your club is organizing or participating in. You can use Firebase to store event data such as event name, description, date, time, location, and image. You can then use Next.js to fetch this data from Firebase and display it on the Events Page. When a user clicks on an event, they should be directed to a separate page that provides more details about that event.

import React from 'react'
import Image from 'next/image'
import { Heading, Text } from '@chakra-ui/react'
import { Parallax } from 'react-parallax'
import EventCarousel from '../components/EventCarousel'

const EventsPage: React.FC = () => {
  const events = [
    {
      title: 'Holi',
      date: 'March 29, 2022',
      description: 'Celebrate the festival of colors with us!',
      images: [
        '/event1.jpg',
        '/event2.jpg',
        '/event3.jpg',
        '/event5.jpg',
      ],
    },
    {
      title: 'Diwali Dhamaka',
      date: 'November 4, 2022',
      description: 'Join us for a night of fireworks, food, and fun!',
      images: [
        '/diwali-1.jpg',
        '/diwali-2.jpg',
        '/diwali-3.jpg',
        '/diwali-4.jpg',
      ],
    },
    {
      title: 'Mock Shaadi',
      date: 'June 18, 2022',
      description: 'Experience the traditions and customs of an Indian wedding!',
      images: [
        '/shaadi-1.jpg',
        '/shaadi-2.jpg',
        '/shaadi-3.jpg',
        '/shaadi-4.jpg',
      ],
    },
    {
      title: 'Senior Picnic',
      date: 'August 12, 2022',
      description: 'Join us for a day of fun in the sun!',
      images: [
        '/picnic-1.jpg',
        '/picnic-2.jpg',
        '/picnic-3.jpg',
        '/picnic-4.jpg',
        '/picnic-5.jpg',
      ],
    },
  ];

  return (
    <>
      <Parallax bgImage="/events-background.jpg" strength={500}>
        <div style={{ height: 500 }}>
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center text-white">
            <Heading size="3xl" mb={4}>
              Our Events
            </Heading>
            <Text fontSize="xl">
              Check out some of the amazing events we host throughout the year!
            </Text>
          </div>
        </div>
      </Parallax>
      {events.map((event, index) => (
        <div key={index} className="py-20">
          <Heading size="2xl" textAlign="center" mb={8}>
            {event.title}
          </Heading>
          <EventCarousel
            title={event.title}
            date={event.date}
            description={event.description}
            images={event.images}
          />
        </div>
      ))}
    </>
  )
}

export default EventsPage



// export const getStaticProps: GetStaticProps = async () => {
//     const events = [
//         {
//             name: 'Event 1',
//             position: 'Date and Time',
//             image: '/event1.jpg',
//             bio: 'Event 1 Description',
//         },
//         {
//             name: 'Event 2',
//             position: 'Date and Time',
//             image: '/event2.jpg',
//             bio: 'Event 2 Description',
//         },
//         {
//             name: 'Event 3',
//             position: 'Date and Time',
//             image: '/event3.jpg',
//             bio: 'Event 3 Description',
//         },
//     ]

//     return {
//         props: {
//             events,
//         },
//     }
// }



