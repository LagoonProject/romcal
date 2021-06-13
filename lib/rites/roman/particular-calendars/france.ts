import {
  CalendarDef,
  DateDefinitions,
  ParticularConfig,
} from '../models/calendar-def';
import { Precedences } from '../constants/precedences';
import { LiturgicalColors } from '../constants/colors';
import { Europe } from './europe';

export class France extends CalendarDef {
  inheritFrom = Europe;

  particularConfig: ParticularConfig = {
    ascensionOnSunday: true,
    corpusChristiOnSunday: true,
    epiphanyOnSunday: true,
  };

  definitions: DateDefinitions = {
    genevieve_of_paris_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      date: '1-3',
    },

    remigius_of_reims_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '1-15',
    },

    bernadette_soubirous_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      date: '2-18',
    },

    ivo_of_kermartin_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '5-19',
    },

    joan_of_arc_virgin_copatroness_of_france: {
      precedence: Precedences.ProperMemorial_SecondPatron_11a,
      date: '5-30',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    pothinus_of_lyon_bishop_blandina_of_lyon_virgin_and_companions_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      date: '6-2',
    },

    clotilde_of_burgundy: {
      precedence: Precedences.OptionalMemorial_12,
      date: '6-4',
    },

    caesarius_of_arles_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '8-26',
    },

    therese_of_the_child_jesus_and_the_holy_face_of_lisieux_virgin_copatroness_of_france:
      {
        precedence: Precedences.ProperMemorial_11b,
        date: '10-1',
        liturgicalColors: LiturgicalColors.WHITE,
        // metadata: {
        //   titles: [Titles.DOCTOR_OF_THE_CHURCH],
        // },
      },
  };
}