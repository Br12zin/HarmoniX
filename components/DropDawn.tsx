import { MenuButton } from "@headlessui/react";
import { MenuItems } from "@headlessui/react";
import { MenuItem } from "@headlessui/react";
import { ChevronDownIcon } from "lucide-react";
import { Menu } from "@headlessui/react";

export default function DropDawn() {
  return (
    <Menu>
      <div className="flex flex-col justify-center absolute ms-96">
        <MenuButton className="flex w-[200px] rounded-full bg-white px-3 py-2 text-sm font-semibold text-black shadow-sm ring-1 ring-inset ring-gray-300 ">
          <span className="flex-grow text-center">Selecione um tipo</span>
          <ChevronDownIcon
            aria-hidden="true"
            className="mr-1 h-5 w-5 rounded-full border-[2px] text-black"
          />
        </MenuButton>
        <MenuItems
          transition
          className="z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 "
        >
          <div className="py-1">
            <MenuItem>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700"
              >
                Account settings
              </a>
            </MenuItem>
            <MenuItem>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700"
              >
                Support
              </a>
            </MenuItem>
            <MenuItem>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700"
              >
                License
              </a>
            </MenuItem>
            <form action="#" method="POST">
              <MenuItem>
                <button
                  type="submit"
                  className="block w-full px-4 py-2 text-left text-sm text-gray-700"
                >
                  Sign out
                </button>
              </MenuItem>
            </form>
          </div>
        </MenuItems>
      </div>
    </Menu>
  );
}
