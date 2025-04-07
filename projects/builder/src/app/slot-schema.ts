import { z } from 'zod';

/**
 * Generated from FE types in frontend/libs/dashboard-contents-types/src/lib/shared/slots.ts:SlotConfig
 *
 * @todo: Extract to common folder
 */
export const SlotsConfigSchema = z
  .object({
    name: z.enum([
      'x-axis',
      'y-axis',
      'category',
      'measure',
      'coordinates',
      'legend',
      'geo',
      'image',
      'color',
      'levels',
      'slidermetric',
      'dimension',
      'destination',
      'source',
      'time',
      'identifier',
      'target',
      'size',
      'name',
      'columns',
      'column',
      'row',
      'evolution',
      'close',
      'open',
      'low',
      'high',
      'order',
      'route'
    ]),
    label: z.union([z.string(), z.record(z.string(), z.string())]).optional(),
    description: z.string().optional(),
    type: z.enum(['numeric', 'categorical', 'mixed']).optional(),
    order: z.number().optional(),
    acceptableColumnTypes: z
      .array(z.enum(['numeric', 'hierarchy', 'datetime', 'spatial']))
      .optional(),
    acceptableColumnSubtypes: z
      .array(
        z.enum([
          'duration',
          'currency',
          'coordinates',
          'hierarchy_element_expression',
          'topography',
          'ip_address'
        ])
      )
      .optional(),
    canAcceptFormula: z.boolean().optional(),
    rotate: z.boolean().optional(),
    canAcceptMultipleColumns: z.boolean().optional(),
    requiredMinimumColumnsCount: z.number().optional(),
    isRequired: z.boolean().optional(),
    isHidden: z.boolean().optional(),
    noMultipleIfSlotsFilled: z
      .array(
        z.enum([
          'x-axis',
          'y-axis',
          'category',
          'measure',
          'coordinates',
          'legend',
          'geo',
          'image',
          'color',
          'levels',
          'slidermetric',
          'dimension',
          'destination',
          'source',
          'time',
          'identifier',
          'target',
          'size',
          'name',
          'columns',
          'column',
          'row',
          'evolution',
          'close',
          'open',
          'low',
          'high',
          'order',
          'route'
        ])
      )
      .optional(),
    options: z
      .object({
        isBinningDisabled: z.boolean().optional(),
        isAggregationDisabled: z.boolean().optional(),
        areGrandTotalsEnabled: z.boolean().optional(),
        showOnlyFirstSlotGrandTotals: z.boolean().optional(),
        isCumulativeSumEnabled: z.boolean().optional(),
        areDatetimeOptionsEnabled: z.boolean().optional(),
        showOnlyFirstSlotContentOptions: z.boolean().optional()
      })
      .optional()
  })
  .array();
