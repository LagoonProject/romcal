import { CalendarDef, DateDefinitions } from '../models/calendar-def';
import { Precedences } from '../constants/precedences';
import { LiturgicalColors } from '../constants/colors';
import { Europe } from './europe';

export class Germany extends CalendarDef {
  inheritFrom = Europe;

  definitions: DateDefinitions = {
    john_nepomucene_neumann_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '1-5',
    },

    valentine_of_raetia_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '1-7',
    },

    severinus_of_noricum_monk: {
      precedence: Precedences.OptionalMemorial_12,
      date: '1-8',
    },

    meinrad_of_einsiedeln_martyr: {
      precedence: Precedences.OptionalMemorial_12,
      date: '1-21',
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },

    henry_suso_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '1-23',
    },

    rabanus_maurus_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '2-4',
    },

    matthias_apostle: {
      precedence: Precedences.ProperMemorial_11b,
      date: '2-24',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    walpurga_of_heidenheim_abbess: {
      precedence: Precedences.OptionalMemorial_12,
      date: '2-25',
    },

    fridolin_of_sackingen_monk: {
      precedence: Precedences.OptionalMemorial_12,
      date: '3-6',
    },

    bruno_of_querfurt_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '3-9',
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },

    matilda_of_ringelheim: {
      precedence: Precedences.OptionalMemorial_12,
      date: '3-14',
    },

    clement_mary_hofbauer_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '3-15',
    },

    gertrude_of_nivelles_abbess: {
      precedence: Precedences.OptionalMemorial_12,
      date: '3-17',
    },

    ludger_of_munster_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '3-26',
    },

    leo_ix_pope: {
      precedence: Precedences.OptionalMemorial_12,
      date: '4-19',
    },

    marcel_callo_martyr: {
      precedence: Precedences.OptionalMemorial_12,
      date: '4-19',
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },

    conrad_of_parzham_religious: {
      precedence: Precedences.OptionalMemorial_12,
      date: '4-21',
    },

    peter_canisius_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '4-27',
      // metadata: {
      //   titles: [Titles.DOCTOR_OF_THE_CHURCH],
      // },
    },

    florian_of_lorch_and_companions_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      date: '5-4',
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },

    gotthard_of_hildesheim_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '5-5',
    },

    john_nepomucene_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '5-16',
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },

    hermann_joseph_of_steinfeld_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '5-21',
    },

    vitus_of_lucania_martyr: {
      precedence: Precedences.OptionalMemorial_12,
      date: '6-15',
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },

    benno_of_meissen_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '6-16',
    },

    hemma_of_gurk: {
      precedence: Precedences.OptionalMemorial_12,
      date: '6-27',
    },

    otto_of_bamberg_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '6-30',
    },

    visitation_of_mary: {
      precedence: Precedences.ProperFeast_8f,
      date: '7-2',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    ulrich_of_augsburg_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '7-4',
    },

    willibald_of_eichstatt_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '7-7',
    },

    kilian_of_wurzburg_bishop_and_companions_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      date: '7-8',
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },

    canute_iv_of_denmark_eric_ix_of_sweden_and_olaf_ii_of_norway_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      date: '7-10',
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },

    henry_ii_emperor_and_cunigunde_of_luxembourg: {
      precedence: Precedences.OptionalMemorial_12,
      date: '7-13',
    },

    margaret_of_antioch_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      date: '7-20',
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },

    christopher_of_palestine_martyr: {
      precedence: Precedences.OptionalMemorial_12,
      date: '7-24',
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },

    paulinus_of_trier_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '8-31',
    },

    lambert_of_maastricht_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '9-18',
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },

    maurice_of_agaunum_and_companions_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      date: '9-22',
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },

    rupert_of_salzburg_and_virgilius_of_salzburg_bishops: {
      precedence: Precedences.OptionalMemorial_12,
      date: '9-24',
    },

    nicholas_of_flue_hermit: {
      precedence: Precedences.OptionalMemorial_12,
      date: '9-25',
    },

    leoba_of_tauberbischofsheim_abbess: {
      precedence: Precedences.OptionalMemorial_12,
      date: '9-28',
    },

    gall_of_switzerland_abbot: {
      precedence: Precedences.OptionalMemorial_12,
      date: '10-16',
    },

    wendelin_of_trier_abbot: {
      precedence: Precedences.OptionalMemorial_12,
      date: '10-20',
    },

    ursula_of_cologne_and_companions_virgins: {
      precedence: Precedences.OptionalMemorial_12,
      date: '10-21',
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },

    wolfgang_of_regensburg_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '10-31',
    },

    hubert_of_liege_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '11-3',
    },

    pirmin_of_hornbach_abbot: {
      precedence: Precedences.OptionalMemorial_12,
      date: '11-3',
    },

    leonard_of_noblac_hermit: {
      precedence: Precedences.OptionalMemorial_12,
      date: '11-6',
    },

    willibrord_of_utrecht_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '11-7',
    },

    leopold_iii_of_babenberg: {
      precedence: Precedences.OptionalMemorial_12,
      date: '11-15',
    },

    gertrude_the_great_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      date: '11-17',
    },

    elizabeth_of_hungary_religious: {
      precedence: Precedences.ProperMemorial_11b,
      date: '11-19',
      liturgicalColors: LiturgicalColors.WHITE,
    },

    corbinian_of_freising_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '11-20',
    },

    conrad_of_constance_and_gebhard_of_constance_bishops: {
      precedence: Precedences.OptionalMemorial_12,
      date: '11-26',
    },

    lucius_of_chur_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '12-2',
      // metadata: {
      //   titles: [Titles.MARTYR],
      // },
    },

    barbara_of_heliopolis_virgin: {
      precedence: Precedences.OptionalMemorial_12,
      date: '12-4',
    },

    adolph_kolping_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '12-4',
    },

    anno_of_cologne_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '12-5',
    },

    odile_of_alsace_abbess: {
      precedence: Precedences.OptionalMemorial_12,
      date: '12-13',
    },

    stephen_the_first_martyr: {
      isHolyDayOfObligation: true,
    },

    easter_monday: {
      isHolyDayOfObligation: true,
    },

    mary_mother_of_the_church: {
      isHolyDayOfObligation: true,
    },
  };
}