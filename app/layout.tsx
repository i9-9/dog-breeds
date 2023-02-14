"use client"

import { useState } from 'react';

import './globals.css';
import { Nunito } from '@next/font/google'
import Link from 'next/link';
import FavoritableImage from '../components/FavoritableImage';

const nunito = Nunito({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  
  const [favorites, setFavorites] = useState<string[]>([]);
  const [searchInput, setSearchInput] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSearchInput(event.target.value);
  };

  return (
    <html className='nunito.className'>
      <head />
      <body className='max-w-screen-md mx-auto p-4'>
        <main className='flex flex-col gap-6'>
          <div>
            <Link href="/">
              <h1 className="font-bold text-3xl">Dog Breeds</h1>
            </Link>
            <form className='my-1 mt-2 flex justify-between' >
              <label>
                <input
                 type="text"
                 onChange={handleChange}
                 value={searchInput}
                 placeholder="Search breeds"
                 name="name" className='
                  form-control
                  block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                />
              </label>
              <button className='inline-block px-6 py-2.5 bg-gray-100/90 text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-200 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'><Link href={searchInput}>Search</Link></button>
            </form>
          </div>
          <article>
            {children}
          </article>
          <hr />
          <article>
            <h1 className='font-bold text-3xl'>
              Favorites
            </h1>
            {favorites.length === 0 ? (
              <p className='text-gray-400 font-light'>You have no favorites yet.</p>
            ) : (
              <section
                className="grid gap-4"
                style={{ gridTemplateColumns: "repeat(auto-fill, minmax(256px, 1fr))" }}
              >
                {favorites.map((image) => (
                  <FavoritableImage key={image} src={image} />
                ))}
              </section>
            )}
          </article>
        </main>
      </body>
    </html>
  )
}
