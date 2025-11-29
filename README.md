🚀 VibeCoding Launch Protocol

1. Start the Emulator

Open Android Studio.

Click Virtual Device Manager (Phone icon).

Press Play (▶) on your Pixel 8.

2. Start the Metro Server (The "Radio")

Open VS Code Terminal 1:

cd VibeCoding
npm start


Keep this running! It sends code updates to the phone.

3. Launch the App

Open VS Code Terminal 2 (Split or New Tab):

cd VibeCoding
npx react-native run-android


Run this whenever you open the project for the day.

4. Workflow Tips

Edit Code: Just save (Ctrl+S). The phone updates automatically.

Reload App: Press r in the Metro Terminal (Terminal 1).

Dev Menu: Press d in the Metro Terminal (Terminal 1).
