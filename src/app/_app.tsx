import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS
import 'flowbite'; // Import Flowbite JS
import 'flowbite/dist/flowbite.css'; // Import Flowbite CSS

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
