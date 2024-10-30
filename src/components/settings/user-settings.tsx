import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { useAuth } from "@/contexts/auth-context";
import { LogOut, User, Bell, Shield } from "lucide-react";

interface UserSettingsProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function UserSettings({ open, onOpenChange }: UserSettingsProps) {
  const { user, logout } = useAuth();

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-[400px] sm:w-[540px]">
        <SheetHeader>
          <SheetTitle>Settings</SheetTitle>
        </SheetHeader>
        <div className="py-6 space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium flex items-center gap-2">
              <User className="h-5 w-5" />
              Profile
            </h3>
            <div className="space-y-4">
              <div>
                <Label>Email</Label>
                <p className="text-sm text-muted-foreground">{user?.email}</p>
              </div>
            </div>
          </div>
          <Separator />
          <div className="space-y-4">
            <h3 className="text-lg font-medium flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Notifications
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="email-notifications">Email notifications</Label>
                <Switch id="email-notifications" />
              </div>
            </div>
          </div>
          <Separator />
          <div className="space-y-4">
            <h3 className="text-lg font-medium flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Privacy
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="history">Save chat history</Label>
                <Switch id="history" defaultChecked />
              </div>
            </div>
          </div>
          <Separator />
          <Button
            variant="destructive"
            className="w-full"
            onClick={logout}
          >
            <LogOut className="mr-2 h-4 w-4" />
            Sign Out
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}