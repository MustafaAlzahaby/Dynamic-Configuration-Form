export type ConfigOption = {
  label: string;
  value: string;
};

export type ConfigData = Array<Record<string, Record<string, string>>>;

export function extractConfigOptions(config: ConfigData): Record<string, ConfigOption[]> {
  const fields = config[0];
  const options: Record<string, ConfigOption[]> = {};

  for (const [field, choices] of Object.entries(fields)) {
    options[field] = Object.entries(choices).map(([label, value]) => ({ label, value }));
  }

  return options;
}