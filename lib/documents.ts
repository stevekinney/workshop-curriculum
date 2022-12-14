import { readFile, readdir } from 'fs/promises';
import { join } from 'path';
import matter from 'gray-matter';

const contentDirectory = join(process.cwd(), 'content');

export const getDirectories = async () => {
  const directories = await readdir(contentDirectory);
  return directories;
};

export const getDocuments = async (directory: string) => {
  const fullPath = join(contentDirectory, directory);

  return await readdir(fullPath).then(async (files) => {
    return await Promise.all(
      files
        .filter((file) => file.endsWith('md'))
        .map((file) => getDocumentBySlug(directory, file)),
    );
  });
};

export async function getDocumentBySlug(
  directory: string,
  slug: string,
): Promise<MarkdownDocument> {
  const fullPath = join(contentDirectory, directory, slug);
  const fileContents = await readFile(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return { slug: slug.replace('.md', ''), meta: data, content };
}
