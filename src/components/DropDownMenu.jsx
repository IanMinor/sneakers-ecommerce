import { ChevronDown } from "lucide-react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from "@heroui/dropdown";

import { Button } from "@heroui/react";

function DropDownMenu({ title }) {
  return (
    <Dropdown>
      <DropdownTrigger className="flex items-center justify-center gap-1 font-semibold text-black cursor-pointer">
        <Button>
          {title}
          <ChevronDown className="w-4 h-4" />
        </Button>
      </DropdownTrigger>
      <DropdownMenu className="bg-white border border-gray-200 rounded-md shadow-lg px-5">
        <DropdownSection>
          <DropdownItem
            as="div"
            className="w-full px-4 py-2 rounded hover:bg-gray-100 cursor-pointer"
          >
            Sneakers
          </DropdownItem>
          <DropdownItem className="w-full px-4 py-2 rounded hover:bg-gray-100 cursor-pointer">
            Running
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
}

export default DropDownMenu;
