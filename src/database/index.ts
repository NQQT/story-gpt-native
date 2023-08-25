import { createDataState } from '@common/assets';
import { SETTING_MS_FAMILY_FEUD } from './setting';
import { INSTRUCTION_CONTINUE_STANDARD, INSTRUCTION_START_STANDARD } from './instruction';
import { WRITING_STYLE_STANDARD } from './writing';

/**
 * The complete database structure is stored here
 */
export const database = createDataState({
  configs: {
    // Recalling API after Segment of 1000.
    segmentLength: 1500,
  },
  record: {
    story: [],
    counter: {
      token: 0,
    },
  },
  api: {
    key: '18d2ca9d-cc27-41b5-a696-01fa82f8fccf',
  },
  story: {
    setting: {
      value: 0,
      // List of Story Setting Options
      options: [SETTING_MS_FAMILY_FEUD],
    },
    style: {
      writing: {
        value: 0,
        options: [WRITING_STYLE_STANDARD],
      },
    },
    instruction: {
      start: {
        value: 0,
        options: [INSTRUCTION_START_STANDARD],
      },
      modifier: {
        value: 0,
        options: [],
      },
      continue: {
        value: 0,
        // List of Instruction
        options: [INSTRUCTION_CONTINUE_STANDARD],
      },
    },
  },
  processing: false,
});

export * from './helper';
