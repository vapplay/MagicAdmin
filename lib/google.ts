
import { google } from 'googleapis';

const GOOGLE_SERVICE_ACCOUNT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');

// Configure the Android Publisher API
const androidPublisher = google.androidpublisher('v3');

/**
 * Checks the status of a subscription purchase on Google Play.
 * @param packageName The Android package name (e.g. com.example.app)
 * @param subscriptionId The product ID of the subscription (e.g. premium_monthly)
 * @param token The purchase token provided by the device
 */
export async function verifyGoogleSubscription(
    packageName: string,
    subscriptionId: string,
    token: string
) {
    if (!GOOGLE_SERVICE_ACCOUNT_EMAIL || !GOOGLE_PRIVATE_KEY) {
        console.error("Missing Google Service Account credentials");
        throw new Error("Server configuration error: Missing Google Credentials");
    }

    const auth = new google.auth.JWT({
        email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
        key: GOOGLE_PRIVATE_KEY,
        scopes: ['https://www.googleapis.com/auth/androidpublisher'],
    });

    try {
        await auth.authorize();

        const res = await androidPublisher.purchases.subscriptions.get({
            auth,
            packageName,
            subscriptionId,
            token,
        });

        return res.data;
    } catch (error: any) {
        console.error("Error verifying subscription with Google:", error?.message || error);
        throw error;
    }
}
