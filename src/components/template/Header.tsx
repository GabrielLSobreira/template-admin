import { Title } from "./Title";

interface HeaderProps {
  title: string;
  subtitle: string;
}

export const Header = (props: HeaderProps) => {
  return (
    <div>
      <Title title={props.title} subtitle={props.subtitle} />
    </div>
  );
};
