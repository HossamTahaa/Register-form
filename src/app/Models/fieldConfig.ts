export interface FieldConfig {
  accessor: string;  
  type?: string; 
  label?: string;  
  value?: any;  
  disabled?: boolean;  
  validations?: { type: string; value?: any }[];
  options?: { label: string; value: any }[];   
}
