import { readFile, readdir } from 'fs/promises';
import { join } from 'path';
import matter from 'gray-matter';

const directory = join(process.cwd(), 'content');

export const getDocuments = async () => {
  const fullPath = join(directory);
  return await readdir(fullPath).then(async (files) => {
    const documents = await Promise.all(
      files
        .filter((file) => file.endsWith('md'))
        .map(
          async (file): Promise<MarkdownDocument> =>
            await getDocumentBySlug(file, fullPath),
        ),
    );

    return documents.sort((first, second) => {
      return Number(first.meta?.order) - Number(second.meta?.order);
    });
  });
};

export async function getDocumentBySlug(
  slug: string,
  dir: string = directory,
): Promise<MarkdownDocument> {
  const fullPath = join(dir, slug);
  const fileContents = await readFile(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return { slug: slug.replace('.md', ''), meta: data, content };
}
