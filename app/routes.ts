import { route, type RouteConfig } from "@react-router/dev/routes";

export default [
  route("/", "routes/home.tsx"),
  route("/projets", "routes/projects.tsx"),
  route("/projets/:slug", "routes/project-detail.tsx"),
  route("/profil", "routes/profile.tsx"),
  route("/veille-technologique", "routes/technology-watch.tsx"),
  route("/ecole", "routes/school.tsx"),
  route("/contact", "routes/contact.tsx"),
  route("*", "routes/not-found.tsx"),
] satisfies RouteConfig;
