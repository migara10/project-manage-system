import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import "./App.css";
import NavBar from "./pages/NavBar/NavBar";

function App() {
  return (
    <>
      <Button>Click me</Button>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <NavBar />
    </>
   
  );
}

export default App;
