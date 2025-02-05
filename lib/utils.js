import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function getChallengeEndDate(openDate, purchaseTimestamp, duration) {
  const open = new Date(openDate);
  const purchase = new Date(purchaseTimestamp * 1000);

  const baseDate = purchase > open ? purchase : open;

  const endDate = new Date(baseDate);

  switch (duration.unit) {
    case 'days':
      endDate.setDate(endDate.getDate() + parseInt(duration.quantity)); // Use setDate() for days
      break;
    case 'months':
      endDate.setMonth(endDate.getMonth() + parseInt(duration.quantity)); // Use setMonth() for months
      break;
    default:
      throw new Error('Invalid duration unit'); // Handle unknown units
  }

  endDate.setHours(23, 59, 59, 999);

  return Math.round(endDate.getTime() / 1000);
}

export function daysUntilDeadline(deadline) {
  const deadlineDate = new Date(deadline * 1000);
  const currentDate = new Date();
  const timeDifference = deadlineDate - currentDate;
  const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
  return daysLeft;
}

export function getStartDate(purchaseDate, challengeStartDate) {
  const purchaseDateObj = new Date(purchaseDate * 1000);
  const challengeStartDateObj = new Date(challengeStartDate);

  const startDate = purchaseDateObj > challengeStartDateObj ? purchaseDateObj : challengeStartDateObj;

  return Math.floor(startDate.getTime() / 1000);
}
