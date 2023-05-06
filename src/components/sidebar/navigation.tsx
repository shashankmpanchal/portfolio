import { motion } from "framer-motion";
import { MenuItem } from "./menuItem";

export interface MenuProps {
  title: string;
  url: string;
  icon?: string;
}

const Menu: MenuProps[] = [{
  title: 'About',
  url: '/about'
}, {
  title: 'Project',
  url: '/project'
}, {
  title: 'Skill',
  url: '/skill'
}, {
  title: 'Education',
  url: '/education'
}, {
  title: 'Contact',
  url: '/contact'
}]

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const Navigation = () => (
  <motion.ul variants={variants}>
    {Menu.map((menu) => (
      <MenuItem key={menu.title} menu={menu} />
    ))}
  </motion.ul>
);

const itemIds = [0, 1, 2, 3, 4];
