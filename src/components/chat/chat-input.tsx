import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { SendHorizontal } from "lucide-react";
import { useState, KeyboardEvent } from "react";

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
}

export function ChatInput({ onSend, disabled }: ChatInputProps) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      onSend(message);
      setMessage("");
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex gap-3 p-4 border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Textarea
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        className="min-h-[52px] max-h-32 resize-none"
        disabled={disabled}
      />
      <Button
        size="icon"
        onClick={handleSend}
        disabled={disabled || !message.trim()}
        className="h-[52px] w-[52px] shrink-0 bg-blue-600 hover:bg-blue-700"
      >
        <SendHorizontal className="h-5 w-5" />
      </Button>
    </div>
  );
}