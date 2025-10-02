import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route('habilidades', 'routes/components/skills/Skills.tsx'),
] satisfies RouteConfig;
