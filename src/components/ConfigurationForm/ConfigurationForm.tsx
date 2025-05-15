import React, { useState, useMemo } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { extractConfigOptions } from '../../utils/extractConfigOptions';
import type { ConfigOption } from '../../utils/extractConfigOptions';
import type { ConfigData } from '../../utils/extractConfigOptions';
import './ConfigurationForm.scss';

interface Props {
  configData: ConfigData;
}

const ConfigurationForm: React.FC<Props> = ({ configData }) => {
  const configOptions = useMemo(() => extractConfigOptions(configData), [configData]);
  const [formState, setFormState] = useState<Record<string, string>>({});
  const [error, setError] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (field: string) => (e: ChangeEvent<HTMLSelectElement>) => {
    setFormState((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
  e.preventDefault();

  const filledFields = Object.values(formState).filter(Boolean);
  if (filledFields.length < 3) {
    setError('Please fill at least 3 fields before submitting.');
    return;
  }

  setError('');

  const orderedFormData: Record<string, string> = {};
  const fieldOrder = Object.keys(configData[0]);

  fieldOrder.forEach((field) => {
    const selectedValue = formState[field];
    const valueMap = configData[0][field];

    
    const selectedLabel = Object.keys(valueMap).find(
      (label) => valueMap[label] === selectedValue
    );

    orderedFormData[field] = selectedLabel || '';
  });

  console.log('Submitted Config:', JSON.stringify(orderedFormData, null, 2));
  setShowSuccess(true);
setTimeout(() => setShowSuccess(false), 2000); 

};


  return (
    <form onSubmit={handleSubmit} className="config-form">
        {showSuccess && (
  <div className="success-message">
    Form Submitted!
  </div>
)}

      <h2>Configuration Options</h2>
      {Object.entries(configOptions).map(([fieldName, options]: [string, ConfigOption[]]) => (
        <div key={fieldName} className="form-group">
          <label htmlFor={fieldName}>{fieldName}</label>
          <select
            id={fieldName}
            value={formState[fieldName] || ''}
            onChange={handleChange(fieldName)}
          >
            <option value="">Select...</option>
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      ))}
      {error && <p className="error">{error}</p>}
      <button type="submit">Submit</button>
    </form>
    
  );
};

export default ConfigurationForm;