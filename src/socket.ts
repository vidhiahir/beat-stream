// src/utils/socket.ts
import { io } from 'socket.io-client';
console.log('Initializing socket...');
const socket = io('http://localhost:3000'); // Adjust the URL as needed

export default socket;
