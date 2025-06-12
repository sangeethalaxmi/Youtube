import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

const DropDown = ({
  buttonLabel,
  buttonClass = "p-2 cursor-pointer",
  menuItems = [],
  menuClass,
  ...props
}) => {
  return (
    <div>
      <Menu>
        <MenuButton className={buttonClass}>{buttonLabel}</MenuButton>

        <MenuItems
          transition
          anchor="bottom end"
          className={
            "  bg-secondary rounded-xl border border-white/5  p-1 text-sm/6 text-textPrimary transition duration-100 ease-out [--anchor-gap:--spacing(1)] focus:outline-none data-closed:scale-95 data-closed:opacity-0 " +
            menuClass
          }
        >
          {menuItems.length > 0 &&
            menuItems.map((menu) => {
              return (
                <MenuItem key={menu}>
                  <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10">
                    {menu}
                  </button>
                </MenuItem>
              );
            })}
        </MenuItems>
      </Menu>
    </div>
  );
};
export default DropDown;
