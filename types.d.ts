declare module 'express-query-boolean';
declare module 'json-mapper-json';

// Node.js global types
declare const __dirname: string;
declare const Buffer: {
  from(data: string, encoding?: string): Buffer;
};

// Extended Message interface for WPPConnect
declare module '@wppconnect-team/wppconnect' {
  interface Message {
    type: string;
    mimetype?: string;
    filename?: string;
    timestamp?: number;
    title?: string;
    pageCount?: number;
    documentInfo?: any;
  }
}
