import { useState } from 'react';
import { ChatList } from '@/components/chat/chat-list';
import { ChatWindow } from '@/components/chat/chat-window';
import { UserSettings } from '@/components/settings/user-settings';
import { Button } from '@/components/ui/button';
import { Settings, Plus } from 'lucide-react';
import { Brain } from 'lucide-react';

export function ChatPage() {
  const [showSettings, setShowSettings] = useState(false);
  const [selectedChat, setSelectedChat] = useState<string | null>(null);

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <div className="w-64 border-r flex flex-col">
        <div className="h-14 border-b flex items-center px-4 gap-2">
          <Brain className="h-6 w-6 text-blue-500" />
          <h1 className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 font-['Space_Grotesk']">
            Unhinged.ai
          </h1>
        </div>
        <div className="p-2">
          <Button className="w-full justify-start" variant="outline">
            <Plus className="mr-2 h-4 w-4" />
            New Chat
          </Button>
        </div>
        <ChatList
          selectedChat={selectedChat}
          onSelectChat={setSelectedChat}
        />
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        <div className="h-14 border-b flex items-center justify-between px-4">
          <h2 className="font-semibold">
            {selectedChat ? 'Chat #' + selectedChat : 'New Chat'}
          </h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setShowSettings(true)}
          >
            <Settings className="h-5 w-5" />
          </Button>
        </div>
        <ChatWindow chatId={selectedChat} />
      </div>

      <UserSettings open={showSettings} onOpenChange={setShowSettings} />
    </div>
  );
}