import { Link } from "react-router";
import type { MetaFunction } from "react-router";
import { PageLayout } from "../components/editorial/PageLayout";

export const meta: MetaFunction = () => [{ title: "Page introuvable — Kahyl Salhi" }];

export default function NotFound() {
  return (
    <PageLayout>
      <main className="not-found" id="contenu">
        <p className="eyebrow">Erreur / 404</p>
        <h1>Cette page n’existe pas.</h1>
        <Link className="text-link" to="/projets">
          Retour aux projets <span aria-hidden="true">↗</span>
        </Link>
      </main>
    </PageLayout>
  );
}
