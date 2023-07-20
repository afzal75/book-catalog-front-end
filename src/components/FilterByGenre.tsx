import { Select, Option } from "@material-tailwind/react";
 
export default function FilterByGenre() {
  return (
    <div className="w-full md:w-72">
      <Select label="Filter By Genre">
        <Option>Material Tailwind HTML</Option>
        <Option>Material Tailwind React</Option>
        <Option>Material Tailwind Vue</Option>
        <Option>Material Tailwind Angular</Option>
        <Option>Material Tailwind Svelte</Option>
      </Select>
    </div>
  );
}