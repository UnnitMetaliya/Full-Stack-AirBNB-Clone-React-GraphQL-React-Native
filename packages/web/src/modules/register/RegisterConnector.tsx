import * as React from "react";
import { RegisterView } from "./ui/RegisterView";

/*
modules is where we are gonna store our whole directory structure. Components and what not

Why this is called RegisterConnector?

Usually, what you have is, you have container > view. A container passing information to view componenet. View is purely presentational. It doesn't have any functionality. Container controls how we get data, what to do on data change etc. 

Now, for this app, there's one part where we need a middle piece as we are using both React and React Native. 

So, we will have container > connector > view 
A container feeds connector which decides which view gets selected.
So, the view will be different in react and react native. But, connector is something we will share.
Connector is where we're gonna put GraphQL query and mutation and stuff. And, we will try connector connect both react and react native views.

Naming convention: controller -> connector -> view

*/

export const RegisterConnector = () => <RegisterView />;
