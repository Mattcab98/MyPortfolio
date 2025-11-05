import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route('nosotros', 'routes/components/about/About.tsx'),

] satisfies RouteConfig;
