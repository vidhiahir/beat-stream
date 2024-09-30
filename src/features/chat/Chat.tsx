// src/components/Chat.tsx
import React, { useEffect, useState } from 'react';
import socket from '../../socket';

const Chat = () => {
	const [messages, setMessages] = useState<{ from: string; content: string }[]>([]);
	const [input, setInput] = useState('');

	useEffect(() => {
		console.log('Chat component mounted');
		socket.on('receiveMessage', (message) => {
			console.log('Received message:', message);
			setMessages((prev) => [...prev, message]);
		});

		return () => {
			console.log('Cleaning up socket listener');
			socket.off('receiveMessage');
		};
	}, []);

	const sendMessage = (e: React.FormEvent) => {
		e.preventDefault();
		if (input.trim()) {
			const message = { from: 'User', content: input };
			socket.emit('sendMessage', { roomId: 'your-room-id', ...message });
			setMessages((prev) => [...prev, message]);
			setInput('');
		}
	};

	return (
		<div className="flex flex-col w-full max-w-xl mx-auto border border-gray-300 rounded-lg shadow-lg overflow-hidden">
			<div className="flex-1 p-4 bg-gray-100 overflow-y-auto">
				{messages.map((msg, index) => (
					<div key={index} className="mb-2 p-2 rounded bg-blue-100">
						<strong className="text-blue-600">{msg.from}:</strong> {msg.content}
					</div>
				))}
			</div>
			<form className="flex border-t border-gray-300 p-2 bg-white" onSubmit={sendMessage}>
				<input
					type="text"
					value={input}
					onChange={(e) => setInput(e.target.value)}
					placeholder="Type your message..."
					required
					className="flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
				/>
				<button
					type="submit"
					className="ml-2 px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-500 focus:outline-none"
				>
					Send
				</button>
			</form>
		</div>
	);
};

export default Chat;
