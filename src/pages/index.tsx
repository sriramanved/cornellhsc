import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Heading, Text, Stack, Grid, GridItem } from '@chakra-ui/react'
import { Parallax } from 'react-parallax';
import Card from '../components/Card'
import Head from 'next/head'

const LandingPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>My Club Name - Welcome to the Club</title>
        <meta name="description" content="Join our club for fun and learning!" />
      </Head>
      <Parallax bgImage="/background.jpg" strength={500}>
        <div style={{ height: '100vh' }}>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <Heading size="3xl" mb={4}>
              Welcome to the Club
            </Heading>
            <Text fontSize="xl">Join us for fun and learning!</Text>
          </div>
        </div>
      </Parallax>
      <div className="container mx-auto px-4 py-16">
        <Heading size="2xl" textAlign="center" mb={12}>
          Upcoming Events
        </Heading>
        <Grid templateColumns={['repeat(1, 1fr)', 'repeat(3, 1fr)']} gap={8}>
          <GridItem>
            <Link href="/events">
                <Card
                  name="Event 1"
                  position="Date and Time"
                  image="/event1.jpg"
                  bio="Event 1 Description"
                />
            </Link>
          </GridItem>
          <GridItem>
            <Link href="/events">
                <Card
                  name="Event 2"
                  position="Date and Time"
                  image="/event2.jpg"
                  bio="Event 2 Description"
                />
            </Link>
          </GridItem>
          <GridItem>
            <Link href="/events">
                <Card
                  name="Event 3"
                  position="Date and Time"
                  image="/event3.jpg"
                  bio="Event 3 Description"
                />
            </Link>
          </GridItem>
        </Grid>
      </div>
      <Parallax bgImage="/background2.jpg" strength={500}>
        <div style={{ height: '100vh' }}>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <Heading size="2xl" mb={4}>
              Meet Our Members
            </Heading>
            <Text fontSize="xl">Discover our talented team</Text>
          </div>
        </div>
      </Parallax>
      <div className="container mx-auto px-4 py-16">
        <Grid templateColumns={['repeat(1, 1fr)', 'repeat(3, 1fr)']} gap={8}>
          <GridItem>
            <Card
              name="Member 1"
              position="Position 1"
              image="/member1.jpg"
              bio="Member 1 bio"
            />
          </GridItem>
          <GridItem>
            <Card
              name="Member 2"
              position="Position 2"
              image="/member2.jpg"
              bio="Member 2 bio"
            />
          </GridItem>
          <GridItem>
            <Card
              name="Member 3"
              position="Position 3"
              image="/member3.jpg"
              bio="Member 3 bio"
            />
          </GridItem>
        </Grid>
      </div>
    </>
  )
}
              
export default LandingPage;
              
              
              
              
              
              
