"use client";
import React, { useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type Option = { label: string; value: string };

const colorOptions: Option[] = [
  { label: "Black", value: "black" },
  { label: "Navy", value: "navy" },
  { label: "White", value: "white" },
  { label: "Red", value: "red" },
  { label: "Camo", value: "camo" },
];

const styleOptions: Option[] = [
  { label: "Signature", value: "signature" },
  { label: "Baseball", value: "baseball" },
  { label: "Fashion", value: "fashion" },
  { label: "Leisure", value: "leisure" },
  { label: "Sport", value: "sport" },
  { label: "Industrial", value: "industrial" },
  { label: "Camo", value: "camo" },
  { label: "Kids", value: "kids" },
  { label: "Winter", value: "winter" },
];

const fabricOptions: Option[] = [
  { label: "Cotton", value: "cotton" },
  { label: "Polyester", value: "polyester" },
  { label: "Mesh", value: "mesh" },
  { label: "Wool", value: "wool" },
];

const closureOptions: Option[] = [
  { label: "Snapback", value: "snapback" },
  { label: "Strapback", value: "strapback" },
  { label: "Velcro", value: "velcro" },
  { label: "Fitted", value: "fitted" },
];

function useMultiParam(key: string): [string[], (next: string[]) => void] {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const selected = useMemo(() => {
    const raw = searchParams.get(key);
    if (!raw) return [];
    return raw.split(",").filter(Boolean);
  }, [searchParams, key]);

  const setSelected = (next: string[]) => {
    const params = new URLSearchParams(searchParams.toString());
    if (next.length) {
      params.set(key, Array.from(new Set(next)).join(","));
    } else {
      params.delete(key);
    }
    // Always reset page on filter change (if you add pagination later)
    params.delete("page");
    router.replace(`${pathname}?${params.toString()}`);
  };

  return [selected, setSelected];
}

function CheckboxGroup({
  title,
  options,
  paramKey,
}: {
  title: string;
  options: Option[];
  paramKey: string;
}) {
  const [selected, setSelected] = useMultiParam(paramKey);
  const toggle = (val: string) => {
    if (selected.includes(val)) setSelected(selected.filter((v) => v !== val));
    else setSelected([...selected, val]);
  };

  return (
    <div className="mb-6">
      <h4 className="text-sm font-semibold text-[#393939] mb-3">{title}</h4>
      <div className="grid grid-cols-2 gap-2">
        {options.map((opt) => (
          <label key={opt.value} className="flex items-center gap-2 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={selected.includes(opt.value)}
              onChange={() => toggle(opt.value)}
              className="h-4 w-4 rounded border-[#8E857B] text-[#393939] focus:ring-[#393939]"
            />
            <span className="text-sm text-[#393939]">{opt.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default function CategoryFilters() {
  return (
    <aside className="bg-[#E7E3D7] border border-[#8E857B]/40 rounded-xl p-4">
      <h3 className="text-base font-bold text-[#393939] mb-4">Filters</h3>
      <CheckboxGroup title="Colour" options={colorOptions} paramKey="color" />
      <CheckboxGroup title="Styles" options={styleOptions} paramKey="style" />
      <CheckboxGroup title="Fabric" options={fabricOptions} paramKey="fabric" />
      <CheckboxGroup title="Cap Closures" options={closureOptions} paramKey="closure" />
    </aside>
  );
}
