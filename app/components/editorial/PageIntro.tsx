interface PageIntroProps {
  index: string;
  title: string;
  description: string;
}

export function PageIntro({ index, title, description }: PageIntroProps) {
  return (
    <header className="page-intro">
      <p className="eyebrow">{index} / Portfolio</p>
      <h1>{title}</h1>
      <p className="page-intro__description">{description}</p>
    </header>
  );
}
