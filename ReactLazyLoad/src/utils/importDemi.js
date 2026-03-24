import { lazy } from "react";

export default function inportDemo(file) {
    return lazy(() => import(`../components/${file}`))
}