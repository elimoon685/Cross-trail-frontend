export  type LeafCategory = string[];
export type CategoryGroup = Record<string, LeafCategory>; 
export type RootCategory = Record<string, CategoryGroup[]>; 

export type Props = {
  data: RootCategory;
};