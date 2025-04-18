import "./bootstrap";
import "../css/app.css";
import axios from 'axios'; // Import Axios
import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import store from "./app/store/store";
import { Provider } from "react-redux";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

// Set CSRF token globally for Axios requests
axios.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

// Get CSRF token from the cookie and set it in the headers
const csrfToken = document.head.querySelector('meta[name="csrf-token"]')?.content;

if (csrfToken) {
    axios.defaults.headers.common['X-XSRF-TOKEN'] = csrfToken;
}

// Create Inertia app
createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./app/pages/${name}.jsx`,
            import.meta.glob("./app/pages/**/*.jsx")
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <Provider store={store}>
                <App {...props} />
            </Provider>
        );
    },
    progress: {
        color: "#4B5563",
    },
});
