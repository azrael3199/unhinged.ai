import { MessageItem } from './message-item';
import { ChatInput } from './chat-input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useState } from 'react';

interface ChatWindowProps {
  chatId: string | null;
}

interface Message {
  id: string;
  content: string;
  isBot: boolean;
}

export function ChatWindow({ chatId }: ChatWindowProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hi there! I'm your AI assistant. How can I help you today?",
      isBot: true,
    },
  ]);

  const handleSendMessage = (content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      isBot: false,
    };
    
    setMessages((prev) => [...prev, userMessage]);

    // Simulate AI response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "I understand you're interested in that topic. Let me help you explore it further.",
        isBot: true,
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <div className="flex-1 flex flex-col">
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <MessageItem
              key={message.id}
              content={message.content}
              isBot={message.isBot}
            />
          ))}
        </div>
      </ScrollArea>
      <ChatInput onSend={handleSendMessage} />
    </div>
  );
}