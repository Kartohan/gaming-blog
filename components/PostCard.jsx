import React from "react";
import moment from "moment";
import Link from "next/link";
import postcss from "postcss";
import Image from "next/image";

import { grpahCMSImageLoader } from "../util";

const PostCard = ({ post }) => {
  return (
    <div className="bg-white shadow-2xl rounded-lg p-0 lg:grid lg:grid-cols-post pb-12 lg:pb-0 mb-8">
      <div className="relative lg:static overflow-hidden shadow-md pb-80 lg:pb-0 mb-6 lg:mb-0">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="object-top absolute lg:static lg:object-center lg:block h-80 lg:h-full w-full lg:w-auto object-cover shadow-lg rounded-lg lg:rounded-lg"
        />
      </div>
      <div className="lg:p-5">
        <h1 className="transition duration-500 text-center mb-5 cursor-pointer hover:text-blue-600 text-3xl font-semibold">
          <Link href={`/post/${post.slug}`}>{post.title}</Link>
        </h1>
        <div className="block flex text-center items-center justify-center mb-4 w-full">
          <div className="flex items-center justify-center mb-4 mb-0 w-auto mr-8">
            <Image
              unoptimized
              loader={grpahCMSImageLoader}
              alt={post.author.name}
              height="30px"
              width="30px"
              className="align-middle rounded-full"
              src={post.author.photo.url}
            />
            <p className="inline align-middle text-gray-700 ml-2 text-lg">
              {post.author.name}
            </p>
          </div>
          <div className="font-medium text-gray-700 flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline mr-2 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span>{moment(post.createdAt).format("DD.MM.YYYY")}</span>
          </div>
        </div>
        <p className="text-center text-gray-700 font-normal lg:text-lg text-base px-4 lg:px-6 mb-4">
          {post.excerpt}
        </p>
        <div className="text-center">
          <Link href={`/post/${post.slug}`}>
            <span className="transition duration-500 transform hover:-translate-y-1 inline-block bg-blue-600 text-base font-medium rounded-full text-white px-8 py-3 cursor-pointer">
              Продовжити читати
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
