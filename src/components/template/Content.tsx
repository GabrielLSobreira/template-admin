interface ContentProps {
  children?: any;
}

export const Content = (props: ContentProps) => {
  return (
    <div
      className={`
      flex flex-col mt-7 dark:text-gray-200
  `}
    >
      {props.children}
    </div>
  );
};
