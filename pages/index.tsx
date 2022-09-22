import type { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import Sidebar from "../components/sidebar";

import { getDirectories } from "../lib/documents";
import formatTitle from "../lib/format-title";

export default function Home({ workshops }: { workshops: string[] }) {
  return (
    <div className="m-8">
      <Head>
        <title>Steve's Workshops</title>
      </Head>

      <section className="flex flex-col gap-8">
        <h2 className="mb-4 text-2xl font-bold">Workshop Curricula</h2>
        <section className="grid grid-cols-1 gap-4 md:grid md:grid-flow-row md:grid-cols-4 lg:grid-cols-1">
          {workshops.map((workshop) => {
            return (
              <Link href={`/${workshop}`}>
                <a className="group block border-2 border-slate-700 bg-slate-50 p-4 transition-all hover:bg-cyan-100 hover:shadow-md">
                  <article>
                    <h3 className="font-semibold text-slate-600">
                      {formatTitle(workshop)}
                    </h3>
                  </article>
                </a>
              </Link>
            );
          })}
        </section>
        <Sidebar />
      </section>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const workshops = await getDirectories();

  return {
    props: { workshops },
  };
};
