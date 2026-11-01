import React, { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import Storefront from "./Storefront";
import "./style.css";
import "./brand.css";
import {brand} from "./config";
document.documentElement.dataset.brand=brand.slug;
const Admin = lazy(() => import("./Admin"));
createRoot(document.getElementById("root")).render(
  location.pathname.startsWith("/admin") ? (
    <Suspense
      fallback={
        <div className="boot">
          <span className="boot-mark">G</span>Memuat GalleryGeulis Studio…
        </div>
      }
    >
      <Admin />
    </Suspense>
  ) : (
    <Storefront />
  ),
);
