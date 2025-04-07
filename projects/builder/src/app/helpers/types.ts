import type { ItemQueryDimension } from '@luzmo/dashboard-contents-types';

type PublicConnector =
  | 'amazonathena'
  | 'asana'
  | 'bigquery'
  | 'citybikes'
  | 'clickhouse'
  | 'databricks'
  | 'demodataplugin'
  | 'elasticsearch'
  | 'exact'
  | 'exactonline'
  | 'exactonlinenl'
  | 'google'
  | 'googleanalytics'
  | 'googleanalyticsv4'
  | 'googledrive'
  | 'hubspot'
  | 'mailchimp'
  | 'mariadb'
  | 'mongodb'
  | 'mysql'
  | 'oracle'
  | 'panoply'
  | 'pipedrive'
  | 'pipelinedb'
  | 'postgresql'
  | 'presto'
  | 'quandl'
  | 'redshift'
  | 'salesforce'
  | 'saphana'
  | 'snowflake'
  | 'sqlserver'
  | 'stardog'
  | 'synapse'
  | 'teamleader'
  | 'trino'
  | 'typeform'
  | 'zendesk';

export type Securable = {
  acceleration_id: string;
  account_id: string;
  cache: number;
  created_at: string;
  css: string;
  derived: boolean;
  description: Record<string, string>;
  featured: boolean;
  id: string;
  is_variant: boolean;
  last_data_update_at: string;
  migrated_rows: number;
  modified_at: string;
  modifier_id: string;
  name: Record<string, string>;
  old_rows: number;
  old_storage: unknown;
  old_version: unknown;
  original_id: string;
  original_source_sheet: unknown;
  original_storage: string;
  owner_id: string;
  rows: number;
  source_dataset: unknown;
  source_id: string;
  source_query: string;
  source_sheet: unknown;
  statistics_updated_at: string;
  storage: string;
  subtitle: Record<string, string>;
  subtype: 'api' | 'upload' | PublicConnector;
  template_id: string;
  transformation: unknown;
  type: 'dataset' | 'dashboard';
  updated_at: string;
  uses_clickhouse_api: boolean;
  version: number;
};

export interface RowsData<T> {
  count: number;
  rows: T[];
}

export type ItemData = {
  cached: boolean;
  data: any[][];
  query_id: string;
};

export type ItemQueryMeasure = {
  dataset_id?: string;
  column_id?: string;
  formula_id?: string;
  formula?: string;
  aggregation?: {
    type: string;
    dataset_id?: string;
    column_id?: string;
    expression?: string;
    level?: number;
    discretization?: { type: 'none' | 'linear'; bins?: number };
  };
};

export type ItemQuerySort = {
  dataset_id?: string;
  column_id?: string;
  order?: 'asc' | 'desc';
  formula_id?: string;
  expression?: string;
};

export type ItemQuery = {
  dimensions: ItemQueryDimension[];
  measures: ItemQueryMeasure[];
  limit?: { by: number };
  order?: Partial<ItemQuerySort>[];
  where?: any[];
  having?: any[];
  options: any;
  context?: any;
};

export interface User {
  email: string;
  emailConfirmed: boolean;
  name: string;
  city?: string;
  theme: 'dark' | 'light';
  country_id?: string;
  locale_id: string;
  app_locale_id: string;
  created_at: string;
  onboarding_editor_active: boolean;
  onboarding_editor_progress: number;
  onboarding_embedded_editor_progress: number;
  onboarding_menu_visible: boolean;
  id: string;
  organizations: Organization[];
  organizationRole: OrganizationRole;
  userBackground: string;
  locale: UserLocale;
  flags: string[];
  thumbnail: Record<string, string>;
  country: unknown;
  userGroups: string[];
  plan: string;
  whitelabelingActive: boolean;
  authorization: {
    id: string;
    integration_id: string;
    type: 'sso' | 'temporary' | 'login' | 'api' | 'technical';
  };
}

export interface OrganizationRole {
  flagMember: boolean;
  flagEditor: boolean;
  flagOwn: boolean;
  flagSuborganizationOwn: boolean;
  sso: boolean;
  suborganization: string;
  created_at: Date;
  updated_at: Date;
  organization_id: string;
  user_id: string;
}

export interface Organization {
  id: string;
  name: Record<string, string>;
  created_at: Date;
  locale_id: string;
  app_locale_id: string;
  flag_publish: boolean;
  flag_whitelabeling: boolean;
  invitecode?: string;
  organizationBackground: unknown;
  locales: { id: string }[];
  organizationRole: OrganizationRole;
  thumbnail: Record<string, string>;
}

export interface UserLocale {
  id: string;
}

export type AuthResponse = {
  user: {
    id: string;
    token: {
      cookieExpiry: string;
      id: string;
      token: string;
      tokenExpiry: string;
      uid: string;
    };
    twoFactorAuthentication?: boolean;
  };
  error?: string;
};
