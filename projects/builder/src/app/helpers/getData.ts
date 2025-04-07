import type { ItemQueryDimension, Slot } from '@luzmo/dashboard-contents-types';
import type { ItemQuery, ItemQueryMeasure } from './types';

function generateMetadataFromSlot(
  slots: Slot[],
  slotName: string,
  name: string
) {
  const slot = slots.find((s) => s.name === slotName) || { content: [] };
  const content = slot.content || [];

  return {
    [`content${name}`]: content,
    [`has${name}`]: content.length > 0
  };
}

export function buildLuzmoQuery(slots: Slot[]): ItemQuery {
  // Generate metadata from slots
  const dateDef = generateMetadataFromSlot(slots, 'date', 'Date');
  const orderDef = generateMetadataFromSlot(slots, 'order', 'Order');
  const categoryDef = generateMetadataFromSlot(slots, 'category', 'Category');
  const measureDef = generateMetadataFromSlot(slots, 'measure', 'Measure');
  const dimensions: ItemQueryDimension[] = [];
  const measures: ItemQueryMeasure[] = [];

  console.log(dateDef, categoryDef, measureDef);

  // Add dimensions and measures
  if (dateDef['hasDate']) {
    for (const date of (dateDef as any)['contentDate']) {
      dimensions.push({
        dataset_id: date.datasetId,
        column_id: date.columnId
      });
    }
  }
  if (orderDef['hasOrder']) {
    for (const order of (orderDef as any)['contentOrder']) {
      dimensions.push({
        dataset_id: order.datasetId,
        column_id: order.columnId
      });
    }
  }
  if (categoryDef['hasCategory']) {
    for (const category of (categoryDef as any)['contentCategory']) {
      dimensions.push({
        dataset_id: category.datasetId,
        column_id: category.columnId
      });
    }
  }
  if (measureDef['hasMeasure']) {
    for (const measure of (measureDef as any)['contentMeasure']) {
      measures.push({
        dataset_id: measure.datasetId,
        column_id: measure.columnId
      });
    }
  }

  if (dimensions.length === 0 && measures.length === 0) {
    const xSlot = slots.find((slot) => (slot.name as any) === 'x');
    const ySlot = slots.find((slot) => (slot.name as any) === 'y');

    // Add dimensions and measures
    if (
      xSlot &&
      xSlot?.content?.length > 0 &&
      ySlot &&
      ySlot?.content?.length > 0
    ) {
      dimensions.push({
        dataset_id: xSlot.content[0].datasetId,
        column_id: xSlot.content[0].columnId
      });
      dimensions.push({
        dataset_id: ySlot.content[0].datasetId,
        column_id: ySlot.content[0].columnId
      });
    }
  }

  console.log('QQ', dimensions, measures);

  // Build query object
  const query: ItemQuery = {
    dimensions,
    measures,
    limit: { by: 60000 },
    options: {
      locale_id: 'en',
      timezone_id: 'UTC',
      rollup_data: false
    }
  };

  console.log(query);

  return query;
}
