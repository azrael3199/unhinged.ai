import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ChatListProps {
  selectedChat: string | null;
  onSelectChat: (chatId: string) => void;
}

export function ChatList({ selectedChat, onSelectChat }: ChatListProps) {
  // Simulated chat list
  const chats = [
    { id: '1', title: 'AI Basics Discussion' },
    { id: '2', title: 'Code Review Help' },
    { id: '3', title: 'Creative Writing' },
  ];

  return (
    <ScrollArea className="flex-1">
      <div className="p-2 space-y-2">
        {chats.map((chat) => (
          <Button
            key={chat.id}
            variant="ghost"
            className={cn(
              'w-full justify-start',
              selectedChat === chat.id && 'bg-accent'
            )}
            onClick={() => onSelectChat(chat.id)}
          >
            <MessageSquare className="mr-2 h-4 w-4" />
            <span className="truncate">{chat.title}</span>
          </Button>
        ))}
      </div>
    </ScrollArea>
  );
}