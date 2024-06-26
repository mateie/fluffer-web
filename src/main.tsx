import "./index.css";

import { createRoot } from "react-dom/client";

import MainProvider from "./providers/MainProvider.tsx";

const container = document.getElementById("app");
const root = createRoot(container!);

root.render(MainProvider);
