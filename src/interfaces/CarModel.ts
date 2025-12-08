export interface CarModel {
  model_id: number;
  man_id: number;
  model_name: string;
  is_car: boolean;
  is_spec: boolean;
  is_moto: boolean;
  model_group: string;
  sort_order: number;
  cat_man_id: number;
  cat_model_id: number;
  cat_modif_id: number;
  is_carmon: boolean;
  show_in_salons: number;
  shown_in_slider: number;
  is_synced: number;
}
