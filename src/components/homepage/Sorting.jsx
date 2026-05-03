"use client";

import { Label, ListBox, Select } from "@heroui/react";

export function Sort({ sortType, setSortType }) {
  return (
    <div className="flex flex-col gap-2 md:w-[260px]">
      <Label className=" font-semibold text-gray-700">
        Sort by Price:
      </Label>

      <Select
        value={sortType || null}
        onChange={(value) => setSortType(value ?? "")}
        placeholder="Select sorting"
        variant="secondary"
        className="rounded-2xl border border-green-200 bg-white shadow-sm"
      >
        <Select.Trigger className="px-4 py-2">
          <Select.Value />
          <Select.Indicator />
        </Select.Trigger>

        <Select.Popover>
          <ListBox className="bg-white p-2 rounded-2xl shadow-lg">
            <ListBox.Item
              id="ascending"
              textValue="Ascending"
              className="cursor-pointer rounded-xl px-3 py-2 text-sm hover:bg-green-100"
            >
              Price: Low → High
              <ListBox.ItemIndicator />
            </ListBox.Item>

            <ListBox.Item
              id="descending"
              textValue="Descending"
              className="cursor-pointer rounded-xl px-3 py-2 text-sm hover:bg-green-100"
            >
              Price: High → Low
              <ListBox.ItemIndicator />
            </ListBox.Item>
          </ListBox>
        </Select.Popover>
      </Select>
    </div>
  );
}