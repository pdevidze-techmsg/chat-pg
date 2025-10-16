"use client";

import { RealtimeChat } from "@/components/realtime-chat";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useLocalStorageState from "use-local-storage-state";

const DEFAULT_USERNAME = "Anonymous";
const DEFAULT_ROOM = "Test";

export default function Home() {
  const [username, setUsername] = useLocalStorageState("chat-username", {
    defaultValue: DEFAULT_USERNAME,
  });
  const [room, setRoom] = useLocalStorageState("my-room", {
    defaultValue: DEFAULT_ROOM,
  });

  return (
    <div className="flex flex-col gap-2 p-4 flex-1 max-w-120 w-full">
      <RealtimeChat roomName={room} username={username} />

      <div className="flex w-full gap-3">
        <div className="flex w-full flex-col gap-2">
          <Label htmlFor="room">Room name</Label>
          <Input
            id="room"
            placeholder="Type room name here..."
            value={room}
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
        </div>
        <div className="flex w-full flex-col gap-2">
          <Label htmlFor="username">Your username</Label>
          <Input
            id="username"
            placeholder="Type your username here..."
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
}
