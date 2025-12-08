
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const R2_ENDPOINT = process.env.R2_ENDPOINT

// Ensure these are set in your .env file
const R2_ACCESS_KEY_ID = process.env.R2_ACCESS_KEY_ID || "";
const R2_SECRET_ACCESS_KEY = process.env.R2_SECRET_ACCESS_KEY || "";

const s3Client = new S3Client({
    region: "auto",
    endpoint: R2_ENDPOINT,
    credentials: {
        accessKeyId: R2_ACCESS_KEY_ID,
        secretAccessKey: R2_SECRET_ACCESS_KEY,
    },
});

type UploadBucket = "song-es" | "song-en" | "images" | "song-pt";

export async function uploadFileToR2(file: File, bucket: UploadBucket, customName?: string): Promise<string> {
    const buffer = Buffer.from(await file.arrayBuffer());
    const fileName = customName || `${Date.now()}-${file.name.replace(/\s+/g, '-')}`;

    // Create a new file name that will be safe for URLs

    await s3Client.send(new PutObjectCommand({
        Bucket: bucket,
        Key: fileName,
        Body: buffer,
        ContentType: file.type,
    }));

    // Return the fileName to be stored in the database
    // The public URL prefix will be handled by the frontend configuration
    return fileName;
}
