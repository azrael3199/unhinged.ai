import { cn } from "@/lib/utils";
import { Bot, User } from "lucide-react";

interface MessageItemProps {
  content: string;
  isBot?: boolean;
}

export function MessageItem({ content, isBot = false }: MessageItemProps) {
  return (
    <div
      className={cn(
        "flex w-full gap-4 py-8 px-6",
        isBot ? "bg-accent/40" : ""
      )}
    >
      <div
        className={cn(
          "flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-md gradient-border",
          isBot ? "bg-blue-600/10" : "bg-purple-600/10"
        )}
      >
        {isBot ? (
          <Bot className="h-4 w-4 text-blue-500" />
        ) : (
          <User className="h-4 w-4 text-purple-500" />
        )}
      </div>
      <div className="flex-1 space-y-2">
        <p className="leading-relaxed text-base">{content}</p>
      </div>
    </div>
  );
}