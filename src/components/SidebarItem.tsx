import { FC } from 'react';
import Link from 'next/link';

interface SidebarItemProps {
  text: string;
  href?: string;
}

const SidebarItem: FC<SidebarItemProps> = ({ text, href }) => {
  const content = <div className="sidebar-item mb-2">{text}</div>;

  return href ? (
    <Link href={href}>{content}</Link>
  ) : (
    content
  );
};

export default SidebarItem;
