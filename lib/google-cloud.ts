import { Storage } from '@google-cloud/storage';

let storage: Storage;

if (process.env.GOOGLE_CLOUD_STORAGE_KEY) {
  // Using JSON key string (preferred for Vercel deployment)
  const credentials = JSON.parse(process.env.GOOGLE_CLOUD_STORAGE_KEY);
  storage = new Storage({
    projectId: process.env.GOOGLE_CLOUD_PROJECT_ID,
    credentials,
  });
} else if (process.env.GOOGLE_CLOUD_STORAGE_KEY_FILE) {
  // Using key file (fallback for local development)
  storage = new Storage({
    projectId: process.env.GOOGLE_CLOUD_PROJECT_ID,
    keyFilename: process.env.GOOGLE_CLOUD_STORAGE_KEY_FILE,
  });
} else {
  throw new Error('Google Cloud Storage credentials not configured');
}

export const bucket = storage.bucket(process.env.GOOGLE_CLOUD_STORAGE_BUCKET!);

export async function uploadFile(
  buffer: Buffer,
  fileName: string,
  mimeType: string,
  userId: string
): Promise<string> {
  // Create a unique filename with user prefix
  const timestamp = Date.now();
  const uniqueFileName = `${userId}/${timestamp}-${fileName}`;
  
  const file = bucket.file(uniqueFileName);
  
  await file.save(buffer, {
    metadata: {
      contentType: mimeType,
    },
    public: false, // Set to true if you want public access
  });

  // Generate a signed URL for private access (expires in 1 hour)
  const [signedUrl] = await file.getSignedUrl({
    action: 'read',
    expires: Date.now() + 60 * 60 * 1000, // 1 hour
  });

  return signedUrl;
}

export async function getSignedUrl(fileName: string): Promise<string> {
  const file = bucket.file(fileName);
  const [signedUrl] = await file.getSignedUrl({
    action: 'read',
    expires: Date.now() + 60 * 60 * 1000, // 1 hour
  });
  return signedUrl;
}