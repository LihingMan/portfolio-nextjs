import React, { FunctionComponent, useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { NextPage } from "next";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface ContainerBlockI {
  children?: any;
  customMeta?: any;
}

interface MetaI {
  title: string;
  description: string;
  image: string;
  type: string;
  date?: string;
  customMeta?: any;
}

const ContainerBlock: FunctionComponent<ContainerBlockI> = ({
  children,
  ...customMeta
}) => {
  const router = useRouter();

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const meta: MetaI = {
    title: "Bryan Lee",
    description:
      "I am an experienced backend developer fluent in creating performant server side applications in Django and Node.js",
    image: "/avatar.png",
    type: "website",
    date: "25-01-2022",
    ...customMeta,
  };

  return (
    <>
      {mounted && (
        <div>
          <Head>
            <title>{meta.title}</title>
            <meta name="robots" content="follow, index" />
            <meta content={meta.description} name="description" />
            <meta
              property="og:url"
              content={`https://www.linkedin.com/in/hsiu-wei-lee-bryan-1256571ab${router.asPath}`}
            />
            <meta
              property="og:url"
              content={`https://github.com/LihingMan${router.asPath}`}
            />
            <meta property="og:type" content={meta.type} />
            <meta property="og:site_name" content="Bryan Lee" />
            <meta property="og:description" content={meta.title} />
            <meta property="og:image" content={meta.image} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@BLeeve100" />
            <meta name="twitter:title" content={meta.title} />
            <meta name="twitter:description" content={meta.description} />
            <meta name="twitter:image" content={meta.image} />
            {meta.date && (
              <meta property="article:published_time" content={meta.date} />
            )}
          </Head>
          <main className="dark:bg-white-800 w-full">
            <Navbar />
            <div>{children}</div>
            <Footer />
          </main>
        </div>
      )}
    </>
  );
};
export default ContainerBlock;
