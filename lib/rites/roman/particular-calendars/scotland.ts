import { CalendarDef, DateDefinitions } from '../models/calendar-def';
import { Precedences } from '../constants/precedences';
import { LiturgicalColors } from '../constants/colors';
import { Europe } from './europe';

export class Scotland extends CalendarDef {
  inheritFrom = Europe;

  definitions: DateDefinitions = {
    kentigern_of_scotland_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      date: '1-13',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    john_ogilvie_priest: {
      precedence: Precedences.ProperFeast_8f,
      date: '3-10',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    patrick_of_ireland_bishop: {
      precedence: Precedences.ProperFeast_8f,
      date: '3-17',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    columba_of_iona_abbot: {
      precedence: Precedences.ProperMemorial_11b,
      date: '6-9',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    ninian_of_whithorn_bishop: {
      precedence: Precedences.ProperMemorial_11b,
      date: '9-16',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    margaret_of_scotland: {
      precedence: Precedences.ProperFeast_8f,
      date: '11-16',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    andrew_apostle_patron_of_scotland: {
      precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
      date: '11-30',
      liturgicalColors: LiturgicalColors.WHITE,
    },
  };
}