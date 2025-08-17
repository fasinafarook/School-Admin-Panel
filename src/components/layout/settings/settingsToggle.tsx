import { Checkbox } from "../../ui/checkbox";
import { Label } from "../../ui/label";

interface SettingsToggleProps {
  id: string;
  label: string;
  description: string;
  defaultChecked?: boolean;
}

export function SettingsToggle({ id, label, description, defaultChecked }: SettingsToggleProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="space-y-1">
        <Label htmlFor={id} className="text-sm font-medium text-gray-900">
          {label}
        </Label>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <Checkbox
        id={id}
        defaultChecked={defaultChecked}
        className="data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
      />
    </div>
  );
}