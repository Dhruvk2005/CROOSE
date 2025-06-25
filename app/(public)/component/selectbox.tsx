'use client'

import { useState } from 'react'
import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { ChevronUpDownIcon } from '@heroicons/react/16/solid'
import { CheckIcon } from '@heroicons/react/20/solid'
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const people = [
  {
    id: 1,
    name: 'Ghana',
    avatar:
      'GH.png',
  }


]

export default function Selectbox() {
  const [selected, setSelected] = useState(people[0])

  return (
    <Listbox value={selected} onChange={setSelected}>
      <Label className="block text-sm font-medium text-gray-900 mb-2">
        Business Location
      </Label>

      <div className="relative">
        <ListboxButton className="flex items-center w-[435px] h-[44px] p-[16px] gap-[8px] rounded-[12px] border border-gray-300 text-left text-gray-900 bg-white">
          <img
            alt=""
            src={selected?.avatar}
            className="w-5 h-5 rounded-full"
          />
          <span className="truncate text-sm font-normal text-[#667085]">
            {selected?.name}
          </span>


          <ChevronDownIcon
            aria-hidden="true"
            className="ml-auto text-gray-500 w-5 h-5"
          />
        </ListboxButton>
      

      <ListboxOptions
        transition
        className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-hidden data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0 sm:text-sm"
      >
        {people.map((person) => (
          <ListboxOption
            key={person.id}
            value={person}
            className="group relative cursor-default py-2 pr-9 pl-3 text-gray-900 select-none data-focus:bg-indigo-600 data-focus:text-white data-focus:outline-hidden"
          >
            <div className="flex items-center">
              <img alt="" src={person.avatar} className="size-5 shrink-0 rounded-full" />
              <span className="ml-3 block truncate font-normal group-data-selected:font-semibold">{person.name}</span>
            </div>

            <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-not-data-selected:hidden group-data-focus:text-white">
              <CheckIcon aria-hidden="true" className="size-5" />
            </span>
          </ListboxOption>
        ))}
      </ListboxOptions>
    </div>
    </Listbox >
  )
}

