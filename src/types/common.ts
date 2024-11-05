export interface User {
  name: string;
}

export interface Evaluation {
  id: number;
  evaluation_name: string;
  creation_date: string;
}

export interface Version {
  id: number;
  evaluation: Evaluation;
  version_name: string;
  token: string;
  user_interaction_effort: number;
  user_sessions_count: number;
  widgets_count: number;
  urls: string[];
}

export interface FullEvaluation extends Evaluation {
  versions: Version[];
}

export interface UserSession {
  session_id: string;
  date: string;
  time: string;
  user_interaction_effort: number;
}

export type WidgetType =
  | 'TextInput'
  | 'SelectInput'
  | 'RadioSet'
  | 'Anchor'
  | 'Datepicker'
  | 'DateSelect';

export interface Widget {
  id: number;
  label: string;
  widget_type: WidgetType;
  user_interaction_effort: number;
  url: string;
  xpath: string;
  weight: number;
}
