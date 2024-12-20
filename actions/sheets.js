'use server';

import { google } from "googleapis";

// Function to authenticate Google Sheets API
export async function getGsCreds() {
  try {
    // Create a JWT client for Google Sheets API
    const client = new google.auth.JWT(
      process.env.GOOGLE_CLIENT_EMAIL,
      null,
      process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'), // Fix newlines in private key
      ['https://www.googleapis.com/auth/spreadsheets']
    );

    // Return Google Sheets API instance with the authenticated client
    const gsapi = google.sheets({ version: 'v4', auth: client });
    return gsapi;
  } catch (error) {
    console.error("Error authorizing Google Sheets API:", error);
    return false;
  }
}

// Function to insert new order data
export async function insertNewOrder(data) {
  const client = await getGsCreds();

  if (!client) {
    console.error("Failed to initialize Google Sheets client");
    return false;
  }

  const formattedDate = new Date().toLocaleString('en-GB', { day: '2-digit', month: '2-digit', year: '2-digit', hour: '2-digit', minute: '2-digit' }).replace(',', '');

  try {
    // Append new data (example row)
    const newData = {
      values: [
        [
          data.name,
          data.customer_email,
          data.address,
          data.challenge,
          data.amount,
          data.status,
          formattedDate,
          data.stripe_id
        ],
      ],
    };

    client.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'Orders!A2:H', // Append rows starting from column A
      valueInputOption: 'RAW',
      insertDataOption: 'INSERT_ROWS',
      resource: newData,
    });

    return true;
  } catch (error) {
    console.error("Error inserting new order:", error);
    return false;
  }
}
