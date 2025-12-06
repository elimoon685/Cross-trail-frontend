export  type LeafCategory = string[];
export type CategoryGroup = Record<string, LeafCategory>; 
export type RootCategory = Record<string, CategoryGroup[]>; 

export type Props = {
  data: RootCategory;
};
export type IconComponent = React.ComponentType<{ className?: string }>;
export interface BrandItem {
  id: string;
  Icon: IconComponent;
  className: string; 
}