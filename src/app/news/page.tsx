import { Metadata } from 'next';
import xml2js from 'xml2js';
import React from 'react';
import ContentMenu from "@/components/ContentMenu"
import Link from "next/link"
import Image from "next/image"

interface NewsItem {
  title: string;
  link: string;
  images: string[];
  pubDate: string;
}

export const metadata: Metadata = {
  title: 'Steam News',
};

function extractImages(description: string): string[] {
  const imageUrls: string[] = [];
  const imgTagRegex = /<img[^>]+src="([^">]+)"/g;
  let match;
  while ((match = imgTagRegex.exec(description)) !== null) {
    imageUrls.push(match[1]);
  }
  return imageUrls;
}

async function fetchSteamNews(): Promise<NewsItem[]> {
  const response = await fetch('https://store.steampowered.com/feeds/news/app/2074920/?cc=US&l=english&snr=1_2108_9__2107');
  const xmlData = await response.text();



  let newsItems: NewsItem[] = [];

  await xml2js.parseStringPromise(xmlData).then((result) => {
    const items = result.rss.channel[0].item;
    newsItems = items.map((item: any) => {
      const description = item.description[0];
      return {
        title: item.title[0],
        link: item.link[0],
        images: extractImages(description),
        pubDate: item.pubDate[0],
      };
    });
  }).catch((err) => {
    console.error('Error parsing XML:', err);
  });

  return newsItems;
}

const NewsPage = async () => {
  const newsItems = await fetchSteamNews();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Link href="/">
          <Image
            className="mt-6 absolute top-0"
            src="/tfclogo.svg"
            alt="Steam Logo"
            width={35}
            height={35}
            priority
          />
        </Link>
      </div>
      <div className="absolute top-0 left-0 ml-3 mt-3">
        <ContentMenu />
      </div>
      <div className='border flex flex-grid  w-1/2 h-1/2  p-4'>
        <div className=''>
          <ul>
            {newsItems.map((item, index) => (
              <li key={index}>
                {item.images.length > 0 ? (
                  <div className='mb-4'>
                    {item.images.map((imgUrl, imgIndex) => (
                      <a key={imgIndex} href={item.link} target="_blank" rel="noopener noreferrer">
                        <button style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>
                          <img src={imgUrl} alt={`Image for ${item.title}`} />
                        </button>
                      </a>
                    ))}
                  </div>
                ) : (
                  <div className='border p-4 mb-4'>
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <button style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>
                      <p>{item.title}</p>
                    </button>
                    </a>
                  </div>
                )
                }




              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>

  );
};

export default NewsPage;

