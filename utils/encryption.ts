import CryptoJS from "crypto-js";

const ENCRYPTION_KEY = process.env.NEXT_PUBLIC_ENCRYPTION_KEY || "";

function checkKey() {
  if (!ENCRYPTION_KEY) {
    console.error("ENCRYPTION_KEY is not set");
    throw new Error("ENCRYPTION_KEY is not set");
  }
}

export function encrypt(text: string): string {
  checkKey();
  return CryptoJS.AES.encrypt(text, ENCRYPTION_KEY).toString();
}

export function decrypt(ciphertext: string): string {
  checkKey();
  const bytes = CryptoJS.AES.decrypt(ciphertext, ENCRYPTION_KEY);
  return bytes.toString(CryptoJS.enc.Utf8);
}
