import React from 'react'
import Image from 'next/image'

interface CardProps {
  name: string
  position: string
  image: string
  bio: string
}

const Card: React.FC<CardProps> = ({ name, position, image, bio }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="relative">
        <Image
          src={image}
          alt={name}
          width={640}
          height={426}
          layout="responsive"
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{position}</p>
        <p className="text-gray-700 text-base">{bio}</p>
      </div>
    </div>
  )
}

export default Card
