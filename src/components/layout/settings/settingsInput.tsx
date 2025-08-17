import { Input } from "../../ui/input";
import { Label } from "../../ui/label";

interface SettingsInputProps {
  id: string;
  label: string;
  defaultValue?: string;
  type?: string;
}

export function SettingsInput({ id, label, defaultValue, type = "text" }: SettingsInputProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-sm font-medium text-gray-700">
        {label}
      </Label>
      <Input
        id={id}
        type={type}
        defaultValue={defaultValue}
        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
      />
    </div>
  );
}