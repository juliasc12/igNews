import { GetStaticProps } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import { createClient } from '../../services/prismic';
//import Prismic from '@prismicio/client'
import * as Prismic from '@prismicio/client'
import { RichText } from "prismic-reactjs"

import styles from './styles.module.scss';

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  updatedAt: string;
}

interface PostsProps {
  posts: Post[]
}

export default function Posts({ posts }: PostsProps) {
  return (
    <>
      <Head>
        <title> Posts | ig.news </title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          {posts.map(post => (
            <Link legacyBehavior href={`/posts/${post.slug}`}>
              <a href="#" key={post.slug}>
                <time> {post.updatedAt} </time>
                <strong> {post.title} </strong>
                <p> {post.excerpt} </p>
              </a>
            </Link>
          ))}

        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = createClient()

  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'post')
  ], {
    fetch: ['post.title', 'post.content'],
    pageSize: 100,
  }
  )

  const posts = response.results.map(post => {
    return {
      slug: post.uid,
      title: RichText.asText(post.data.title),
      excerpt: post.data.content.find(content => content.type === 'paragraph')?.text ?? '',
      updatedAt: new Date(post.last_publication_date).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      })
    }
  })


  return {
    props: {
      posts
    }
  }
}