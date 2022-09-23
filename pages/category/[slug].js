import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { getCategories, getCategoryPost } from "../../services";
import { PostCard, Categories, Loader } from "../../components";

const CategoryPost = ({ posts }) => {
  const router = useRouter();
  const { slug } = router.query;

  if (router.isFallback) {
    return <Loader />;
  }

  const reversePosts = () => {
    const finalPosts = [...categoryPosts];
    return finalPosts.reverse();
  };

  const [categoryPosts, setCategoryPosts] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    getCategoryPost(slug).then((result) => {
      setCategoryPosts(result);
      setDataLoaded(true);
    });
  }, []);

  return (
    <div className="container mx-auto px-4 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          {dataLoaded &&
            reversePosts().map((post, index) => (
              <PostCard key={index} post={post.node} />
            ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CategoryPost;

// Fetch data at build time
export async function getStaticProps({ params }) {
  const posts = await getCategoryPost(params.slug);

  return {
    props: { posts },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}
