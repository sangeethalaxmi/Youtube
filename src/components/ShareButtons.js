import React from "react";

const ShareButtons = ({ url }) => {
  const encodedUrl = encodeURIComponent(url);
  return (
    <div className="p-2">
      <ul className="flex  items-center justify-evenly">
        <li className="flex flex-col gap-2 items-center">
          {" "}
          <a
            href={`https://api.whatsapp.com/send?text=${encodedUrl}`}
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#25D366"
              width="50"
              height="50"
            >
              <path d="M12.04 2C6.508 2 2 6.353 2 11.717a9.48 9.48 0 0 0 1.396 4.96L2 22l5.525-1.433a10.124 10.124 0 0 0 4.515 1.03h.001c5.532 0 10.04-4.354 10.04-9.718C22.04 6.354 17.572 2 12.04 2zm0 17.666c-1.366 0-2.707-.362-3.888-1.047l-.278-.165-3.278.857.875-3.193-.18-.293a7.586 7.586 0 0 1-1.2-4.103c0-4.23 3.63-7.666 8.05-7.666s8.05 3.436 8.05 7.666c0 4.23-3.63 7.666-8.05 7.666zm4.41-5.736c-.24-.12-1.42-.698-1.64-.777-.22-.08-.38-.12-.54.12-.16.24-.62.778-.76.938-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.21-.718-.64-1.2-1.422-1.34-1.662-.14-.24-.02-.37.1-.49.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.298-.74-1.777-.2-.48-.4-.42-.54-.42h-.46c-.16 0-.42.06-.64.3s-.84.82-.84 2c0 1.178.86 2.318.98 2.478.12.16 1.7 2.6 4.14 3.64.58.25 1.03.4 1.38.52.58.18 1.1.16 1.5.1.46-.06 1.42-.58 1.62-1.138.2-.56.2-1.04.14-1.138-.06-.1-.22-.16-.46-.28z" />
            </svg>
          </a>
          <p className="text-sm">WhatsApp</p>
        </li>
        <li className="flex flex-col gap-2 items-center">
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="rounded-[2rem]"
              width="50"
              height="50"
              fill="#1877F2"
              viewBox="0 0 24 24"
            >
              <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82V14.708h-3.41v-3.624h3.41V8.413c0-3.38 2.065-5.22 5.084-5.22 1.444 0 2.686.107 3.046.155v3.53l-2.091.001c-1.64 0-1.957.78-1.957 1.924v2.524h3.914l-.51 3.624h-3.404V24h6.676C23.407 24 24 23.407 24 22.676V1.325C24 .593 23.407 0 22.675 0z" />
            </svg>
          </a>
          <p className="text-sm">Facebook</p>
        </li>
        <li className="flex flex-col gap-2 items-center">
          <a
            href={`https://twitter.com/intent/tweet?url=${encodedUrl}`}
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="#1DA1F2"
              viewBox="0 0 24 24"
            >
              <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.724-.949.555-2.003.959-3.127 1.184-.896-.959-2.173-1.555-3.591-1.555-2.717 0-4.917 2.2-4.917 4.917 0 .39.045.765.127 1.124-4.083-.205-7.697-2.159-10.118-5.134-.422.722-.666 1.561-.666 2.475 0 1.708.869 3.213 2.188 4.096-.807-.026-1.566-.248-2.229-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.376 4.6 3.416-1.68 1.318-3.809 2.105-6.102 2.105-.395 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.21 7.557 2.21 9.054 0 14-7.496 14-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
            </svg>
          </a>
          <p className="text-sm">Twitter</p>
        </li>
        <li className="flex flex-col gap-2 items-center">
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 24 24"
            >
              <defs>
                <linearGradient
                  id="instaGrad"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stop-color="#f58529" />
                  <stop offset="25%" stop-color="#dd2a7b" />
                  <stop offset="50%" stop-color="#8134af" />
                  <stop offset="75%" stop-color="#515bd4" />
                  <stop offset="100%" stop-color="#f58529" />
                </linearGradient>
              </defs>
              <path
                fill="url(#instaGrad)"
                d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5z"
              />
              <path
                className="text-textPrimary"
                d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zM17.5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
              />
            </svg>
          </a>
          <p className="text-sm">Instagram</p>
        </li>
        <li className="flex flex-col gap-2 items-center">
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-900"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="rounded-[2rem]"
            >
              <path
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 
      2.239 5 5 5h14c2.761 0 5-2.239 
      5-5v-14c0-2.761-2.239-5-5-5zm-11 
      19h-3v-10h3v10zm-1.5-11.268c-.966 
      0-1.75-.79-1.75-1.764s.784-1.764 
      1.75-1.764 1.75.79 
      1.75 1.764-.784 1.764-1.75 
      1.764zm13.5 11.268h-3v-5.604c0-1.337-.026-3.062-1.867-3.062-1.868 
      0-2.154 1.459-2.154 
      2.968v5.698h-3v-10h2.881v1.367h.041c.401-.761 
      1.379-1.561 2.838-1.561 3.033 
      0 3.594 1.996 3.594 4.59v5.604z"
              />
            </svg>
          </a>
          <p className="text-sm">Linkedin</p>
        </li>
        <li className="flex flex-col gap-2 items-center">
          <a
            href={`https://www.reddit.com/submit?url=${encodedUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 512 512"
              fill="currentColor"
            >
              <path d="M440.5 176.9c-19.3 0-35 15.7-35 35 0 4.9 1 9.6 2.7 13.9-23.5-14.2-56.2-23.4-92.2-25.3l18.3-85.7 59.8 13.1c0 19.3 15.7 35 35 35s35-15.7 35-35-15.7-35-35-35c-13.4 0-25.1 7.5-30.9 18.4l-66.7-14.6c-5.9-1.3-11.7 2.6-12.9 8.5l-20.7 97c-36.7 1.3-70 10.3-94.5 24.6 1.6-4.1 2.5-8.5 2.5-13.1 0-19.3-15.7-35-35-35s-35 15.7-35 35c0 14.6 8.7 27 21.1 32.4-1.1 5.9-1.6 12-1.6 18.2 0 74.7 82.5 135.4 184.5 135.4s184.5-60.7 184.5-135.4c0-6.1-.5-12.1-1.5-17.9 12.2-5.6 20.7-17.8 20.7-32.5 0-19.3-15.7-35-35-35zM148.2 211.9c9.2 0 16.7 7.5 16.7 16.7s-7.5 16.7-16.7 16.7-16.7-7.5-16.7-16.7 7.5-16.7 16.7-16.7zm180.8 112.6c-14.6 14.6-43.1 15.7-72.4 0-6.6-3.3-14.3 3.6-10.9 10.2 18.3 33.6 76 33.8 95.2 0 3.4-6.6-4.2-13.5-11.9-10.2zm-7.5-79.2c9.2 0 16.7 7.5 16.7 16.7s-7.5 16.7-16.7 16.7-16.7-7.5-16.7-16.7 7.5-16.7 16.7-16.7z" />
            </svg>
          </a>
          <p className="text-sm">Reddit</p>
        </li>
      </ul>
    </div>
  );
};

export default ShareButtons;
