/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import {BsFillMoonStarsFill} from 'react-icons/bs'
import Image from 'next/image'
import index from './index.js'
import GC_logo from '../public/print/LEO/GitCamp/Logo.png'

import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Print Desings</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
       
        <section>
          <nav className="py-10 mb-12 flex justify-between">
          <a href="index">
            <h1 className="text-xl font-burtons dark:text-white">JNBT</h1>
          </a>
            <ul className="flex items-center">
              <li className="text-gray-800 text-2xl dark:text-white">
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} />
              </li>
            </ul>
          </nav>
          <div className="text-center p-5">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl dark:text-sky-500">Jayaswin Nadula</h2>
            <h3 className="text-3xl py-2 md:text-3xl dark:text-white">Print Designs</h3>
          </div>
        </section>
        
        <section>
        <h3 className="text-3xl py-2 pb-2 md:text-3xl text-teal-600">Projects</h3>
        
        </section>

      </main>
    </div>
  );
}
