// Temporary fix for TypeScript errors
// This file provides type fixes until proper @types packages are installed

// Fix for __dirname
declare const __dirname: string;

// Fix for Buffer
declare const Buffer: {
  from(data: string, encoding?: string): Buffer;
  toString(encoding?: string): string;
  length: number;
};

// Extended Message interface for sessionController
declare module '@wppconnect-team/wppconnect' {
  interface Message {
    type: string;
    mimetype?: string;
    filename?: string;
    timestamp?: number;
    title?: string;
    pageCount?: number;
    documentInfo?: {
      title?: string;
      pageCount?: number;
      fileExtension?: string;
    };
  }
}
