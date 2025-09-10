// import SignUp from "@/views/SignUp";
import Login from "@/views/Login";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/signup")({
  // component: SignUp,  
  component: Login,
});
