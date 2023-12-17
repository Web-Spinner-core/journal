import { FC, ReactNode } from 'react';

interface ContentProps {
  children: ReactNode;
}

const Content: FC<ContentProps> = ({ children }) => {
  return <div className="content w-3/4 p-6">{children}</div>;
};

export default Content;
