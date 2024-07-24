'use client';
import { useEffect, useState } from "react";

interface NewsItem {
  title: string;
  date: string;
  link: string;
}

export default function News() {
  const [news, setNews] = useState<NewsItem[]>([]);

  const fetchNews = async () => {
    try {
      const response = await fetch('https://tfd.nexon.com/en/news');
      const text = await response.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(text, 'text/html');
      const newsItems = doc.querySelectorAll('.news-item'); // Adjust the selector based on the actual structure

      const newsData: NewsItem[] = Array.from(newsItems).map(item => ({
        title: (item.querySelector('.news-title') as HTMLElement).innerText,
        date: (item.querySelector('.news-date') as HTMLElement).innerText,
        link: (item.querySelector('a') as HTMLAnchorElement).href,
      }));

      setNews(newsData);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  useEffect(() => {
    fetchNews();
    const interval = setInterval(fetchNews, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="news-container">
      {news.map((item, index) => (
        <div key={index} className="news-item">
          <h2><a href={item.link} target="_blank">{item.title}</a></h2>
          <p>{item.date}</p>
        </div>
      ))}
    </div>
  );
}
