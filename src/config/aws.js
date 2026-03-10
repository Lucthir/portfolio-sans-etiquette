export const AWS_CONFIG = {
    S3_URL: process.env.REACT_APP_S3_URL,
    CDN_URL: process.env.REACT_APP_CDN_URL,
    BUCKET_NAME: process.env.REACT_APP_BUCKET_NAME,
    REGION: process.env.REACT_APP_REGION,
};
// Liste les "dossiers" dans un préfixe S3 via l'API XML publique
export async function listS3Folders(prefix) {
    const url = `${AWS_CONFIG.S3_URL}/?list-type=2&prefix=${prefix}&delimiter=/`;
    const res = await fetch(url);
    const text = await res.text();
    const xml = new DOMParser().parseFromString(text, 'application/xml');

    return [...xml.querySelectorAll('CommonPrefixes Prefix')].map((node) =>
        node.textContent.replace(prefix, '').replace('/', '')
    );
}

// Liste les fichiers dans un dossier S3
export async function listS3Files(prefix) {
    const url = `${AWS_CONFIG.S3_URL}/?list-type=2&prefix=${prefix}`;
    const res = await fetch(url);
    const text = await res.text();
    const xml = new DOMParser().parseFromString(text, 'application/xml');

    return [...xml.querySelectorAll('Contents Key')]
        .map((node) => node.textContent)
        .filter((key) => !key.endsWith('/'))
        .map((key) => `${AWS_CONFIG.CDN_URL}/${key}`);
}

export async function getProjectMeta(type, projectSlug) {
    const url = `${AWS_CONFIG.CDN_URL}/gallery/${type}/${projectSlug}/metadata.json`;
    const res = await fetch(url);
    return res.json(); // { title, cover, description }
}