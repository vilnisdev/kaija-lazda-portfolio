import { pdf } from 'pdf-to-img';
import sharp from 'sharp';
import { mkdir, writeFile, readdir } from 'fs/promises';
import { join, dirname, basename, extname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const assetsDir = join(__dirname, 'src/assets');

// PDFs to convert (new ones)
const pdfsToConvert = [
    'Priecīgus Ziemassvētkus red.pdf',
    'Priecīus Līgo Svētus (1).pdf',
    'lv rep diena flag flat (1).pdf',
    'rtu sticker sketch ideas.pdf',
    'zinibu 1.pdf'
];

async function convertPdfToWebp(pdfName) {
    const pdfPath = join(assetsDir, pdfName);
    const baseName = basename(pdfName, extname(pdfName))
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');
    const outputDir = join(assetsDir, `${baseName}-pages`);

    await mkdir(outputDir, { recursive: true });

    console.log(`\nConverting: ${pdfName}`);
    console.log(`Output: ${outputDir}`);

    let pageNumber = 1;
    const document = await pdf(pdfPath, { scale: 2 });

    for await (const image of document) {
        const outputPath = join(outputDir, `page-${String(pageNumber).padStart(2, '0')}.webp`);

        await sharp(image)
            .webp({ quality: 85 })
            .toFile(outputPath);

        console.log(`  ✓ Page ${pageNumber}`);
        pageNumber++;
    }

    console.log(`  Done! ${pageNumber - 1} pages converted.`);
    return pageNumber - 1;
}

async function main() {
    console.log('Converting PDFs to WebP images...\n');

    let totalPages = 0;
    for (const pdfName of pdfsToConvert) {
        try {
            const pages = await convertPdfToWebp(pdfName);
            totalPages += pages;
        } catch (err) {
            console.error(`  Error converting ${pdfName}:`, err.message);
        }
    }

    console.log(`\n✓ All done! Converted ${totalPages} total pages.`);
}

main().catch(console.error);
