import { useState } from 'react';
import Link from 'next/link';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link href="/" className="font-semibold text-xl tracking-tight">
          Cornell Hindu Student Council
        </Link>
      </div>
      <div className="block lg:hidden">
        <Button
          size="lg"
          onClick={() => setIsOpen(!isOpen)}
          variant="outline"
          colorScheme="white"
        >
          <ChevronDownIcon />
        </Button>
      </div>
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } w-full flex-grow lg:flex lg:items-center lg:w-auto`}
      >
        <div className="text-sm lg:flex-grow">
          <Link href="/events" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4">
              Events
          </Link>
          <Link href="/meetings" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4">
              Meetings
          </Link>
          <Link href="/signup" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4">
              Signup
          </Link>
          <Link href="/chaplaincy" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400">
              Chaplaincy
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
