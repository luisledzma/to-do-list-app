import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import LinkTo from "../../LinkTo/LinkTo";
import "./SidebarItem.scoped.scss";

export type SidebarItemProps = {
  text?: string;
  icon?: IconDefinition;
  linkTo?: string;
};

const SidebarItem = ({ text, icon, linkTo }: SidebarItemProps): JSX.Element => {
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // useState, useRef, useContext, etc.
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // useEffect
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Misc Methods
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Callback methods
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Component's render method
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <li>
      <LinkTo
        linkTo={linkTo}
        text={text}
        icon={icon}
        className="flex items-center p-2 rounded-lg dark:text-white dark:hover:bg-background-dark6 group"
      ></LinkTo>
    </li>
  );
};

export default SidebarItem;
