export interface ConfigFieldOptions {
  [label: string]: string;
}

export interface ConfigSchema {
  [fieldName: string]: ConfigFieldOptions;
}

export type ConfigData = ConfigSchema[];

export interface ConfigOption {
  label: string;
  value: string;
}
